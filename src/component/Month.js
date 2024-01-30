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

  return (
    <div className="month">
      {/* <Link to={"/list/" + { decreaseMonth }}> */}
      <button onClick={decreaseMonth}>
        <Link to={"/list/" + (month - 1)}>prev</Link>
        <Detail month={month}></Detail>
      </button>
      {/* </Link> */}
      <h1>{month} 월</h1>
      <button onClick={increaseMonth}>
        <Link to={"/list/" + (month + 1)}>next</Link>
      </button>
    </div>
  );
}
