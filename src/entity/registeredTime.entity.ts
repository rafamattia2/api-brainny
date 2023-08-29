import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class RegisteredTime {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, user => user.registeredTimes)
    user_id: number;

    @Column({ type: 'timestamp' })
    time_start: Date;

    @Column({ type: 'timestamp'  })
    time_end: Date;
}