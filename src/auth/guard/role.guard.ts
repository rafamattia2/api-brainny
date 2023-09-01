import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { UsersService } from "src/app/service/users.service";
import { Role } from "src/helpers/enums/roles.enums";

@Injectable()
export class AllowedRolesByUserTypeGuard implements CanActivate {
    constructor(private reflector: Reflector, private userService: UsersService) {}
    
    async canActivate(context: ExecutionContext): Promise<boolean> {
        const requireRoles = this.reflector.getAllAndOverride<Role[]> 
        (
           "roles",
           [context.getHandler(), context.getClass()
        ]
        );[]

        if (!requireRoles) {
            return true;
        }

        const request = context.switchToHttp().getRequest();
        console.log('email' + request.user.email)
        const user = await this.userService.findOneByEmail(request.user.email);

        return requireRoles.some(role => user.role.includes(role));
    }
}
