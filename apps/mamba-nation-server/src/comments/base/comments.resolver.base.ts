/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Comments } from "./Comments";
import { CommentsCountArgs } from "./CommentsCountArgs";
import { CommentsFindManyArgs } from "./CommentsFindManyArgs";
import { CommentsFindUniqueArgs } from "./CommentsFindUniqueArgs";
import { CreateCommentsArgs } from "./CreateCommentsArgs";
import { UpdateCommentsArgs } from "./UpdateCommentsArgs";
import { DeleteCommentsArgs } from "./DeleteCommentsArgs";
import { Articles } from "../../articles/base/Articles";
import { User } from "../../user/base/User";
import { CommentsService } from "../comments.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Comments)
export class CommentsResolverBase {
  constructor(
    protected readonly service: CommentsService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Comments",
    action: "read",
    possession: "any",
  })
  async _commentsItemsMeta(
    @graphql.Args() args: CommentsCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Comments])
  @nestAccessControl.UseRoles({
    resource: "Comments",
    action: "read",
    possession: "any",
  })
  async commentsItems(
    @graphql.Args() args: CommentsFindManyArgs
  ): Promise<Comments[]> {
    return this.service.commentsItems(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Comments, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Comments",
    action: "read",
    possession: "own",
  })
  async comments(
    @graphql.Args() args: CommentsFindUniqueArgs
  ): Promise<Comments | null> {
    const result = await this.service.comments(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Comments)
  @nestAccessControl.UseRoles({
    resource: "Comments",
    action: "create",
    possession: "any",
  })
  async createComments(
    @graphql.Args() args: CreateCommentsArgs
  ): Promise<Comments> {
    return await this.service.createComments({
      ...args,
      data: {
        ...args.data,

        article: args.data.article
          ? {
              connect: args.data.article,
            }
          : undefined,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Comments)
  @nestAccessControl.UseRoles({
    resource: "Comments",
    action: "update",
    possession: "any",
  })
  async updateComments(
    @graphql.Args() args: UpdateCommentsArgs
  ): Promise<Comments | null> {
    try {
      return await this.service.updateComments({
        ...args,
        data: {
          ...args.data,

          article: args.data.article
            ? {
                connect: args.data.article,
              }
            : undefined,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Comments)
  @nestAccessControl.UseRoles({
    resource: "Comments",
    action: "delete",
    possession: "any",
  })
  async deleteComments(
    @graphql.Args() args: DeleteCommentsArgs
  ): Promise<Comments | null> {
    try {
      return await this.service.deleteComments(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Articles, {
    nullable: true,
    name: "article",
  })
  @nestAccessControl.UseRoles({
    resource: "Articles",
    action: "read",
    possession: "any",
  })
  async getArticle(
    @graphql.Parent() parent: Comments
  ): Promise<Articles | null> {
    const result = await this.service.getArticle(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async getUser(@graphql.Parent() parent: Comments): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
