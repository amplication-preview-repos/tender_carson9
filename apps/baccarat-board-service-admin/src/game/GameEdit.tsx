import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { OutcomeTitle } from "../outcome/OutcomeTitle";

export const GameEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
