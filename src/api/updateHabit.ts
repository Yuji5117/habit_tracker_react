import axios from "axios";

export const updateHabit = async (habitId: number, habitTitle: string) => {
  return await axios.put(`http://localhost:3000/habits/${habitId}`, {
    title: habitTitle,
  });
};
