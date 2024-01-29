import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [data] = useState(null);

  const getData = async () => {
    try {
      const response = await fetch(`=${id}`);
      const data = await response.json();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, [id]);

  return (
    <div>
      <h1>{data.title}</h1>
      <h3>{data.date}</h3>
      <p>{data.body}</p>
    </div>
  );
}
