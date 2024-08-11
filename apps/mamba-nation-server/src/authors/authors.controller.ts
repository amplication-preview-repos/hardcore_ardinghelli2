import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AuthorsService } from "./authors.service";
import { AuthorsControllerBase } from "./base/authors.controller.base";

@swagger.ApiTags("authors")
@common.Controller("authors")
export class AuthorsController extends AuthorsControllerBase {
  constructor(
    protected readonly service: AuthorsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
