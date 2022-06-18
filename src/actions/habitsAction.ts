import React from "react";
import { HabitsAction } from "./../typings.d";

export const addHabit = (
  event: React.MouseEvent<HTMLButtonElement>,
  habitTitle: string
): HabitsAction => {
  return { type: "ADD_HABIT", habitTitle, event };
};

export const updateTitle = (
  event: React.MouseEvent<HTMLButtonElement>,
  habitId: number,
  habitTitle: string
): HabitsAction => {
  return { type: "UPDATE_TITLE", habitId, habitTitle, event };
};

export const deleteHabit = (habitId: number): HabitsAction => {
  return { type: "DELETE_HABIT", habitId };
};
