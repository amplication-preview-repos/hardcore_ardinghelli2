import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TagsWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
};
