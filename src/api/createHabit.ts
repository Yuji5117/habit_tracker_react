import axios from "axios";

export const createHabit = async (title: string, startDayOfWeek: Date) => {
  return await axios.post("http://localhost:3000/habits/", {
    title,
    startDayOfWeek,
  });
};
