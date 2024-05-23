import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { OutcomeListRelationFilter } from "../outcome/OutcomeListRelationFilter";

export type GameWhereInput = {
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  outcomes?: OutcomeListRelationFilter;
};
