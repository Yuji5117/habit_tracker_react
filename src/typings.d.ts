export interface Habit {
  habitId: number;
  title: string;
  habitStatuses: HabitStatus[];
  createdAt?: Date;
  updatedAt?: Date;
}

interface HabitStatus {
  habitStatusId: number;
  habitId: number;
  isCompleted: boolean;
  targetedDate: string;
}

export type HabitsAction =
  | {
      type: "INIT_HABIT";
      habits: Habit[];
    }
  | {
      type: "ADD_HABIT";
      habitId: number;
      habitTitle: string;
      habitStatuses: HabitStatus[];
    }
  | {
      type: "UPDATE_TITLE";
      habitId: number;
      habitTitle: string;
    }
  | {
      type: "UPDATE_HABIT_STATUS";
      habitId: number;
      habitStatus: HabitStatus;
      event: React.ChangeEvent<HTMLInputElement>;
    }
  | {
      type: "REMOVE_HABIT";
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
