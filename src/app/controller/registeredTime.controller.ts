import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { RegisteredTime } from '../entity/registeredTime.entity';
import { RegisteredTimeService } from 'src/app/service/registeredTime.service';
import { AuthGuard } from '@nestjs/passport';
import { AllowedRolesByUserTypeGuard } from 'src/auth/guard/role.guard';
import { Roles } from 'src/auth/guard/roles.decorator';
import { Role } from 'src/helpers/enums/roles.enums';
import { CreateRegisterDto } from '../dto/create-register.dto';

@Controller('api/registered_time')
export class RegisteredTimeController {
    constructor(private readonly registeredTimeService: RegisteredTimeService) {}

    @Get()
    @UseGuards(AuthGuard('jwt'), AllowedRolesByUserTypeGuard)
    @Roles(Role.ADMIN)
    async findAll(): Promise<RegisteredTime[]> {
        return await this.registeredTimeService.findAll();
    }

    @Get(':id')
    @UseGuards(AuthGuard('jwt'), AllowedRolesByUserTypeGuard)
    @Roles(Role.ADMIN)
    async findOne(@Param('id') id: number): Promise<RegisteredTime> {
        const register = await this.registeredTimeService.findOne(id);
        if(!register) {
            throw new Error('Register not found');    
        }
        return register;
    }

    @Post()
    @UseGuards(AuthGuard('jwt'), AllowedRolesByUserTypeGuard)
    @Roles(Role.CUSTOMER)
    async create (@Body() register: CreateRegisterDto): Promise<RegisteredTime> {
        return await this.registeredTimeService.create(register);
    }

    @Put(':id')
    @UseGuards(AuthGuard('jwt'), AllowedRolesByUserTypeGuard)
    @Roles(Role.ADMIN)
    async update(@Param('id') id: number, @Body() register: RegisteredTime): Promise<RegisteredTime> {
        return this.registeredTimeService.update(id, register);
    }

    @Delete(':id')
    @UseGuards(AuthGuard('jwt'), AllowedRolesByUserTypeGuard)
    @Roles(Role.ADMIN)
    async delete(@Param('id') id: number): Promise<void> {
        const register = await this.registeredTimeService.findOne(id);
        if (!register) {
            throw new Error('Register not found');
        }
        return this.registeredTimeService.delete(id);
    }
}
