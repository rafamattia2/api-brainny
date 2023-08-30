import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegisteredTime } from '../entity/registeredTime.entity';

@Injectable()
export class RegisteredTimeService {
    constructor(
        @InjectRepository(RegisteredTime)
        private registeredTimeRepository: Repository<RegisteredTime>,
    ) {}

    //get all registers
    async findAll(): Promise<RegisteredTime[]> {
        return await this.registeredTimeRepository.find();
    }

    //get one register
    async findOne(id: number): Promise<RegisteredTime> {
        return await this.registeredTimeRepository.findOne( { where: { id } } );
    }

    //create register
    async create(registeredTime: RegisteredTime): Promise<RegisteredTime> {
        const newRegister = this.registeredTimeRepository.create(registeredTime);
        return await this.registeredTimeRepository.save(newRegister);
    }

    //update register
    async update(id: number, registeredTime: RegisteredTime): Promise<RegisteredTime> {
        await this.registeredTimeRepository.update(id, registeredTime);
        return await this.registeredTimeRepository.findOne( { where: { id } } );
    }

    //delete register
    async delete(id: number): Promise<void> {
        await this.registeredTimeRepository.delete(id);
    }
}
