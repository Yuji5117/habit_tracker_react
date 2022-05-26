import React, { useState } from "react";
import styled from "styled-components";
import HabitHeader from "./components/HabitHeader";
import HabitItemList from "./components/HabitItemList";
import { Habit } from "./typings";

function App() {
  const [habits, setHabits] = useState<Habit[]>([
    { id: 1, title: "test", status: 1 },
    { id: 2, title: "test2", status: 1 },
    { id: 3, title: "test3", status: 1 },
  ]);
  return (
    <Wrapper>
      <Header>Habit Tracker</Header>
      <Main>
        <HabitHeader />
        <HabitItemList habits={habits} />
      </Main>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  width: 60%;
  margin-left: auto;
  margin-right: auto;
`;

const Header = styled.header`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 30px;
`;

const Main = styled.main`
  background-color: #282c37;
`;
