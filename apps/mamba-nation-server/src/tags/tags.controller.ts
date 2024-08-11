import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TagsService } from "./tags.service";
import { TagsControllerBase } from "./base/tags.controller.base";

@swagger.ApiTags("tags")
@common.Controller("tags")
export class TagsController extends TagsControllerBase {
  constructor(
    protected readonly service: TagsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
