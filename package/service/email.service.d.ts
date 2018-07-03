import { EmailModuleEntity } from "../entity/emailModule.entity";
import { Repository } from "typeorm";
export declare class EmailService {
    private readonly emailModuleReq;
    constructor(emailModuleReq: Repository<EmailModuleEntity>);
    sendEmail(mContent: any, mid: number, email: [string], sender: string): Promise<{
        code;
        message;
    }>;
    createEmailModule(emailModule: EmailModuleEntity): Promise<{
        code;
        message;
    }>;
}
