import { ArticlesListRelationFilter } from "../articles/ArticlesListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type AuthorsWhereInput = {
  articlesItems?: ArticlesListRelationFilter;
  bio?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  profilePicture?: JsonFilter;
};
