import React from "react";
import styled from "styled-components";
import { HabitsAction, Habit } from "../typings";

import { MdDeleteOutline } from "react-icons/md";
import { deleteHabit } from "../actions/habitsAction";

interface PropsType {
  habit: Habit;
  dispatch: (action: HabitsAction) => void;
}

const HabitItem = ({ habit, dispatch }: PropsType) => {
  return (
    <Wrapper>
      <TitleBlock>
        <Title>{habit.title}</Title>
      </TitleBlock>
      <StatusBlock>
        <StatusWeekDay>
          <StatusDay>
            <input type="checkbox" />
          </StatusDay>
          <StatusDay>
            <input type="checkbox" />
          </StatusDay>
          <StatusDay>
            <input type="checkbox" />
          </StatusDay>
          <StatusDay>
            <input type="checkbox" />
          </StatusDay>
          <StatusDay>
            <input type="checkbox" />
          </StatusDay>
          <StatusDay>
            <input type="checkbox" />
          </StatusDay>
          <StatusDay>
            <input type="checkbox" />
          </StatusDay>
        </StatusWeekDay>
      </StatusBlock>
      <DeleteBlock onClick={() => dispatch(deleteHabit(habit.id))}>
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
`;

const Title = styled.div`
  font-size: 24px;
  color: white;
  padding-left: 20px;
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
