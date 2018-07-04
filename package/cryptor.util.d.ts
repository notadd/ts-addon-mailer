export declare class CryptorUtil {
    encryptPassword(password: string, email: string): Promise<string>;
    encryptor(aesKey: string, originalText: string): Promise<string>;
    decryptor(aesKey: string, cipherText: string): Promise<string>;
    batchEncryptor(aesKey: string, originalTextArr: Array<string>): Promise<Array<string>>;
    batchDecryptor(aesKey: string, cipherTextArr: Array<string>): Promise<Array<string>>;
}
