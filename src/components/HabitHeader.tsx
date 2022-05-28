import React from "react";
import styled from "styled-components";
import dayjs from "dayjs";

const HabitHeader = () => {
  const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const today = dayjs();
  const startDayOfWeek = today.startOf("week");
  const endDayOfWeek = today.endOf("week");

  return (
    <Wrapepr>
      <TitleBlock>
        <Title>
          Date：
          {`${startDayOfWeek.format("YYYY/MM/DD")} ~ ${endDayOfWeek.format(
            "YYYY/MM/DD"
          )}`}
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
