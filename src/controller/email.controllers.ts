import { Body, Controller, Inject, Post } from "@nestjs/common";
import { EmailService } from "../service/email.service";

@Controller("email")
export class EmailControllers {
  constructor(
    @Inject(EmailService) private readonly emailService: EmailService,
  ) {}

  /**
   * 发送短信
   * @param {{emailModule: EmailModuleEntity; emailUser: EmailUserEntity[]; sender: string}} data
   * @returns {Promise<{code: number; message: string}>}
   */
    @Post("emailMessage")
    async emailMessage(@Body() data: {mContent: any, mid: number, email: [string], sender: string, emailConfigId: number}): Promise<{ code: number, message:
      string }> {
      const {mContent, mid, email, sender, emailConfigId}  =  data;
      return this.emailService.sendEmail(mContent, mid, email, sender, emailConfigId);
    }
}
