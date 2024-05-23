import { Game } from "../game/Game";

export type Outcome = {
  createdAt: Date;
  game?: Game | null;
  id: string;
  result?: "Option1" | null;
  units: number | null;
  updatedAt: Date;
};
