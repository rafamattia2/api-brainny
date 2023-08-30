import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class RegisteredTime {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, user => user.id)
    user_id: number;

    @Column({ type: 'date' })
    registered_day: Date;

    @Column({ type: 'time' })
    registered_time: Date;
}