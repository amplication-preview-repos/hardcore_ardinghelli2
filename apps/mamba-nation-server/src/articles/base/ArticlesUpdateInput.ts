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
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
  IsDate,
} from "class-validator";
import { Type } from "class-transformer";
import { CommentsUpdateManyWithoutArticlesItemsInput } from "./CommentsUpdateManyWithoutArticlesItemsInput";

@InputType()
class ArticlesUpdateInput {
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
  author?: AuthorsWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => CommentsUpdateManyWithoutArticlesItemsInput,
  })
  @ValidateNested()
  @Type(() => CommentsUpdateManyWithoutArticlesItemsInput)
  @IsOptional()
  @Field(() => CommentsUpdateManyWithoutArticlesItemsInput, {
    nullable: true,
  })
  commentsItems?: CommentsUpdateManyWithoutArticlesItemsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  content?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  publicationDate?: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title?: string | null;
}

export { ArticlesUpdateInput as ArticlesUpdateInput };
