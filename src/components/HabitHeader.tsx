import React from "react";
import styled from "styled-components";

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

interface PropsType {
  startDayOfWeek: any;
  endDayOfWeek: any;
  movePreviousWeek: () => void;
  moveNextWeek: () => void;
}

const HabitHeader = ({
  startDayOfWeek,
  endDayOfWeek,
  movePreviousWeek,
  moveNextWeek,
}: PropsType) => {
  const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  return (
    <Wrapepr>
      <TitleBlock>
        <IoIosArrowBack onClick={movePreviousWeek} />
        <Title>
          Date：
          {`${startDayOfWeek.format("YYYY/MM/DD")} ~ ${endDayOfWeek.format(
            "YYYY/MM/DD"
          )}`}
        </Title>
        <IoIosArrowForward onClick={moveNextWeek} />
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
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const Title = styled.div`
  font-size: 18px;
  padding-right: 5px;
  padding-left: 5px;
  color: white;
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
