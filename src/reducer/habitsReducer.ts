import axios from "axios";
import { HabitsAction, Habit } from "../typings";

const updateHabitTitle = async (habitId: number, habitTitle: string) => {
  return await axios.put(`http://localhost:3000/habits/${habitId}`, {
    title: habitTitle,
  });
};

const deleteHabit = async (habitId: number) => {
  return await axios.delete(`http://localhost:3000/habits/${habitId}`);
};

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
        habitStatuses: [],
      },
    ];
  }

  if (action.type === "UPDATE_TITLE") {
    action.event.preventDefault();

    return state.map((habit) => {
      if (habit.habitId !== action.habitId) return habit;

      const res = updateHabitTitle(action.habitId, action.habitTitle);

      return { ...habit, title: action.habitTitle };
    });
  }

  if (action.type === "UPDATE_HABIT_STATUS") {
    action.event.preventDefault();

    return state.map((habit) => {
      if (habit.habitId !== action.habitId) return habit;

      const updatedHabitStatuses = habit.habitStatuses.map((habitStatus) => {
        if (habitStatus.targetedDate !== action.habitStatus.targetedDate)
          return habitStatus;

        return { ...habitStatus, is_completed: !habitStatus.isCompleted };
      });

      return { ...habit, habitStatuses: updatedHabitStatuses };
    });
  }

  if (action.type === "DELETE_HABIT") {
    const res = deleteHabit(action.habitId);
    return state.filter((habit) => habit.habitId !== action.habitId);
  }
};
