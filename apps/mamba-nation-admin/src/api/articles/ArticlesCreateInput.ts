import { AuthorsWhereUniqueInput } from "../authors/AuthorsWhereUniqueInput";
import { CommentsCreateNestedManyWithoutArticlesItemsInput } from "./CommentsCreateNestedManyWithoutArticlesItemsInput";

export type ArticlesCreateInput = {
  author?: AuthorsWhereUniqueInput | null;
  commentsItems?: CommentsCreateNestedManyWithoutArticlesItemsInput;
  content?: string | null;
  publicationDate?: Date | null;
  title?: string | null;
};
