import React, { useEffect, useState, useReducer } from "react";
import styled from "styled-components";

import HabitForm from "./components/HabitForm";
import HabitHeader from "./components/HabitHeader";
import HabitItemList from "./components/HabitItemList";
import { Habit } from "./typings";
import { habitsReducer } from "./reducer/habitsReducer";
import dayjs from "dayjs";
import { dayOfWeekReducer } from "./reducer/dayOfWeekReducer";
import axios from "axios";
import { initHabit } from "./actions/habitsAction";

const today = dayjs();

function App() {
  const [habits, dispatch] = useReducer(habitsReducer, []);
  const [habitTitle, setHabitTitle] = useState<string>("");

  const [dayOfWeek, dayOfWeekDispatch] = useReducer(dayOfWeekReducer, {
    startDay: today.startOf("week"),
    endDay: today.endOf("week"),
  });

  useEffect(() => {
    setHabitTitle("");
    const data = async () => {
      const res = await axios.get("http://localhost:3000/habits/", {
        params: {
          startDayOfWeek: dayOfWeek.startDay.format("YYYY-MM-DD"),
          endDayOfWeek: dayOfWeek.endDay.format("YYYY-MM-DD"),
        },
      });

      const initHabits: Habit[] = res.data.map((r: Habit) => {
        return {
          ...r,
        };
      });

      dispatch(initHabit(initHabits));
    };

    data();
  }, [dayOfWeek]);

  const onChangeTitleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHabitTitle(e.target.value);
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
            startDayOfWeek={dayOfWeek.startDay}
            endDayOfWeek={dayOfWeek.endDay}
            dayOfWeekDispatch={dayOfWeekDispatch}
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
