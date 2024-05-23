import { OutcomeUpdateManyWithoutGamesInput } from "./OutcomeUpdateManyWithoutGamesInput";

export type GameUpdateInput = {
  date?: Date | null;
  name?: string | null;
  outcomes?: OutcomeUpdateManyWithoutGamesInput;
};
