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
import { Tags } from "./Tags";
import { TagsCountArgs } from "./TagsCountArgs";
import { TagsFindManyArgs } from "./TagsFindManyArgs";
import { TagsFindUniqueArgs } from "./TagsFindUniqueArgs";
import { CreateTagsArgs } from "./CreateTagsArgs";
import { UpdateTagsArgs } from "./UpdateTagsArgs";
import { DeleteTagsArgs } from "./DeleteTagsArgs";
import { TagsService } from "../tags.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Tags)
export class TagsResolverBase {
  constructor(
    protected readonly service: TagsService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Tags",
    action: "read",
    possession: "any",
  })
  async _tagsItemsMeta(
    @graphql.Args() args: TagsCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Tags])
  @nestAccessControl.UseRoles({
    resource: "Tags",
    action: "read",
    possession: "any",
  })
  async tagsItems(@graphql.Args() args: TagsFindManyArgs): Promise<Tags[]> {
    return this.service.tagsItems(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Tags, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Tags",
    action: "read",
    possession: "own",
  })
  async tags(@graphql.Args() args: TagsFindUniqueArgs): Promise<Tags | null> {
    const result = await this.service.tags(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Tags)
  @nestAccessControl.UseRoles({
    resource: "Tags",
    action: "create",
    possession: "any",
  })
  async createTags(@graphql.Args() args: CreateTagsArgs): Promise<Tags> {
    return await this.service.createTags({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Tags)
  @nestAccessControl.UseRoles({
    resource: "Tags",
    action: "update",
    possession: "any",
  })
  async updateTags(@graphql.Args() args: UpdateTagsArgs): Promise<Tags | null> {
    try {
      return await this.service.updateTags({
        ...args,
        data: args.data,
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

  @graphql.Mutation(() => Tags)
  @nestAccessControl.UseRoles({
    resource: "Tags",
    action: "delete",
    possession: "any",
  })
  async deleteTags(@graphql.Args() args: DeleteTagsArgs): Promise<Tags | null> {
    try {
      return await this.service.deleteTags(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
