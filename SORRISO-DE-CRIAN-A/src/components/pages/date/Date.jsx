import { Calendar, DateArea } from "./DateStyled";

const Date = () => {
  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);
  return (
    <DateArea>
      <h1>PROGRAMAÇÃO DO MÊS</h1>
      <Calendar>
        {daysInMonth.map((day) => (
          <p key={day}>{day}</p>
        ))}
      </Calendar>
    </DateArea>
  );
};

export default Date;
