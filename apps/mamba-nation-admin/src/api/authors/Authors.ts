import { Articles } from "../articles/Articles";
import { JsonValue } from "type-fest";

export type Authors = {
  articlesItems?: Array<Articles>;
  bio: string | null;
  createdAt: Date;
  id: string;
  name: string | null;
  profilePicture: JsonValue;
  updatedAt: Date;
};
