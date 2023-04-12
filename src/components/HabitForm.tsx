import React from "react";
import styled from "styled-components";
import { addHabit } from "../actions/habitsAction";
import { HabitsAction } from "../typings";
import { createHabit } from "../api/createHabit";

interface PropsType {
  habitTitle: string;
  dispatch: (action: HabitsAction) => void;
  onChangeTitleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const HabitForm = ({ habitTitle, dispatch, onChangeTitleInput }: PropsType) => {
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
          const res = await createHabit(habitTitle);
          dispatch(addHabit(res.data.habitId, habitTitle));
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
