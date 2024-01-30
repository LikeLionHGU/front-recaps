import { useState } from "react";
import { Link } from "react-router-dom";
import Detail from "./Detail";

export default function Month() {
  const [month, setMonth] = useState(1);

  const decreaseMonth = (month) => {
    if (month > 1) {
      setMonth((prevMonth) => prevMonth - 1);
    } else {
      setMonth(12);
    }
    return { month };
  };

  const increaseMonth = () => {
    if (month < 12) {
      setMonth((prevMonth) => prevMonth + 1);
    } else {
      setMonth(1);
    }
  };

  let num = month - 1;
  if (num < 1) {
    num = 12;
  }
  let num1 = month + 1;
  if (num > 12) {
    num = 1;
  }

  return (
    <div className="month">
      <Link to={"/list/" + num}>
        <button onClick={decreaseMonth}>
          prev
          <Detail month={month}></Detail>
        </button>
      </Link>
      <h1>{month} 월</h1>
      <Link to={"/list/" + num1}>
        <button onClick={increaseMonth}>next</button>
      </Link>
    </div>
  );
}
