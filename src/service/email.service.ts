import { HttpException, Injectable } from "@nestjs/common";
import { EmailModuleEntity } from "../entity/emailModule.entity";
import { render } from "ejs";
import { createTransport } from "nodemailer";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";


@Injectable()
export class EmailService {
 constructor(
   @InjectRepository(EmailModuleEntity)
   private readonly emailModuleReq: Repository<EmailModuleEntity>,
 ) {}

  /**
   * 发送邮箱
   * @param {EmailModuleEntity} emailModule 邮箱模板
   * @param {any} mContent 邮箱模板
   * @param {EmailUserEntity[]} emailUser 收信人
   * @param {string} sender 发信人
   * @returns {Promise<{code: number; message: string}>}
   */
  async sendEmail(mContent: any, mid: number, email: [string], sender: string): Promise<{code, message }> {
    const emailModule: EmailModuleEntity | undefined = await this.emailModuleReq.findOne(mid);
    if (!emailModule) {
      throw new HttpException("发送邮箱模板不存在", 406);
    }
    if (email.length <= 0) {
      throw new HttpException("收件人不存在", 406);
    }
    for (let i = 0; i < email.length; i++) {
      const str = `${emailModule.module}`;
      // ejs 模板渲染工具，data为参数，str为模板
      const template = render(str, mContent);
      const mailOptions = {
        // 发送人地址必须与服务器连接配置中的auth中的user属性相同
        from: `${sender}<ibenchu-demo@yzlei.ibenchu.pw>`,
        // 收件人地址
        to: email[i],
        // 邮件主题
        subject: `${emailModule.emailTheme}`,
        // 邮件内容
        html: `${template}`,
      };
      // 服务器连接配置
      createTransport({
        // 邮箱服务器，这里是阿里云服务器
        host: "smtpdm.aliyun.com",
        port: 465,
        secureConnection: true,
        auth: {
          user: "ibenchu-demo@yzlei.ibenchu.pw",
          pass: "ibenchu123QWE",
        },
      }).sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
          return {code: 200, message: "发送失败，请稍后重试！"};
        }
        console.log("Message sent: " + info.response);
      });
      return {code: 200, message: "发送成功"};
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
