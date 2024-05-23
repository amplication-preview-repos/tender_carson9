import { GameWhereUniqueInput } from "../game/GameWhereUniqueInput";

export type OutcomeCreateInput = {
  game?: GameWhereUniqueInput | null;
  result?: "Option1" | null;
  units?: number | null;
};
