import axios from "axios";

export const createHabitStatus = async (
  habitId: number,
  isCompleted: boolean,
  targetedDate: Date
) => {
  return await axios.post(`http://localhost:3000/habits/${habitId}/statuses/`, {
    isCompleted,
    targetedDate,
  });
};
