# NotAdd 邮箱发送插件
## 功能
### 1.发送邮件功能
### 2.自定义邮箱模板功能
### 3.自定义邮箱配置
### 4.发送邮件日志
## 安装
```bash
yarn add @notadd/addon-mailer
```
## 使用
```bash

@Module({
  imports: [EmailModule],
})
```

```bash
import { EmailModule } from "@notadd/addon-mailer";
constructor(@Inject(EmailComponentProvider) private readonly emailComponentProvider: EmailComponentProvider,
){}

//    调用邮件插件发送邮件
/**
   * 发送邮件
   * @param mContent 替换模板对象
   * @param {number} mid 模板id
   * @param {[string]} email 邮箱账号
   * @param {string} sender 发送人名称
   * @param {number} emailConfigId 邮箱配置Id
   * @returns {Promise<{code; message}>}
   */
   const result = await this.emailComponentProvider.sendEmail(mContent: {name: user.name, pwd: newPassword}, mid: 1, email: [email], sender: "xxx", emailConfigId： 1);
   f (result.code !== 200) {
        return { errno: 400, errmsg: "邮件发送失败，请稍后重试", data: "" };
   }
```

