import { EmailService } from "../service/email.service";
import { EmailConfigureEntity } from "../entity/emailConfigure.entity";
export declare class EmailComponentProvider {
    private readonly emailSerice;
    constructor(emailSerice: EmailService);
    sendEmail(mContent: any, mid: number, email: [string], sender: string, emailConfigId: number): Promise<{
        code: any;
        message: any;
    }>;
    createEmailConfigure(emailConfigure: EmailConfigureEntity): Promise<{
        code: any;
        message: any;
    }>;
}
