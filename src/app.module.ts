import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EmailControllers } from "./controller/email.controllers";
import { EmailResolver } from "./resolver/email.resolver";
import { EmailService } from "./service/email.service";
import { EmailComponentProvider } from "./export/email.component.provider";
import { EmailModuleEntity } from "./entity/emailModule.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([EmailModuleEntity]),
  ],
  controllers: [EmailControllers],
  providers: [
    EmailResolver,
    EmailService,
    EmailComponentProvider,
  ],
  exports: [EmailComponentProvider],
})
export class AppModule { }
