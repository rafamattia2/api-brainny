import { Controller, Get, Post, Body, Param, Delete, Put, ParseUUIDPipe, HttpStatus, HttpCode } from '@nestjs/common';
import { UsersService } from '../service/users.service';
import { User } from '../entity/user.entity';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

@Controller('api/users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    async findAll(): Promise<User[]> {
        return await this.usersService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id', new ParseUUIDPipe()) id: string): Promise<User> {
        return await this.usersService.findOneByOrFail({ id });
    }

    @Post()
    async create (@Body() body: CreateUserDto): Promise<User> {
        return await this.usersService.create(body);
    }

    @Put(':id')
    async update(
        @Param('id', new ParseUUIDPipe()) id: string, 
        @Body() body: UpdateUserDto): Promise<User> 
        {
        return this.usersService.update(id, body);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async delete(@Param('id', new ParseUUIDPipe()) id: string): Promise<void> {
        await this.usersService.delete(id)
    }
}
