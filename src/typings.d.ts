export interface Habit {
  id: number;
  title: string;
  habitStatuses: HabitStatus[];
}

interface HabitStatus {
  is_completed: boolean;
  targeted_date: string;
}

export type HabitsAction =
  | {
      type: "ADD_HABIT";
      habitTitle: string;
      event: React.MouseEvent<HTMLButtonElement>;
    }
  | {
      type: "UPDATE_TITLE";
      habitId: number;
      habitTitle: string;
      event: React.MouseEvent<HTMLButtonElement>;
    }
  | {
      type: "UPDATE_HABIT_STATUS";
      habitId: number;
      habitStatus: HabitStatus;
      event: React.ChangeEvent<HTMLInputElement>;
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
