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
import { AuthorsWhereInput } from "./AuthorsWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class AuthorsListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => AuthorsWhereInput,
  })
  @ValidateNested()
  @Type(() => AuthorsWhereInput)
  @IsOptional()
  @Field(() => AuthorsWhereInput, {
    nullable: true,
  })
  every?: AuthorsWhereInput;

  @ApiProperty({
    required: false,
    type: () => AuthorsWhereInput,
  })
  @ValidateNested()
  @Type(() => AuthorsWhereInput)
  @IsOptional()
  @Field(() => AuthorsWhereInput, {
    nullable: true,
  })
  some?: AuthorsWhereInput;

  @ApiProperty({
    required: false,
    type: () => AuthorsWhereInput,
  })
  @ValidateNested()
  @Type(() => AuthorsWhereInput)
  @IsOptional()
  @Field(() => AuthorsWhereInput, {
    nullable: true,
  })
  none?: AuthorsWhereInput;
}
export { AuthorsListRelationFilter as AuthorsListRelationFilter };
