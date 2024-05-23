import { OutcomeCreateNestedManyWithoutGamesInput } from "./OutcomeCreateNestedManyWithoutGamesInput";

export type GameCreateInput = {
  date?: Date | null;
  name?: string | null;
  outcomes?: OutcomeCreateNestedManyWithoutGamesInput;
};
