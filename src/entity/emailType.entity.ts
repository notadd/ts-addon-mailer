import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("email_type")
export class EmailTypeEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  moduleTypeName: string;
}
