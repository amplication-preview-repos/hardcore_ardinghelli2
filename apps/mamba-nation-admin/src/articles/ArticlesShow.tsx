import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ARTICLES_TITLE_FIELD } from "./ArticlesTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { AUTHORS_TITLE_FIELD } from "../authors/AuthorsTitle";

export const ArticlesShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Author" source="authors.id" reference="Authors">
          <TextField source={AUTHORS_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="content" source="content" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="publicationDate" source="publicationDate" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Comments"
          target="articleId"
          label="CommentsItems"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Article"
              source="articles.id"
              reference="Articles"
            >
              <TextField source={ARTICLES_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="content" source="content" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="publicationDate" source="publicationDate" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
