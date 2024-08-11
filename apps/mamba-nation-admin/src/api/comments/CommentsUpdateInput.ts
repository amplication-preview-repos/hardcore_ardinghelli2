import { ArticlesWhereUniqueInput } from "../articles/ArticlesWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommentsUpdateInput = {
  article?: ArticlesWhereUniqueInput | null;
  content?: string | null;
  publicationDate?: Date | null;
  user?: UserWhereUniqueInput | null;
};
