# NotAdd Mailbox delivery plug - in
## Function
### 1.Send mailbox function
### 2.Custom mailbox template function
### 3.Mailbox log
## Installation
```bash
yarn add @notadd/addon-mailer
```
## Use
```bash

@Module({
  imports: [EmailModule],
})
```

```bash
import { EmailModule } from "@notadd/addon-mailer";
constructor(@Inject(EmailComponentProvider) private readonly emailComponentProvider: EmailComponentProvider,
){}

//    Call the mail plug-in to send mail
/**
   * Send mail
   * @param mContent replaceModuleParameter
   * @param {number} mid ModuleId
   * @param {[string]} email 
   * @param {string} sender Sender name
   * @param {number} emailConfigId emailConfig Id
   * @returns {Promise<{code; message}>}
   */
   const result = await this.emailComponentProvider.sendEmail(mContent: {name: user.name, pwd: newPassword}, mid: 1, email: [email], sender: "xxx", emailConfigId： 1);
   f (result.code !== 200) {
        return { errno: 400, errmsg: "邮件发送失败，请稍后重试", data: "" };
   }
```