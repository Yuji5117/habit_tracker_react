import React from "react";
import styled from "styled-components";
import { Action } from "../typings";

interface PropsType {
  habitTitle: string;
  dispatch: (action: Action) => void;
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
        onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
          dispatch({ type: "ADD_HABIT", habitTitle, event: e })
        }
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
