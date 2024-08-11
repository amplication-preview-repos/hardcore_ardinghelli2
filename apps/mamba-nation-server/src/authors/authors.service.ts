import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AuthorsServiceBase } from "./base/authors.service.base";

@Injectable()
export class AuthorsService extends AuthorsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
