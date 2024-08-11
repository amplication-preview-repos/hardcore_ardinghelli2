import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ArticlesService } from "./articles.service";
import { ArticlesControllerBase } from "./base/articles.controller.base";

@swagger.ApiTags("articles")
@common.Controller("articles")
export class ArticlesController extends ArticlesControllerBase {
  constructor(
    protected readonly service: ArticlesService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
