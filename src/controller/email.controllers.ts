import { Body, Controller, Post } from "@nestjs/common";
import { EmailService } from "../service/email.service";

@Controller("email")
export class EmailControllers {
  constructor(
    private readonly emailService: EmailService,
  ) {}

  /**
   * 发送短信
   * @param {{emailModule: EmailModuleEntity; emailUser: EmailUserEntity[]; sender: string}} data
   * @returns {Promise<{code: number; message: string}>}
   */
    @Post("emailMessage")
    async emailMessage(@Body() data: {mContent: any, mid: number, email: [string], sender: string}): Promise<{ code: number, message:
      string }> {
      const {mContent, mid, email, sender}  =  data;
      return this.emailService.sendEmail(mContent, mid, email, sender);
    }
}
