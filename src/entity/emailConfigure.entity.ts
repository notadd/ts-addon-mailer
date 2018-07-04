import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("email_config")
export class EmailConfigureEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // 发信人服务器配置
  // Sender server configuration
  @Column({
    name: "fromAddress",
    nullable: true
  })
  fromAddress: string;

  // 邮箱服务器地址
  // Mailbox server address
  @Column({
    name: "hostAddress",
    nullable: true
  })
  hostAddress: string;

  // Auth账号
  @Column({
    name: "authUser",
    nullable: true
  })
  authUser: string;

  // Authm密码
  @Column({
    name: "authUser",
    nullable: true
  })
  authPass: string;

}