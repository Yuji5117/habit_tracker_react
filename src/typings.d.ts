export interface Habit {
  id: number;
  title: string;
  status: number;
}

export type HabitsAction =
  | {
      type: "ADD_HABIT";
      habitTitle: string;
      event: React.MouseEvent<HTMLButtonElement>;
    }
  | {
      type: "UPDATE_HABIT";
      // habitId: number;
    }
  | {
      type: "DELETE_HABIT";
      habitId: number;
    };

export interface DayOfWeek {
  startDay: dayjs.Dayjs;
  endDay: dayjs.Dayjs;
}

export type DayOfWeekAction =
  | {
      type: "MOVE_PREVIOUS_WEEK";
    }
  | {
      type: "MOVE_NEXT_WEEK";
    };
