import React, { useEffect, useState, useReducer } from "react";
import styled from "styled-components";
import dayjs from "dayjs";

import HabitForm from "./components/HabitForm";
import HabitHeader from "./components/HabitHeader";
import HabitItemList from "./components/HabitItemList";
import { Habit } from "./typings";
import { habitsReducer } from "./reducer/habitsReducer";

const today = dayjs();

const initialState: Habit[] = [
  { id: 1, title: "test", status: 1 },
  { id: 2, title: "test2", status: 1 },
  { id: 3, title: "test3", status: 1 },
  { id: 4, title: "test4", status: 1 },
  { id: 5, title: "test5", status: 1 },
];

function App() {
  const [habits, dispatch] = useReducer(habitsReducer, initialState);
  const [habitTitle, setHabitTitle] = useState<string>("");

  const [startDayOfWeek, setStartDayOfWeek] = useState(today.startOf("week"));
  const [endDayOfWeek, setEndDayOfWeek] = useState(today.endOf("week"));

  useEffect(() => {
    setHabitTitle("");
  }, [habits]);

  const onChangeTitleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHabitTitle(e.target.value);
  };

  const movePreviousWeek = () => {
    setStartDayOfWeek(startDayOfWeek.subtract(1, "w").startOf("week"));
    setEndDayOfWeek(endDayOfWeek.subtract(1, "w").endOf("week"));
  };

  const moveNextWeek = () => {
    setStartDayOfWeek(startDayOfWeek.add(1, "w").startOf("week"));
    setEndDayOfWeek(endDayOfWeek.add(1, "w").endOf("week"));
  };

  return (
    <Wrapper>
      <Header>Habit Tracker</Header>
      <Main>
        <HabitForm
          habitTitle={habitTitle}
          dispatch={dispatch}
          onChangeTitleInput={onChangeTitleInput}
        />

        <Section>
          <HabitHeader
            startDayOfWeek={startDayOfWeek}
            endDayOfWeek={endDayOfWeek}
            movePreviousWeek={movePreviousWeek}
            moveNextWeek={moveNextWeek}
          />
          <HabitItemList habits={habits} dispatch={dispatch} />
        </Section>
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

const Main = styled.main``;

const Section = styled.section`
  background-color: #282c37;
`;
