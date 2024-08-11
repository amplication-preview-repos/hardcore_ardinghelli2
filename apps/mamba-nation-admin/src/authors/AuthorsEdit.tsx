import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { ArticlesTitle } from "../articles/ArticlesTitle";

export const AuthorsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="articlesItems"
          reference="Articles"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ArticlesTitle} />
        </ReferenceArrayInput>
        <TextInput label="bio" multiline source="bio" />
        <TextInput label="name" source="name" />
        <div />
      </SimpleForm>
    </Edit>
  );
};
