import { GameWhereUniqueInput } from "../game/GameWhereUniqueInput";

export type OutcomeUpdateInput = {
  game?: GameWhereUniqueInput | null;
  result?: "Option1" | null;
  units?: number | null;
};
