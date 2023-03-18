import styled from "styled-components";
import HabitItem from "./HabitItem";

import { HabitsAction, Habit } from "../typings";

interface PropsType {
  habits: Habit[];
  dispatch: (action: HabitsAction) => void;
}

const HabitItemList = ({ habits, dispatch }: PropsType) => {
  return (
    <Wrapper>
      <ItemList>
        {habits.map((habit) => (
          <Item key={habit.habitId}>
            <HabitItem habit={habit} dispatch={dispatch} />
          </Item>
        ))}
      </ItemList>
    </Wrapper>
  );
};

export default HabitItemList;

const Wrapper = styled.div`
  display: flex;
  padding-left: 3px;
  padding-right: 3px;
  padding-bottom: 3px;
`;

const ItemList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;

  > * + * {
    padding-top: 5px;
  }
`;

const Item = styled.li``;
