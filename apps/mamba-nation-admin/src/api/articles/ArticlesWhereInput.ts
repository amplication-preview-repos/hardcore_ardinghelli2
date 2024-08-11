import { AuthorsWhereUniqueInput } from "../authors/AuthorsWhereUniqueInput";
import { CommentsListRelationFilter } from "../comments/CommentsListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ArticlesWhereInput = {
  author?: AuthorsWhereUniqueInput;
  commentsItems?: CommentsListRelationFilter;
  content?: StringNullableFilter;
  id?: StringFilter;
  publicationDate?: DateTimeNullableFilter;
  title?: StringNullableFilter;
};
