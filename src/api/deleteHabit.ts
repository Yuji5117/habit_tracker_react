import axios from "axios";

export const deleteHabit = async (habitId: number) => {
  return await axios.delete(`http://localhost:3000/habits/${habitId}`);
};
