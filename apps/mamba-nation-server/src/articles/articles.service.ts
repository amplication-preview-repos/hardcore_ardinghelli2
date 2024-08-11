import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ArticlesServiceBase } from "./base/articles.service.base";

@Injectable()
export class ArticlesService extends ArticlesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
