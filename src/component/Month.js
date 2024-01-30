import { useState } from "react";
import { Link } from "react-router-dom";

export default function Month() {
  const [month, setMonth] = useState(1);

  const decreaseMonth = () => {
    if (month > 1) {
      setMonth((prevMonth) => prevMonth - 1);
    } else {
      setMonth(12);
    }
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
      <Link to={"/list/" + month}>
        <button onClick={decreaseMonth}>prev</button>
      </Link>
      <h1>{month} 월</h1>
      <button onClick={increaseMonth}>next</button>
    </div>
  );
}
