import React, { useState } from "react";
import styled from "styled-components";
import { HabitsAction, Habit } from "../types";

import { MdDeleteOutline } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import { removeHabit, updateTitle } from "../actions/habitsAction";
import { updateHabit } from "../api/updateHabit";
import { deleteHabit } from "../api/deleteHabit";
import HabitStatus from "./HabitStatus";

interface PropsType {
  habit: Habit;
  dispatch: (action: HabitsAction) => void;
}

const HabitItem = ({ habit, dispatch }: PropsType) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [title, setTitle] = useState(habit.title);

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  return (
    <Wrapper>
      <TitleBlock>
        {!isEditMode && (
          <>
            <Title>{habit.title}</Title>
            <IconBlock onClick={() => setIsEditMode(true)}>
              <AiOutlineEdit size={20} color={"white"} />
            </IconBlock>
          </>
        )}
        {isEditMode && (
          <form>
            <input
              value={title}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                onChangeTitle(e)
              }
            />
            <div>
              <button
                onClick={async (e: React.MouseEvent<HTMLButtonElement>) => {
                  e.preventDefault();
                  const res = await updateHabit(habit.habitId, title);
                  dispatch(updateTitle(res.data.habitId, res.data.title));
                  setIsEditMode(false);
                }}
              >
                Save
              </button>
              <button
                onClick={() => {
                  setIsEditMode(false);
                  setTitle(habit.title);
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </TitleBlock>
      <StatusBlock>
        <StatusWeekDay>
          {habit.habitStatuses.map((habitStatus, index) => (
            <StatusDay key={index}>
              <HabitStatus
                habitId={habitStatus.habitId}
                isCompleted={habitStatus.isCompleted}
                targetedDate={habitStatus.targetedDate}
                habitStatusId={habitStatus.habitStatusId}
                dispatch={dispatch}
              />
            </StatusDay>
          ))}
        </StatusWeekDay>
      </StatusBlock>
      <DeleteBlock
        onClick={async () => {
          const res = await deleteHabit(habit.habitId);
          dispatch(removeHabit(res.data.habitId));
        }}
      >
        <MdDeleteOutline size={20} color={"red"} />
      </DeleteBlock>
    </Wrapper>
  );
};

export default HabitItem;

const Wrapper = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  background-color: #555375;
`;

const TitleBlock = styled.div`
  width: 40%;
  display: flex;
  align-items: center;

  :hover {
    > div {
      display: block;
    }
  }
`;

const Title = styled.p`
  font-size: 24px;
  color: white;
  padding-left: 20px;
`;

const IconBlock = styled.div`
  padding-left: 10px;
  display: none;
  cursor: pointer;
`;

const StatusBlock = styled.div`
  width: 55%;
  text-align: center;
`;

const StatusWeekDay = styled.ul`
  display: flex;
  flex-direction: row;
`;

const StatusDay = styled.li`
  width: 70px;
`;

const DeleteBlock = styled.div`
  width: 5%;
`;
