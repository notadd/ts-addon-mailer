"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
const crypto = require("crypto");
let CryptorUtil = class CryptorUtil {
    encryptPassword(password, email) {
        return __awaiter(this, void 0, void 0, function* () {
            return crypto.createHash("sha256").update(password + email.substr(2, 8)).digest("hex");
        });
    }
    encryptor(aesKey, originalText) {
        return __awaiter(this, void 0, void 0, function* () {
            const key = crypto.createHash("sha256").update(aesKey).digest();
            const iv = key.slice(0, 16);
            const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
            const cipherText = Buffer.concat([cipher.update(Buffer.from(originalText)), cipher.final()]);
            return cipherText.toString("base64");
        });
    }
    decryptor(aesKey, cipherText) {
        return __awaiter(this, void 0, void 0, function* () {
            const key = crypto.createHash("sha256").update(aesKey).digest();
            const iv = key.slice(0, 16);
            const decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
            const originalText = Buffer.concat([decipher.update(cipherText, "base64"), decipher.final()]);
            return originalText.toString();
        });
    }
    batchEncryptor(aesKey, originalTextArr) {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.all(originalTextArr.map((item) => __awaiter(this, void 0, void 0, function* () {
                return item = yield this.encryptor(aesKey, item);
            })));
        });
    }
    batchDecryptor(aesKey, cipherTextArr) {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.all(cipherTextArr.map((item) => __awaiter(this, void 0, void 0, function* () {
                return item = yield this.decryptor(aesKey, item);
            })));
        });
    }
};
CryptorUtil = __decorate([
    common_1.Injectable()
], CryptorUtil);
exports.CryptorUtil = CryptorUtil;

//# sourceMappingURL=cryptor.util.js.map
