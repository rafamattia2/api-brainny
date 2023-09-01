import { IsEmail, IsEnum, IsNotEmpty, Matches } from "class-validator";
import { MessagesHelper } from "src/helpers/messages.helper";
import { RegExHelper } from "src/helpers/regex.helper";
import { Role } from "../../helpers/enums/roles.enums";

export class CreateUserDto {
    @IsNotEmpty()
    firstName: string;

    @IsNotEmpty()
    lastName: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @Matches(RegExHelper.password, { message: MessagesHelper.PASSWORD_VALID })
    password: string;

    @IsNotEmpty()
    @IsEnum(Role)
    role: Role;
}