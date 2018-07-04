import { EmailModuleEntity } from "../entity/emailModule.entity";
import { Repository } from "typeorm";
import { EmailConfigureEntity } from "../entity/emailConfigure.entity";
import { EmailLogEntity } from "../entity/emailLog.entity";
export declare class EmailService {
    private readonly emailModuleReq;
    private readonly emailConfigRep;
    private readonly emailLogRep;
    constructor(emailModuleReq: Repository<EmailModuleEntity>, emailConfigRep: Repository<EmailConfigureEntity>, emailLogRep: Repository<EmailLogEntity>);
    sendEmail(mContent: any, mid: number, email: [string], sender: string, emailConfigId: number): Promise<{
        code;
        message;
    }>;
    createEmailModule(emailModule: EmailModuleEntity): Promise<{
        code;
        message;
    }>;
}
