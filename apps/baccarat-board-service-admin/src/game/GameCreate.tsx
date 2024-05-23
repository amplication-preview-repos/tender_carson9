import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { OutcomeTitle } from "../outcome/OutcomeTitle";

export const GameCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="Date" source="date" />
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput
          source="outcomes"
          reference="Outcome"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OutcomeTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
