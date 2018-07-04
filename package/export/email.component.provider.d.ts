import { EmailService } from "../service/email.service";
export declare class EmailComponentProvider {
    private readonly emailSerice;
    constructor(emailSerice: EmailService);
    sendEmail(mContent: any, mid: number, email: [string], sender: string, emailConfigId: number): Promise<{
        code: any;
        message: any;
    }>;
}
