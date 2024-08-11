import { Articles } from "../articles/Articles";
import { User } from "../user/User";

export type Comments = {
  article?: Articles | null;
  content: string | null;
  createdAt: Date;
  id: string;
  publicationDate: Date | null;
  updatedAt: Date;
  user?: User | null;
};
