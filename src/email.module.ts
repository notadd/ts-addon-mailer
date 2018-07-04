import {  Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EmailControllers } from "../src/controller/email.controllers";
import { EmailResolver } from "../src/resolver/email.resolver";
import { EmailService } from "../src/service/email.service";
import { EmailComponentProvider } from "../src/export/email.component.provider";
import { EmailModuleEntity } from "../src/entity/emailModule.entity";
import { EmailLogEntity } from "../src/entity/emailLog.entity";
import { EmailConfigureEntity } from "../src/entity/emailConfigure.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([EmailModuleEntity, EmailLogEntity, EmailConfigureEntity]),
  ],
  controllers: [EmailControllers],
  providers: [
    EmailResolver,
    EmailService,
    EmailComponentProvider,
  ],
  exports: [EmailComponentProvider],
})
export class EmailModule { }
