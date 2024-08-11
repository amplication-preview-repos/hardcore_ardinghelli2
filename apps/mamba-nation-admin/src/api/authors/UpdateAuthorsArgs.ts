import { AuthorsWhereUniqueInput } from "./AuthorsWhereUniqueInput";
import { AuthorsUpdateInput } from "./AuthorsUpdateInput";

export type UpdateAuthorsArgs = {
  where: AuthorsWhereUniqueInput;
  data: AuthorsUpdateInput;
};
