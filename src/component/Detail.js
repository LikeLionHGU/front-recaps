import { useEffect, useState } from "react";
import Block from "./Block";

export default function Detail({ id }) {
  const [recaps, setRecaps] = useState([]);

  function getRecap() {
    fetch("https://ll-api.jungsub.com/recap/list")
      .then((response) => response.json())
      .then((data) => setRecaps(data));
  }
  console.log(recaps);

  useEffect(() => {
    getRecap();
  }, []);

  return (
    <div>
      {recaps.map((recaps) => (
        <Block key={recaps.id} id={recaps._id} title={recaps.title} />
      ))}
    </div>
  );
}
