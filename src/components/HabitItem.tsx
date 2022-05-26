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
      <HabitTitle />
      <div>Status</div>
    </Wrapper>
  );
};

export default HabitItem;

const Wrapper = styled.div`
  height: 70px;
  display: flex;
  background-color: #313543;
`;
