import { ArticlesWhereInput } from "./ArticlesWhereInput";
import { ArticlesOrderByInput } from "./ArticlesOrderByInput";

export type ArticlesFindManyArgs = {
  where?: ArticlesWhereInput;
  orderBy?: Array<ArticlesOrderByInput>;
  skip?: number;
  take?: number;
};
