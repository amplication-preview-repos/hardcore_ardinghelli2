import { Authors as TAuthors } from "../api/authors/Authors";

export const AUTHORS_TITLE_FIELD = "name";

export const AuthorsTitle = (record: TAuthors): string => {
  return record.name?.toString() || String(record.id);
};
