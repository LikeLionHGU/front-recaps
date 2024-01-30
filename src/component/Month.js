/*import { useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Month() {
  const params = useParams();
  console.log(params.month);
  const [month, setMonth] = useState(params.month);

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

  let num = month - 1;
  if (num < 1) {
    num = 12;
  }
  let num1 = month + 1;

  if (num > 12) {

  if (num1 > 12) {

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
*/

import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

export default function Month() {
  const params = useParams();
  const navigate = useNavigate();
  const [month, setMonth] = useState(params.month);

  useEffect(() => {
    navigate(`/list/${month}`);
  }, [month, navigate]);

  const decreaseMonth = () => {
    let newMonth;
    if (month > 1) {
      newMonth = month - 1;
    } else {
      newMonth = 12;
    }
    setMonth(newMonth);
  };

  const increaseMonth = () => {
    let newMonth;
    if (month < 12) {
      newMonth = month + 1;
    } else {
      newMonth = 1;
    }
    setMonth(newMonth);
  };

  return (
    <div className="month">
      <Link to={"/list/" + (month - 1)}>
        <button onClick={decreaseMonth}>prev</button>
      </Link>
      <h1>{month} 월</h1>
      <Link to={"/list/" + (month + 1)}>
        <button onClick={increaseMonth}>next</button>
      </Link>
    </div>
  );
}
