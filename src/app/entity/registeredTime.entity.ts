import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class RegisteredTime {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, user => user.id)
    @Column({ name: 'user_id'})
    userId: string;

    @Column({ name:'registered_day', type: 'date' })
    registeredDay: Date;

    @Column({ name:'registered_time', type: 'time' })
    registered_time: Date;
}