import { ArticlesCreateNestedManyWithoutAuthorsItemsInput } from "./ArticlesCreateNestedManyWithoutAuthorsItemsInput";
import { InputJsonValue } from "../../types";

export type AuthorsCreateInput = {
  articlesItems?: ArticlesCreateNestedManyWithoutAuthorsItemsInput;
  bio?: string | null;
  name?: string | null;
  profilePicture?: InputJsonValue;
};
