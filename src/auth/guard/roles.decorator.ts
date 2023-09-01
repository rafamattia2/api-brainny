import { SetMetadata } from "@nestjs/common";
import { Role } from "src/helpers/enums/roles.enums";

export const Roles = (...roles: Role[]) => SetMetadata("roles", roles);