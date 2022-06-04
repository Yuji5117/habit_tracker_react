import React from "react";
import { Action } from "./../typings.d";

export const addHabit = (
  event: React.MouseEvent<HTMLButtonElement>,
  habitTitle: string
): Action => {
  return { type: "ADD_HABIT", habitTitle, event };
};

export const deleteHabit = (habitId: number): Action => {
  return { type: "DELETE_HABIT", habitId };
};
