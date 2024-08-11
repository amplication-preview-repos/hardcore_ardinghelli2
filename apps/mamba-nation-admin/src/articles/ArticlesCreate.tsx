import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { AuthorsTitle } from "../authors/AuthorsTitle";
import { CommentsTitle } from "../comments/CommentsTitle";

export const ArticlesCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="author.id" reference="Authors" label="Author">
          <SelectInput optionText={AuthorsTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="commentsItems"
          reference="Comments"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CommentsTitle} />
        </ReferenceArrayInput>
        <TextInput label="content" multiline source="content" />
        <DateTimeInput label="publicationDate" source="publicationDate" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
