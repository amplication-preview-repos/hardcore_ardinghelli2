import { Tags as TTags } from "../api/tags/Tags";

export const TAGS_TITLE_FIELD = "name";

export const TagsTitle = (record: TTags): string => {
  return record.name?.toString() || String(record.id);
};
