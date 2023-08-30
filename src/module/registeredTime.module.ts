import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { User } from '../entity/user.entity';
import { RegisteredTime } from 'src/entity/registeredTime.entity';
import { RegisteredTimeController } from 'src/controller/registeredTime.controller';
import { RegisteredTimeService } from 'src/service/registeredTime.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, RegisteredTime])],
  controllers: [RegisteredTimeController],
  providers: [RegisteredTimeService]
})
export class RegisteredTimeModule {}
