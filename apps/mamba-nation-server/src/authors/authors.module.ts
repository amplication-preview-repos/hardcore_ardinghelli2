import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AuthorsModuleBase } from "./base/authors.module.base";
import { AuthorsService } from "./authors.service";
import { AuthorsController } from "./authors.controller";
import { AuthorsResolver } from "./authors.resolver";

@Module({
  imports: [AuthorsModuleBase, forwardRef(() => AuthModule)],
  controllers: [AuthorsController],
  providers: [AuthorsService, AuthorsResolver],
  exports: [AuthorsService],
})
export class AuthorsModule {}
