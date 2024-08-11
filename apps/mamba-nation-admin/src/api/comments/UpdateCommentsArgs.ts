import { CommentsWhereUniqueInput } from "./CommentsWhereUniqueInput";
import { CommentsUpdateInput } from "./CommentsUpdateInput";

export type UpdateCommentsArgs = {
  where: CommentsWhereUniqueInput;
  data: CommentsUpdateInput;
};
