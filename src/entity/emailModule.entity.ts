import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
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
