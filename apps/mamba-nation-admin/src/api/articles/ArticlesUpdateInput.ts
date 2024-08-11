import { AuthorsWhereUniqueInput } from "../authors/AuthorsWhereUniqueInput";
import { CommentsUpdateManyWithoutArticlesItemsInput } from "./CommentsUpdateManyWithoutArticlesItemsInput";

export type ArticlesUpdateInput = {
  author?: AuthorsWhereUniqueInput | null;
  commentsItems?: CommentsUpdateManyWithoutArticlesItemsInput;
  content?: string | null;
  publicationDate?: Date | null;
  title?: string | null;
};
