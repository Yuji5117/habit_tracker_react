import React, { useEffect, useState, useReducer } from "react";
import styled from "styled-components";

import HabitForm from "./features/habits/components/HabitForm";
import HabitHeader from "./features/habits/components/HabitHeader";
import HabitItemList from "./features/habits/components/HabitItemList";
import { habitsReducer } from "./features/habits/reducer/habitsReducer";
import dayjs, { Dayjs } from "dayjs";
import { dayOfWeekReducer } from "./reducer/dayOfWeekReducer";
import axios from "axios";
import { initHabit } from "./features/habits/actions/habitsAction";

const today: Dayjs = dayjs();

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

      dispatch(initHabit(res.data));
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
          startDayOfWeek={dayOfWeek.startDay}
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
