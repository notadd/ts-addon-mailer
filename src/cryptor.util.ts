import { Injectable } from "@nestjs/common";
import * as crypto from "crypto";

/**
 * 加密解密工具
 */
@Injectable()
export class CryptorUtil {

    /**
     * 通过邮箱加密密码
     *
     * @param password 密码
     * @param email 邮箱
     */
    async encryptPassword(password: string, email: string) {
        return crypto.createHash("sha256").update(password + email.substr(2, 8)).digest("hex");
    }

    /**
     * 对称加密工具
     * @param aesKey 密钥
     * @param originalText 原文
     * @returns 密文 cipherText
     */
    async encryptor(aesKey: string, originalText: string): Promise<string> {
        // 使用 aesKey 生成加密 key
        const key = crypto.createHash("sha256").update(aesKey).digest();
        // 初始化向量，截取key前16字节
        const iv = key.slice(0, 16);
        // 使用 aes-256-cbc 算法创建 cipher
        const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
        // 加密
        const cipherText = Buffer.concat([cipher.update(Buffer.from(originalText)), cipher.final()]);
        // 返回密文
        return cipherText.toString("base64");
    }

    /**
     * 对称解密工具
     * @param aesKey 密钥
     * @param cipherText 密文
     * @returns 原文 originalText
     */
    async decryptor(aesKey: string, cipherText: string): Promise<string> {
        // 使用 aesKey 生成解密 key
        const key = crypto.createHash("sha256").update(aesKey).digest();
        // 初始化向量，截取key前16字节
        const iv = key.slice(0, 16);
        // 使用 aes-256-cbc 算法创建 decipher
        const decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
        // 解密
        const originalText = Buffer.concat([decipher.update(cipherText, "base64"), decipher.final()]);
        // 返回原文
        return originalText.toString();
    }

    /**
     * 批量对称加密工具
     * @param aesKey 密钥
     * @param originalTextArr 原文组
     * @returns 密文组 cipherTextArr
     */
    async batchEncryptor(aesKey: string, originalTextArr: Array<string>): Promise<Array<string>> {
        return Promise.all(originalTextArr.map(async (item) => {
            return item = await this.encryptor(aesKey, item);
        }));
    }

    /**
     * 批量对称解密工具
     * @param aesKey 密钥
     * @param cipherTextArr 密文
     * @returns 原文组 originalTextArr
     */
    async batchDecryptor(aesKey: string, cipherTextArr: Array<string>): Promise<Array<string>> {
        return Promise.all(cipherTextArr.map(async (item) => {
            return item = await this.decryptor(aesKey, item);
        }));
    }
}