import { useState } from "react";
import Content from "./Content";

export default function WeekList({ id, week, title, owner_name, date }) {
  const [num, setNum] = useState(1);

  const increaseNum = () => {
    setNum((prevNum) => prevNum + 1);
  };

  return (
    <div className="rect2">
      <h1>{week} 주차</h1>
      {increaseNum}
      <Content
        num={num}
        // id={id}
        title={title}
        owner_name={owner_name}
        date={date}
      ></Content>
      <Content
        num={num}
        // id={id}
        title={title}
        owner_name={owner_name}
      ></Content>
    </div>
  );
}
