import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ArticlesModuleBase } from "./base/articles.module.base";
import { ArticlesService } from "./articles.service";
import { ArticlesController } from "./articles.controller";
import { ArticlesResolver } from "./articles.resolver";

@Module({
  imports: [ArticlesModuleBase, forwardRef(() => AuthModule)],
  controllers: [ArticlesController],
  providers: [ArticlesService, ArticlesResolver],
  exports: [ArticlesService],
})
export class ArticlesModule {}
