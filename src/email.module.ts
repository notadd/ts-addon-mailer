import {  Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EmailControllers } from "./controller/email.controllers";
import { EmailResolver } from "./resolver/email.resolver";
import { EmailService } from "./service/email.service";
import { EmailComponentProvider } from "./export/email.component.provider";
import { EmailModuleEntity } from "./entity/emailModule.entity";
import { EmailLogEntity } from "./entity/emailLog.entity";
import { EmailConfigureEntity } from "./entity/emailConfigure.entity";
import { CryptorUtil } from './cryptor.util';

@Module({
  imports: [
    TypeOrmModule.forFeature([EmailModuleEntity, EmailLogEntity, EmailConfigureEntity]),
  ],
  controllers: [EmailControllers],
  providers: [
    EmailResolver,
    EmailService,
    EmailComponentProvider,
    CryptorUtil,
  ],
  exports: [EmailComponentProvider],
})
export class EmailModule { }
