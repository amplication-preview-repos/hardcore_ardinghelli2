import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CommentsServiceBase } from "./base/comments.service.base";

@Injectable()
export class CommentsService extends CommentsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
