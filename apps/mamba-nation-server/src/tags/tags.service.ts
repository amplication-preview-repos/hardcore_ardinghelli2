import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TagsServiceBase } from "./base/tags.service.base";

@Injectable()
export class TagsService extends TagsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
