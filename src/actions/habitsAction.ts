import React from "react";
import { Habit, HabitsAction, HabitStatus } from "./../typings.d";

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

export const updateHabitStatus = (
  event: React.ChangeEvent<HTMLInputElement>,
  habitId: number,
  habitStatus: HabitStatus
): HabitsAction => {
  return { type: "UPDATE_HABIT_STATUS", habitId, habitStatus, event };
};

export const removeHabit = (habitId: number): HabitsAction => {
  return { type: "REMOVE_HABIT", habitId };
};
