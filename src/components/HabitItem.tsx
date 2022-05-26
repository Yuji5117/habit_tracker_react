import React from "react";
import styled from "styled-components";
import { Habit } from "../typings";
import HabitTitle from "./HabitTitle";

interface PropsType {
  habit: Habit;
}

const HabitItem = ({ habit }: PropsType) => {
  return (
    <Wrapper>
      <TitleBlock>
        <Title>{habit.title}</Title>
      </TitleBlock>
      <StatusBlock>Status</StatusBlock>
    </Wrapper>
  );
};

export default HabitItem;

const Wrapper = styled.div`
  height: 70px;
  display: flex;
  background-color: #555375;
`;

const TitleBlock = styled.div`
  width: 40%;
`;

const Title = styled.div`
  font-size: 24px;
  color: white;
`;

const StatusBlock = styled.div`
  width: 60%;
`;
