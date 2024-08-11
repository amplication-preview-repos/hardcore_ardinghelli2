import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { AUTHORS_TITLE_FIELD } from "./AuthorsTitle";

export const AuthorsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="bio" source="bio" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="profilePicture" source="profilePicture" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Articles"
          target="authorId"
          label="ArticlesItems"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Author"
              source="authors.id"
              reference="Authors"
            >
              <TextField source={AUTHORS_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="content" source="content" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="publicationDate" source="publicationDate" />
            <TextField label="title" source="title" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
