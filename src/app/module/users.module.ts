import { Module } from '@nestjs/common';
import { UsersController } from '../controller/users.controller';
import { UsersService } from '../service/users.service';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { User } from '../entity/user.entity';
import { RegisteredTime } from 'src/app/entity/registeredTime.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, RegisteredTime])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}
