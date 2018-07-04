import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity("email_log")
export class EmailLogEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // 收信人地址
  @Column({
    name: "email",
    nullable: true
  })
  email: string;

  // 状态码
  @Column({
    name: "code"
  })
  code: string;

  // 状态消息
  @Column({
    name: "message",
    nullable: true
  })
  message: string;

  // 创建日期
  @CreateDateColumn()
  createDate: Date;
}