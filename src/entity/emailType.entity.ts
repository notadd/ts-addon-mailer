import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class EmailTypeEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  moduleTypeName: string;
}
