import React from "react";
import styled from "styled-components";
import { addHabit } from "../actions/habitsAction";
import { HabitsAction } from "../types";
import { createHabit } from "../api/createHabit";

interface PropsType {
  habitTitle: string;
  dispatch: (action: HabitsAction) => void;
  onChangeTitleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  startDayOfWeek: any;
}

const HabitForm = ({
  habitTitle,
  dispatch,
  onChangeTitleInput,
  startDayOfWeek,
}: PropsType) => {
  return (
    <Form>
      <Input
        placeholder="Add New Habit"
        onChange={onChangeTitleInput}
        type="text"
        value={habitTitle}
      />
      <Button
        onClick={async (e: React.MouseEvent<HTMLButtonElement>) => {
          e.preventDefault();
          const res = await createHabit(
            habitTitle,
            startDayOfWeek.format("YYYY-MM-DD")
          );

          dispatch(
            addHabit(res.data.habitId, res.data.title, res.data.habitStatuses)
          );
        }}
        type="submit"
      >
        追加
      </Button>
    </Form>
  );
};

export default HabitForm;

const Form = styled.form`
  margin-bottom: 20px;
`;

const Input = styled.input`
  height: 30px;
  width: 400px;
  margin-right: 5px;
  padding: 1px 10px;
`;

const Button = styled.button`
  padding: 8px 20px;
  color: white;
  background-color: #0d99ff;
  border-radius: 6px;
  cursor: pointer;
  border: none;
`;
