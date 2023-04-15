import axios from "axios";

export const updateHabitStatus = async (
  habitId: number,
  habitStatusId: number,
  isCompleted: boolean
) => {
  return await axios.put(
    `http://localhost:3000/habits/${habitId}/statuses/${habitStatusId}`,
    {
      isCompleted,
    }
  );
};
