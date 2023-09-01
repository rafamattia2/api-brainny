import { 
    Controller, 
    Get, 
    Post, 
    Body, 
    Param, 
    Delete, 
    Put, 
    ParseUUIDPipe, 
    HttpStatus, 
    HttpCode, 
    UseGuards, 
} from '@nestjs/common';
import { UsersService } from '../service/users.service';
import { User } from '../entity/user.entity';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/auth/guard/roles.decorator';
import { Role } from 'src/helpers/enums/roles.enums';
import { AllowedRolesByUserTypeGuard } from 'src/auth/guard/role.guard';


@Controller('api/users')
// @UseGuards(AuthGuard('jwt'), AllowedRolesByUserTypeGuard)
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    @UseGuards(AuthGuard('jwt'), AllowedRolesByUserTypeGuard)
    @Roles(Role.ADMIN)
    async findAll(): Promise<User[]> {
        return await this.usersService.findAll();
    }

    @Get(':id')
    @UseGuards(AuthGuard('jwt'), AllowedRolesByUserTypeGuard)
    @Roles(Role.ADMIN)
    async findOne(@Param('id') id: string): Promise<User> {
        console.log('entrei')
        return await this.usersService.findOneById( id );
    }
l
    @Post()
    async create (@Body() body: CreateUserDto): Promise<User> {
        return await this.usersService.create(body);
    }

    @Put(':id')
    @UseGuards(AuthGuard('jwt'), AllowedRolesByUserTypeGuard)
    @Roles(Role.ADMIN)
    async update(
        @Param('id', new ParseUUIDPipe()) id: string, 
        @Body() body: UpdateUserDto
        ): Promise<User> 
        {
            return this.usersService.update(id, body);
    }

    @Delete(':id')
    @UseGuards(AuthGuard('jwt'), AllowedRolesByUserTypeGuard)
    @Roles(Role.ADMIN)
    @HttpCode(HttpStatus.NO_CONTENT)
    async delete(@Param('id', new ParseUUIDPipe()) id: string): Promise<void> {
        await this.usersService.delete(id)
    }
}
