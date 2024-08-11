import { TagsWhereInput } from "./TagsWhereInput";
import { TagsOrderByInput } from "./TagsOrderByInput";

export type TagsFindManyArgs = {
  where?: TagsWhereInput;
  orderBy?: Array<TagsOrderByInput>;
  skip?: number;
  take?: number;
};
