import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CategoriesModuleBase } from "./base/categories.module.base";
import { CategoriesService } from "./categories.service";
import { CategoriesController } from "./categories.controller";
import { CategoriesResolver } from "./categories.resolver";

@Module({
  imports: [CategoriesModuleBase, forwardRef(() => AuthModule)],
  controllers: [CategoriesController],
  providers: [CategoriesService, CategoriesResolver],
  exports: [CategoriesService],
})
export class CategoriesModule {}
