export interface Habit {
  habitId: number;
  title: string;
  habitStatuses: HabitStatus[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface HabitStatus {
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
      type: "CHANGE_HABIT_STATUS";
      habitStatus: HabitStatus;
    }
  | {
      type: "REMOVE_HABIT";
      habitId: number;
    };
