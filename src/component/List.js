// 예지
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import React from "react";
import "../css/list.css";

//read, delete
function List({ _id, title, owner_name }) {
  const num = 1;

  _id = 1;
  title = "제목";
  owner_name = "글쓴이";
  return (
    <div className="list">
      <div className="num">
        {/* <span className="rect1">
          <h1>1</h1>
        </span>
        <span className="rect1">
          <h1>2</h1>
        </span>
        <span className="rect1">
          <h1>3</h1>
        </span>
        <span className="rect1">
          <h1>4</h1>
        </span> */}
      </div>
      <div className="week">
        <div className="rect2">
          <h1>1주차</h1>
          <Link to={`/list/${_id}`}>
            <div className="rect3">
              <div className="content">
                <span className="number">
                  <h1>#{num}</h1>
                </span>
                <span className="title">
                  <h2>제목 : </h2>
                  <h3>{title}</h3>
                </span>
                <span className="writer">
                  <h3>글쓴이 : </h3>
                  <h4>{owner_name}</h4>
                </span>
              </div>
            </div>
          </Link>

          <Link to={`/list/${_id}`}>
            <div className="rect3">
              <div className="content">
                <span className="number">
                  <h1>#{num + 1}</h1>
                </span>
                <span className="title">
                  <h2>제목 : </h2>
                  <h3>{title}</h3>
                </span>
                <span className="writer">
                  <h3>글쓴이 : </h3>
                  <h4>{owner_name}</h4>
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

List.propTypes = {
  _id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  owner_name: PropTypes.string.isRequired,
};

export default List;
