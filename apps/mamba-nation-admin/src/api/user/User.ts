import { Comments } from "../comments/Comments";
import { JsonValue } from "type-fest";

export type User = {
  commentsItems?: Array<Comments>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
