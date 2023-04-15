import { Dayjs } from "dayjs";

export interface DayOfWeek {
  startDay: Dayjs;
  endDay: Dayjs;
}

export type DayOfWeekAction =
  | {
      type: "MOVE_PREVIOUS_WEEK";
    }
  | {
      type: "MOVE_NEXT_WEEK";
    };
