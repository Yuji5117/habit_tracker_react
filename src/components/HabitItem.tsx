import React from "react";
import styled from "styled-components";
import { Habit } from "../typings";

interface PropsType {
  habit: Habit;
}

const HabitItem = ({ habit }: PropsType) => {
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
  width: 60%;
  text-align: center;
`;

const StatusWeekDay = styled.ul`
  display: flex;
  flex-direction: row;
`;

const StatusDay = styled.li`
  width: 70px;
`;
