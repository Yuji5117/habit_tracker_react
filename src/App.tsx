import React, { useState } from "react";
import styled from "styled-components";
import HabitHeader from "./components/HabitHeader";
import HabitItemList from "./components/HabitItemList";
import { Habit } from "./typings";

function App() {
  const [habit, setHabit] = useState<Habit>();
  const [habits, setHabits] = useState<Habit[]>([
    { id: 1, title: "test", status: 1 },
    { id: 2, title: "test2", status: 1 },
    { id: 3, title: "test3", status: 1 },
    { id: 4, title: "test4", status: 1 },
    { id: 5, title: "test5", status: 1 },
  ]);

  const onChangeTitleInput = (e: any) => {
    console.log(e.target.value);

    const id = habits.length;
    setHabit({ id: id, title: e.target.value, status: 0 });
  };

  const addHabit = (e: any) => {
    e.preventDefault();

    if (!habit) return;
    setHabits([...habits, habit]);
  };

  return (
    <Wrapper>
      <Header>Habit Tracker</Header>
      <Main>
        <form>
          <input onChange={onChangeTitleInput} type="text" />
          <button onClick={addHabit} type="submit">
            追加
          </button>
        </form>

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
