import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TagsModuleBase } from "./base/tags.module.base";
import { TagsService } from "./tags.service";
import { TagsController } from "./tags.controller";
import { TagsResolver } from "./tags.resolver";

@Module({
  imports: [TagsModuleBase, forwardRef(() => AuthModule)],
  controllers: [TagsController],
  providers: [TagsService, TagsResolver],
  exports: [TagsService],
})
export class TagsModule {}
