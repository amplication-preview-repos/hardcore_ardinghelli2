import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CommentsModuleBase } from "./base/comments.module.base";
import { CommentsService } from "./comments.service";
import { CommentsController } from "./comments.controller";
import { CommentsResolver } from "./comments.resolver";

@Module({
  imports: [CommentsModuleBase, forwardRef(() => AuthModule)],
  controllers: [CommentsController],
  providers: [CommentsService, CommentsResolver],
  exports: [CommentsService],
})
export class CommentsModule {}
