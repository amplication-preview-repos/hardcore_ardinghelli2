import { CommentsWhereInput } from "./CommentsWhereInput";
import { CommentsOrderByInput } from "./CommentsOrderByInput";

export type CommentsFindManyArgs = {
  where?: CommentsWhereInput;
  orderBy?: Array<CommentsOrderByInput>;
  skip?: number;
  take?: number;
};
