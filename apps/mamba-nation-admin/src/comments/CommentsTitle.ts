import { Comments as TComments } from "../api/comments/Comments";

export const COMMENTS_TITLE_FIELD = "id";

export const CommentsTitle = (record: TComments): string => {
  return record.id?.toString() || String(record.id);
};
