import { HttpException, Injectable } from "@nestjs/common";
import { EmailModuleEntity } from "../entity/emailModule.entity";
import { render } from "ejs";
import { createTransport } from "nodemailer";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { EmailConfigureEntity } from "../entity/emailConfigure.entity";
import { EmailLogEntity } from "../entity/emailLog.entity";

let code;
let message;
@Injectable()
export class EmailService {
 constructor(
   @InjectRepository(EmailModuleEntity)
   private readonly emailModuleReq: Repository<EmailModuleEntity>,
   @InjectRepository(EmailConfigureEntity)
   private readonly emailConfigRep: Repository<EmailConfigureEntity>,
   @InjectRepository(EmailLogEntity)
   private readonly emailLogRep: Repository<EmailLogEntity>,
 ) {}

  /**
   * 发送邮箱
   * @param {EmailModuleEntity} emailModule 邮箱模板
   * @param {any} mContent 邮箱模板
   * @param {email[]} emailUser 收信人地址
   * @param {string} sender 发信人
   * @returns {Promise<{code: number; message: string}>}
   */
  async sendEmail(mContent: any, mid: number, email: [string], sender: string, emailConfigId: number): Promise<{code, message }> {
    const emailModule: EmailModuleEntity | undefined = await this.emailModuleReq.findOne(mid);
    if (!emailModule) {
      throw new HttpException("发送邮箱模板不存在", 406);
    }
    if (email.length <= 0) {
      throw new HttpException("收件人不存在", 406);
    }
    const emailConfig: EmailConfigureEntity | undefined = await this.emailConfigRep.findOne(emailConfigId);
    if (emailConfig === undefined) {
      return {code: 400, message: "短信配置文件不存在"};
    }
    // 可参考 https://help.aliyun.com/document_detail/29456.html?spm=a2c4g.11186623.6.606.uvABcP
    for (let i = 0; i < email.length; i++) {
      const str = `${emailModule.module}`;
      // ejs 模板渲染工具，data为参数，str为模板
      const template = render(str, mContent);
      const mailOptions = {
        // 发送人地址必须与服务器连接配置中的auth中的user属性相同
        from: `${sender}` + `${emailConfig.fromAddress}`,
        // 收件人地址
        to: email[i],
        // 邮件主题
        subject: `${emailModule.emailTheme}`,
        // 邮件内容
        html: `${template}`,
      };
      const emailLog: EmailLogEntity | undefined = new EmailLogEntity();
      // 服务器连接配置
      createTransport({
        // 邮箱服务器，这里是阿里云服务器
        host: emailConfig.hostAddress,
        port: 465,
        secureConnection: true,
        auth: {
          user: emailConfig.authUser,
          pass: emailConfig.authPass,
        },
      }).sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error.message);
          code = 400;
          message = "发送失败，请稍后重试！";
          emailLog.email = email[i];
          emailLog.code = code;
          emailLog.message = error.message;
          emailLog.emailModuleId = mid;
          this.emailLogRep.save(emailLog);
          return {code, message};
        }
        console.log("Message sent: " + info.response);
      });
      code = 200;
      message = "发送成功";
      emailLog.email = email[i];
      emailLog.code = code;
      emailLog.message = message;
      emailLog.emailModuleId = mid;
      await this.emailLogRep.save(emailLog);
      return {code, message};
    }
  }

  /**
   * 添加短信模板
   * @param {EmailModuleEntity} emailModule
   * @returns {Promise<{code; message}>}
   */
  async createEmailModule(emailModule: EmailModuleEntity): Promise<{code, message }> {
    try {
      await this.emailModuleReq.save(emailModule);
      return {code: 200, message: "添加成功"};
    } catch (error) {
      return {code: 406, message: "添加失败，错误原因：" + error.toString()};
    }
  }
}
