import { EmailService } from "../service/email.service";
import { EmailModuleEntity } from "../entity/emailModule.entity";
import { EmailConfigureEntity } from "../entity/emailConfigure.entity";
export declare class EmailResolver {
    private readonly emailService;
    constructor(emailService: EmailService);
    sendEmail(obj: any, data: {
        mContent: any;
        mid: number;
        email: [string];
        sender: string;
        emailConfigId: number;
    }): Promise<{
        code: any;
        message: any;
    }>;
    createEmailModule(obj: any, data: {
        emailModule: EmailModuleEntity;
    }): Promise<{
        code: any;
        message: any;
    }>;
    createEmailConfigure(obj: any, data: {
        emailConfigure: EmailConfigureEntity;
    }): Promise<{
        code: any;
        message: any;
    }>;
}
