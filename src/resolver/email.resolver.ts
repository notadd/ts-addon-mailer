import { Mutation, Query, Resolver } from "@nestjs/graphql";
import { EmailService } from "../service/email.service";
import { Inject } from "@nestjs/common";
import { EmailModuleEntity } from "../entity/emailModule.entity";

@Resolver()
export class EmailResolver {
  constructor(
    @Inject("EmailService")
    private readonly emailService: EmailService,
  ) {}

  /**
   * 发送邮箱
   * @param obj
   * @param {{mContent: any; mid: number; email: [string]; sender: string}} data
   * @returns {Promise<{code; message}>}
   */
  @Query("sendEmail")
  async sendEmail(obj, data: {mContent: any, mid: number, email: [string], sender: string}) {
    const {mContent, mid, email, sender} = data;
    return this.emailService.sendEmail(mContent, mid, email, sender);
  }

  /**
   * 添加短信模板
   * @param obj
   * @param {{emailModule: EmailModuleEntity}} data
   * @returns {Promise<{code; message}>}
   */
  @Mutation("createEmailModule")
  async createEmailModule(obj, data: {emailModule: EmailModuleEntity}): Promise<{code, message }> {
    return this.emailService.createEmailModule(data.emailModule);
  }
}