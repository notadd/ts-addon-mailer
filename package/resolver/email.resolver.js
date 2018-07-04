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
const graphql_1 = require("@nestjs/graphql");
const email_service_1 = require("../service/email.service");
const common_1 = require("@nestjs/common");
let EmailResolver = class EmailResolver {
    constructor(emailService) {
        this.emailService = emailService;
    }
    sendEmail(obj, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const { mContent, mid, email, sender, emailConfigId } = data;
            return this.emailService.sendEmail(mContent, mid, email, sender, emailConfigId);
        });
    }
    createEmailModule(obj, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.emailService.createEmailModule(data.emailModule);
        });
    }
};
__decorate([
    graphql_1.Query("sendEmail"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], EmailResolver.prototype, "sendEmail", null);
__decorate([
    graphql_1.Mutation("createEmailModule"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], EmailResolver.prototype, "createEmailModule", null);
EmailResolver = __decorate([
    graphql_1.Resolver(),
    __param(0, common_1.Inject("EmailService")),
    __metadata("design:paramtypes", [email_service_1.EmailService])
], EmailResolver);
exports.EmailResolver = EmailResolver;

//# sourceMappingURL=email.resolver.js.map
