"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const email_controllers_1 = require("./controller/email.controllers");
const email_resolver_1 = require("./resolver/email.resolver");
const email_service_1 = require("./service/email.service");
const email_component_provider_1 = require("./export/email.component.provider");
const emailModule_entity_1 = require("./entity/emailModule.entity");
const emailLog_entity_1 = require("./entity/emailLog.entity");
const emailConfigure_entity_1 = require("./entity/emailConfigure.entity");
const cryptor_util_1 = require("./cryptor.util");
let EmailModule = class EmailModule {
};
EmailModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([emailModule_entity_1.EmailModuleEntity, emailLog_entity_1.EmailLogEntity, emailConfigure_entity_1.EmailConfigureEntity]),
        ],
        controllers: [email_controllers_1.EmailControllers],
        providers: [
            email_resolver_1.EmailResolver,
            email_service_1.EmailService,
            email_component_provider_1.EmailComponentProvider,
            cryptor_util_1.CryptorUtil,
        ],
        exports: [email_component_provider_1.EmailComponentProvider],
    })
], EmailModule);
exports.EmailModule = EmailModule;

//# sourceMappingURL=email.module.js.map
