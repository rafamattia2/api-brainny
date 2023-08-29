import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class RegisteredTime {
    @PrimaryGeneratedColumn()
    @ManyToOne(() => User, user => user.registeredTimes)
    user_id: number;

    @Column({length: 45})
    name: string;

    @Column({length: 45})
    email: string;

    @Column({length: 45})
    role: string;
}