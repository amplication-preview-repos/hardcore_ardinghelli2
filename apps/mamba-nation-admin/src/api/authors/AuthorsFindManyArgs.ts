import { AuthorsWhereInput } from "./AuthorsWhereInput";
import { AuthorsOrderByInput } from "./AuthorsOrderByInput";

export type AuthorsFindManyArgs = {
  where?: AuthorsWhereInput;
  orderBy?: Array<AuthorsOrderByInput>;
  skip?: number;
  take?: number;
};
