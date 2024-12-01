// entities/User.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import 'reflect-metadata';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  @Column({nullable:false})
  id!: number;

  @Column()
  name!: string;

  @Column()
  email!: string;
}
