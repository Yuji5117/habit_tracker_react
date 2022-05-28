import React, { useState } from "react";
import styled from "styled-components";

interface PropsType {
  today: any;
}

const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const HabitHeader = ({ today }: PropsType) => {
  const [startDayOfWeek, setStartDayOfWeek] = useState(today.startOf("week"));
  const [endDayOfWeek, setEndDayOfWeek] = useState(today.endOf("week"));

  const movePreviousWeek = () => {
    setStartDayOfWeek(startDayOfWeek.subtract(1, "w").startOf("week"));
    setEndDayOfWeek(endDayOfWeek.subtract(1, "w").endOf("week"));
  };

  const moveNextWeek = () => {
    setStartDayOfWeek(startDayOfWeek.add(1, "w").startOf("week"));
    setEndDayOfWeek(endDayOfWeek.add(1, "w").endOf("week"));
  };

  return (
    <Wrapepr>
      <TitleBlock>
        <Title>
          <button type="button" onClick={movePreviousWeek}>
            前
          </button>
          Date：
          {`${startDayOfWeek.format("YYYY/MM/DD")} ~ ${endDayOfWeek.format(
            "YYYY/MM/DD"
          )}`}
          <button type="button" onClick={moveNextWeek}>
            次
          </button>
        </Title>
      </TitleBlock>
      <StatusBlock>
        <StatusWeekDay>
          {weekDays.map((weekDay, index) => (
            <StatusDay key={index}>
              <p>{weekDay}</p>
              <p>{startDayOfWeek.add(index, "d").format("D")}</p>
            </StatusDay>
          ))}
        </StatusWeekDay>
      </StatusBlock>
    </Wrapepr>
  );
};

export default HabitHeader;

const Wrapepr = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
`;

const TitleBlock = styled.div`
  width: 40%;
`;

const Title = styled.div`
  font-size: 18px;
  color: white;
  padding-left: 20px;
`;

const StatusBlock = styled.div`
  width: 60%;
`;

const StatusWeekDay = styled.ul`
  display: flex;
  flex-direction: row;
`;

const StatusDay = styled.li`
  width: 70px;
  color: white;
  text-align: center;
`;
