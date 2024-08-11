import { SortOrder } from "../../util/SortOrder";

export type CommentsOrderByInput = {
  articleId?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  publicationDate?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
