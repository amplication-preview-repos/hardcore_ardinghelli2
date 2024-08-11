import { ArticlesUpdateManyWithoutAuthorsItemsInput } from "./ArticlesUpdateManyWithoutAuthorsItemsInput";
import { InputJsonValue } from "../../types";

export type AuthorsUpdateInput = {
  articlesItems?: ArticlesUpdateManyWithoutAuthorsItemsInput;
  bio?: string | null;
  name?: string | null;
  profilePicture?: InputJsonValue;
};
