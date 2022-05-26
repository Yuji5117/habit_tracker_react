import React from "react";
import styled from "styled-components";
import HabitHeader from "./components/HabitHeader";
import HabitItemList from "./components/HabitItemList";

function App() {
  return (
    <Wrapper>
      <Header>Habit Tracker</Header>
      <Main>
        {/* header for list */}
        <HabitHeader />
        {/* habit title */}
        {/* habit status */}
        {/* habit item list */}
        <HabitItemList />
        {/* habit title */}
        {/* habit status */}
      </Main>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
`;

const Header = styled.header`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 30px;
`;

const Main = styled.main``;
