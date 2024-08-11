import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CommentsService } from "./comments.service";
import { CommentsControllerBase } from "./base/comments.controller.base";

@swagger.ApiTags("comments")
@common.Controller("comments")
export class CommentsController extends CommentsControllerBase {
  constructor(
    protected readonly service: CommentsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
