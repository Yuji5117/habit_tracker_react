import { Action, Habit } from "../typings";

export const habitsReducer = (state: Habit[], action: Action): any => {
  if (action.type === "ADD_HABIT") {
    action.event.preventDefault();
    if (!action.habitTitle) return state;
    return [
      ...state,
      { id: state.length + 1, title: action.habitTitle, status: 0 },
    ];
  }
  if (action.type === "DELETE_HABIT") {
    return state.filter((habit) => habit.id !== action.habitId);
  }
};
