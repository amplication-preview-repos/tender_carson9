import { GameWhereUniqueInput } from "../game/GameWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type OutcomeWhereInput = {
  game?: GameWhereUniqueInput;
  id?: StringFilter;
  result?: "Option1";
  units?: IntNullableFilter;
};
