import { EmailService } from "../service/email.service";
import { Inject, Injectable } from "@nestjs/common";

@Injectable()
export class EmailComponentProvider {
   constructor(
     @Inject(EmailService)
     private readonly emailSerice: EmailService,
   ) {}

  /**
   * 发送邮箱
   * @param {number} mid 模板Id
   * @param {[number]} uid 用户Id
   * @param {string} sender 邮件主题
   * @returns {Promise<{code; message}>}
   */
   async sendEmail(mContent: any, mid: number, email: [string], sender: string, emailConfigId: number) {
     return this.emailSerice.sendEmail(mContent, mid, email, sender, emailConfigId);
   }
}
