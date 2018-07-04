import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity("email_module")
export class EmailModuleEntity {
 @PrimaryGeneratedColumn()
  id: number;
  @Column()
  emailType: number;
  @Column()
  module: string;
  @Column()
  emailTheme: string;
}
