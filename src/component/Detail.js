import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Block from "./Block";

export default function Detail({ month }) {
  // useEffect(() => {

  // recaps.map((date) => {
  //   if (date === month) {
  //     console.log(date);
  //   } else {
  //   }
  // });

  // }, [recaps]);

  return <div></div>;
}

Detail.propTypes = {
  date: PropTypes.string.isRequired,
  month: PropTypes.number.isRequired,
};

//
// return (
//   <div>
//     {recaps.map((recaps) => (
//       <Block key={recaps.id} id={recaps._id} title={recaps.title} />
//     ))}
//   </div>
// );
