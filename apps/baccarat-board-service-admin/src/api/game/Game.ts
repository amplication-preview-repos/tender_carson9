import { Outcome } from "../outcome/Outcome";

export type Game = {
  createdAt: Date;
  date: Date | null;
  id: string;
  name: string | null;
  outcomes?: Array<Outcome>;
  updatedAt: Date;
};
