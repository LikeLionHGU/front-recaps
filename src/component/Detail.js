import PropTypes from "prop-types";

export default function Detail({ month }) {
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
