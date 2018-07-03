"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const emailModule_entity_1 = require("../entity/emailModule.entity");
const ejs_1 = require("ejs");
const nodemailer_1 = require("nodemailer");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let EmailService = class EmailService {
    constructor(emailModuleReq) {
        this.emailModuleReq = emailModuleReq;
    }
    sendEmail(mContent, mid, email, sender) {
        return __awaiter(this, void 0, void 0, function* () {
            const emailModule = yield this.emailModuleReq.findOne(mid);
            if (!emailModule) {
                throw new common_1.HttpException("发送邮箱模板不存在", 406);
            }
            if (email.length <= 0) {
                throw new common_1.HttpException("收件人不存在", 406);
            }
            for (let i = 0; i < email.length; i++) {
                const str = `${emailModule.module}`;
                const template = ejs_1.render(str, mContent);
                const mailOptions = {
                    from: `${sender}<ibenchu-demo@yzlei.ibenchu.pw>`,
                    to: email[i],
                    subject: `${emailModule.emailTheme}`,
                    html: `${template}`,
                };
                nodemailer_1.createTransport({
                    host: "smtpdm.aliyun.com",
                    port: 465,
                    secureConnection: true,
                    auth: {
                        user: "ibenchu-demo@yzlei.ibenchu.pw",
                        pass: "ibenchu123QWE",
                    },
                }).sendMail(mailOptions, (error, info) => {
                    if (error) {
                        console.log(error);
                        return { code: 200, message: "发送失败，请稍后重试！" };
                    }
                    console.log("Message sent: " + info.response);
                });
                return { code: 200, message: "发送成功" };
            }
        });
    }
    createEmailModule(emailModule) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.emailModuleReq.save(emailModule);
                return { code: 200, message: "添加成功" };
            }
            catch (error) {
                return { code: 406, message: "添加失败，错误原因：" + error.toString() };
            }
        });
    }
};
EmailService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(emailModule_entity_1.EmailModuleEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], EmailService);
exports.EmailService = EmailService;

//# sourceMappingURL=email.service.js.map
