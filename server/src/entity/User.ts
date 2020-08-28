import { Field, Int, ObjectType } from "type-graphql";
import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import { BaseEntity } from 'typeorm';
@ObjectType()
@Entity('users')
export class User extends BaseEntity{
	  @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;

		@Field()
    @Column("text")
    tableemail: string;

    @Column("text")
    password: string;

    @Column("int", {default: 0})
    tokenVersion: number;

}
