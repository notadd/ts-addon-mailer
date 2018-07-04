import { EmailService } from "../service/email.service";
export declare class EmailComponentProvider {
    private readonly emailSerice;
    constructor(emailSerice: EmailService);
    sendEmail(mContent: any, mid: number, email: [string], sender: string): Promise<any>;
}
