import { ArticlesWhereUniqueInput } from "../articles/ArticlesWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommentsWhereInput = {
  article?: ArticlesWhereUniqueInput;
  content?: StringNullableFilter;
  id?: StringFilter;
  publicationDate?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
