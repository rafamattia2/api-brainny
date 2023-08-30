import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { User } from '../entity/user.entity';
import { RegisteredTime } from 'src/app/entity/registeredTime.entity';
import { RegisteredTimeController } from 'src/app/controller/registeredTime.controller';
import { RegisteredTimeService } from 'src/app/service/registeredTime.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, RegisteredTime])],
  controllers: [RegisteredTimeController],
  providers: [RegisteredTimeService]
})
export class RegisteredTimeModule {}
