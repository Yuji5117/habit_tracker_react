import { DayOfWeek, DayOfWeekAction } from "../types/index";

export const dayOfWeekReducer = (state: DayOfWeek, action: DayOfWeekAction) => {
  switch (action.type) {
    case "MOVE_PREVIOUS_WEEK":
      return {
        startDay: state.startDay.subtract(1, "w").startOf("week"),
        endDay: state.endDay.subtract(1, "w").endOf("week"),
      };

    case "MOVE_NEXT_WEEK":
      return {
        startDay: state.startDay.add(1, "w").startOf("week"),
        endDay: state.endDay.add(1, "w").endOf("week"),
      };
  }
};
