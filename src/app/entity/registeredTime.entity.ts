import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, Timestamp } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class RegisteredTime {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, user => user.id)
    @Column({ name: 'user_id'})
    userId: string;

    @Column({ name:'registered_date', type: 'timestamp' })
    registeredDate: Timestamp;
}