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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
let EmailLogEntity = class EmailLogEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], EmailLogEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        name: "email",
        nullable: true
    }),
    __metadata("design:type", String)
], EmailLogEntity.prototype, "email", void 0);
__decorate([
    typeorm_1.Column({
        name: "emailModuleId"
    }),
    __metadata("design:type", Number)
], EmailLogEntity.prototype, "emailModuleId", void 0);
__decorate([
    typeorm_1.Column({
        name: "code"
    }),
    __metadata("design:type", Number)
], EmailLogEntity.prototype, "code", void 0);
__decorate([
    typeorm_1.Column({
        name: "message",
        nullable: true
    }),
    __metadata("design:type", String)
], EmailLogEntity.prototype, "message", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], EmailLogEntity.prototype, "createDate", void 0);
EmailLogEntity = __decorate([
    typeorm_1.Entity("email_log")
], EmailLogEntity);
exports.EmailLogEntity = EmailLogEntity;

//# sourceMappingURL=emailLog.entity.js.map
