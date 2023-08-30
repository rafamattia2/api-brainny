import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, Repository } from 'typeorm';
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
        return await this.usersRepository.find({ 
            select: ['id', 'firstName', 'lastName', 'email']
        });
    }

    //get one user
    async findOneByOrFail(where: FindOptionsWhere<User> | FindOptionsWhere<User>[]): Promise<User>{
        try {
            return await this.usersRepository.findOneByOrFail(where);
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
        const user = await this.findOneByOrFail({ id });
        this.usersRepository.merge(user, data);
        return await this.usersRepository.save(user);
    }

    //delete user
    async delete(id: string): Promise<void> {
        await this.usersRepository.findOneByOrFail({ id });
        this.usersRepository.softDelete({ id })
    }
}
