// import { Habit, HabitsAction, HabitStatus } from "../types";

import { Habit, HabitStatus, HabitsAction } from "../types";

export const initHabit = (habits: Habit[]): HabitsAction => {
  return { type: "INIT_HABIT", habits };
};

export const addHabit = (
  habitId: number,
  habitTitle: string,
  habitStatuses: HabitStatus[]
): HabitsAction => {
  return { type: "ADD_HABIT", habitId, habitTitle, habitStatuses };
};

export const updateTitle = (
  habitId: number,
  habitTitle: string
): HabitsAction => {
  return { type: "UPDATE_TITLE", habitId, habitTitle };
};

export const changeHabitStatus = (habitStatus: HabitStatus): HabitsAction => {
  return { type: "CHANGE_HABIT_STATUS", habitStatus };
};

export const removeHabit = (habitId: number): HabitsAction => {
  return { type: "REMOVE_HABIT", habitId };
};
