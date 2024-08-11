import { Authors } from "../authors/Authors";
import { Comments } from "../comments/Comments";

export type Articles = {
  author?: Authors | null;
  commentsItems?: Array<Comments>;
  content: string | null;
  createdAt: Date;
  id: string;
  publicationDate: Date | null;
  title: string | null;
  updatedAt: Date;
};
