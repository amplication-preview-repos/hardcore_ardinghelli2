/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Authors as PrismaAuthors,
  Articles as PrismaArticles,
} from "@prisma/client";

export class AuthorsServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.AuthorsCountArgs, "select">): Promise<number> {
    return this.prisma.authors.count(args);
  }

  async authorsItems(
    args: Prisma.AuthorsFindManyArgs
  ): Promise<PrismaAuthors[]> {
    return this.prisma.authors.findMany(args);
  }
  async authors(
    args: Prisma.AuthorsFindUniqueArgs
  ): Promise<PrismaAuthors | null> {
    return this.prisma.authors.findUnique(args);
  }
  async createAuthors(args: Prisma.AuthorsCreateArgs): Promise<PrismaAuthors> {
    return this.prisma.authors.create(args);
  }
  async updateAuthors(args: Prisma.AuthorsUpdateArgs): Promise<PrismaAuthors> {
    return this.prisma.authors.update(args);
  }
  async deleteAuthors(args: Prisma.AuthorsDeleteArgs): Promise<PrismaAuthors> {
    return this.prisma.authors.delete(args);
  }

  async findArticlesItems(
    parentId: string,
    args: Prisma.ArticlesFindManyArgs
  ): Promise<PrismaArticles[]> {
    return this.prisma.authors
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .articlesItems(args);
  }
}
