import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { ArticlesTitle } from "../articles/ArticlesTitle";
import { UserTitle } from "../user/UserTitle";

export const CommentsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="article.id"
          reference="Articles"
          label="Article"
        >
          <SelectInput optionText={ArticlesTitle} />
        </ReferenceInput>
        <TextInput label="content" multiline source="content" />
        <DateTimeInput label="publicationDate" source="publicationDate" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
