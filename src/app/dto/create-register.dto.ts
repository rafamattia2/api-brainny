import { IsNotEmpty } from "class-validator";
import { Timestamp } from "typeorm";

export class CreateRegisterDto {
    @IsNotEmpty()
    userId: string;

    @IsNotEmpty()
    registeredDate: Timestamp;
}