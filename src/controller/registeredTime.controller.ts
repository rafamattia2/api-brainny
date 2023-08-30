import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { RegisteredTime } from '../entity/registeredTime.entity';
import { RegisteredTimeService } from 'src/service/registeredTime.service';

@Controller('registered_time')
export class RegisteredTimeController {
    constructor(private readonly registeredTimeService: RegisteredTimeService) {}

    @Get()
    async findAll(): Promise<RegisteredTime[]> {
        return await this.registeredTimeService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<RegisteredTime> {
        const register = await this.registeredTimeService.findOne(id);
        if(!register) {
            throw new Error('Register not found');    
        }
        return register;
    }

    @Post()
    async create (@Body() register: RegisteredTime): Promise<RegisteredTime> {
        return await this.registeredTimeService.create(register);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() register: RegisteredTime): Promise<RegisteredTime> {
        return this.registeredTimeService.update(id, register);
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<void> {
        const register = await this.registeredTimeService.findOne(id);
        if (!register) {
            throw new Error('Register not found');
        }
        return this.registeredTimeService.delete(id);
    }
}
