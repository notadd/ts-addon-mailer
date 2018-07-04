import { EmailService } from "../service/email.service";
export declare class EmailControllers {
    private readonly emailService;
    constructor(emailService: EmailService);
    emailMessage(data: {
        mContent: any;
        mid: number;
        email: [string];
        sender: string;
        emailConfigId: number;
    }): Promise<{
        code: number;
        message: string;
    }>;
}
