import { Outcome as TOutcome } from "../api/outcome/Outcome";

export const OUTCOME_TITLE_FIELD = "id";

export const OutcomeTitle = (record: TOutcome): string => {
  return record.id?.toString() || String(record.id);
};
