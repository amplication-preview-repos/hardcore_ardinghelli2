/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AuthorsWhereUniqueInput } from "../../authors/base/AuthorsWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { CommentsListRelationFilter } from "../../comments/base/CommentsListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

@InputType()
class ArticlesWhereInput {
  @ApiProperty({
    required: false,
    type: () => AuthorsWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AuthorsWhereUniqueInput)
  @IsOptional()
  @Field(() => AuthorsWhereUniqueInput, {
    nullable: true,
  })
  author?: AuthorsWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => CommentsListRelationFilter,
  })
  @ValidateNested()
  @Type(() => CommentsListRelationFilter)
  @IsOptional()
  @Field(() => CommentsListRelationFilter, {
    nullable: true,
  })
  commentsItems?: CommentsListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  content?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  publicationDate?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  title?: StringNullableFilter;
}

export { ArticlesWhereInput as ArticlesWhereInput };
