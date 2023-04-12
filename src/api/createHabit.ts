import axios from "axios";

export const createHabit = async (title: string) => {
  return await axios.post("http://localhost:3000/habits/", {
    title: title,
  });
};
