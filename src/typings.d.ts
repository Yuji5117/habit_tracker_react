export interface Habit {
  id: number;
  title: string;
  status: number;
}

export type Action =
  | {
      type: "ADD_HABIT";
      habitTitle: string;
      event: React.MouseEvent<HTMLButtonElement>;
    }
  | {
      type: "DELETE_HABIT";
      habitId: number;
    };
