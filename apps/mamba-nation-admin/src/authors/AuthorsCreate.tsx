import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { ArticlesTitle } from "../articles/ArticlesTitle";

export const AuthorsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
