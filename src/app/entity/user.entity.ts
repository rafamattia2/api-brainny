import { Entity, Column, PrimaryGeneratedColumn, OneToMany, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, BeforeInsert } from 'typeorm';
import { RegisteredTime } from './registeredTime.entity';
import { hashSync } from 'bcrypt';
@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    @OneToMany(() => RegisteredTime, registeredTime => registeredTime.userId)
    id: string;

    @Column({ name:'first_name', length: 45 })
    firstName: string;
    
    @Column({ name:'last_name', length: 45 })
    lastName: string;

    @Column({ length: 45 })
    email: string;

    @Column()
    password: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: string;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: string;

    @DeleteDateColumn({ name: 'deleted_at' })
    deletedAt: string;

    @Column({length: 45})
    role: string;

    @BeforeInsert()
    hashPassword() {
        this.password = hashSync(this.password, 10);
    }
}