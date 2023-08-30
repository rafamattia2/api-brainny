import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { RegisteredTime } from './registeredTime.entity';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    @OneToMany(() => RegisteredTime, registeredTime => registeredTime.user_id)
    id: number;

    @Column({length: 45})
    name: string;

    @Column({length: 45})
    email: string;

    @Column({length: 45})
    role: string;
}