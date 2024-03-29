import { HabitsAction, Habit } from "../types";

export const habitsReducer = (state: Habit[], action: HabitsAction): any => {
  if (action.type === "INIT_HABIT") {
    return [...action.habits];
  }

  if (action.type === "ADD_HABIT") {
    if (!action.habitTitle) return state;

    return [
      ...state,
      {
        habitId: action.habitId,
        title: action.habitTitle,
        habitStatuses: action.habitStatuses,
      },
    ];
  }

  if (action.type === "UPDATE_TITLE") {
    return state.map((habit) => {
      if (habit.habitId !== action.habitId) return habit;

      return { ...habit, title: action.habitTitle };
    });
  }

  if (action.type === "CHANGE_HABIT_STATUS") {
    return state.map((habit) => {
      if (habit.habitId !== action.habitStatus.habitId) return habit;

      const updatedHabitStatuses = habit.habitStatuses.map((habitStatus) => {
        if (habitStatus.targetedDate !== action.habitStatus.targetedDate)
          return habitStatus;

        return { ...habitStatus, isCompleted: action.habitStatus.isCompleted };
      });

      return { ...habit, habitStatuses: updatedHabitStatuses };
    });
  }

  if (action.type === "REMOVE_HABIT") {
    return state.filter((habit) => habit.habitId !== action.habitId);
  }
};
