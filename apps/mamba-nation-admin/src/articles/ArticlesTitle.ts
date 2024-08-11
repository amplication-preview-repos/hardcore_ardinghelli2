import { Articles as TArticles } from "../api/articles/Articles";

export const ARTICLES_TITLE_FIELD = "title";

export const ArticlesTitle = (record: TArticles): string => {
  return record.title?.toString() || String(record.id);
};
