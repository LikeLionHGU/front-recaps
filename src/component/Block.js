import { useEffect, useState } from "react";
import PropTypes from "prop-types";
// import WeekList from "./Weeklist";
import { useParams } from "react-router-dom";
import Item from "./pages/Item";
import React from "react";

export default function Block({}) {
  const [recaps, setRecaps] = useState([]);

  function getRecap() {
    fetch("https://ll-api.jungsub.com/diary/list")
      .then((response) => response.json())
      .then((data) => setRecaps(data));
  }

  useEffect(() => {
    getRecap();
  }, []);

  // const { title } = useParams();

  return (
    <div className="list">
      <Item></Item>
      {/* <WeekList week={week} title={title} owner_name={owner_name} date={date} /> */}
    </div>
  );
}

Block.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  owner_name: PropTypes.string.isRequired,
};
