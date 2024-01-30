import { useState } from "react";

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
      <button onClick={decreaseMonth}>prev</button>
      <h1>{month} 월</h1>
      <button onClick={increaseMonth}>next</button>
    </div>
  );
}
