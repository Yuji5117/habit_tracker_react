import { HabitsAction, Habit } from "../typings";

export const habitsReducer = (state: Habit[], action: HabitsAction): any => {
  if (action.type === "ADD_HABIT") {
    action.event.preventDefault();
    if (!action.habitTitle) return state;
    return [
      ...state,
      { id: state.length + 1, title: action.habitTitle, status: 0 },
    ];
  }

  if (action.type === "UPDATE_TITLE") {
    action.event.preventDefault();

    return state.map((habit) => {
      if (habit.id !== action.habitId) return habit;

      return { ...habit, title: action.habitTitle };
    });
  }

  if (action.type === "DELETE_HABIT") {
    return state.filter((habit) => habit.id !== action.habitId);
  }
};
