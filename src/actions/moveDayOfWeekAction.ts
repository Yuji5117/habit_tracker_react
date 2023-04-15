import { DayOfWeekAction } from "../types/index";

export const movePreviousWeek = (): DayOfWeekAction => {
  return { type: "MOVE_PREVIOUS_WEEK" };
};

export const moveNextWeek = (): DayOfWeekAction => {
  return { type: "MOVE_NEXT_WEEK" };
};
