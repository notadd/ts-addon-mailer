import { EmailModuleEntity } from "../entity/emailModule.entity";
import { Repository } from "typeorm";
import { EmailConfigureEntity } from "../entity/emailConfigure.entity";
import { EmailLogEntity } from "../entity/emailLog.entity";
import { CryptorUtil } from "../cryptor.util";
export declare class EmailService {
    private readonly emailModuleReq;
    private readonly emailConfigRep;
    private readonly emailLogRep;
    private readonly cryptorUtil;
    constructor(emailModuleReq: Repository<EmailModuleEntity>, emailConfigRep: Repository<EmailConfigureEntity>, emailLogRep: Repository<EmailLogEntity>, cryptorUtil: CryptorUtil);
    sendEmail(mContent: any, mid: number, email: [string], sender: string, emailConfigId: number): Promise<{
        code: any;
        message: any;
    }>;
    createEmailModule(emailModule: EmailModuleEntity): Promise<{
        code: any;
        message: any;
    }>;
    createEmailConfigure(emailConfigure: EmailConfigureEntity): Promise<{
        code: any;
        message: any;
    }>;
}
