import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entity/user.entity';
import { UpdateUserDto } from '../dto/update-user.dto';
import { CreateUserDto } from '../dto/create-user.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) {}

    //get all users
    async findAll(): Promise<User[]> {
        console.log('entrei na service uhules')
        return await this.usersRepository.find({ 
            select: ['id', 'firstName', 'lastName', 'email']
        });
    }

    //get one user by email
    async findOneByEmail(email: string): Promise<User>{
        try {
            console.log(email);
            return await this.usersRepository.findOneByOrFail({email});
        } catch (error) {
            throw new NotFoundException(error.message)
        }
    }

    //get one user by id
    async findOneById(id: string): Promise<User>{
        try {
            
            return await this.usersRepository.findOneByOrFail({id});
        } catch (error) {
            throw new NotFoundException(error.message)
        }
    }

    //create user
    async create(data: CreateUserDto): Promise<User> {
        const newUser = this.usersRepository.create(data);
        return await this.usersRepository.save(newUser);
    }

    //update user
    async update(id: string, data: UpdateUserDto): Promise<User>{
        const user = await this.findOneById( id );
        this.usersRepository.merge(user, data);
        return await this.usersRepository.save(user);
    }

    //delete user
    async delete(id: string): Promise<void> {
        await this.findOneById( id );
        this.usersRepository.softDelete({ id })
    }
}
