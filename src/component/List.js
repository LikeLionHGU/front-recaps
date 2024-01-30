// 예지
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import "../css/list.css";

//read, delete
function Navbar({ week }) {
  return (
    <div className="nav">
      <button>1주차</button>
      <button>2주차</button>
      <button>3주차</button>
      <button>4주차</button>
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <Link to={`/`}>
        <div className="home">
          <h3>Home</h3>
        </div>
      </Link>

      <Navbar></Navbar>

      <div className="write">
        <Link to={`/Write`}>
          <h3>새 글 쓰기</h3>
        </Link>
      </div>
    </div>
  );
}

function Month() {
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

function Detail({ id }) {
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

function Content({ num, id, title, owner_name, date }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    // <Link to={`/list/${id}`}>
    <div>
      <div className="rect3" onClick={() => setModalIsOpen(true)}>
        {/* 모달 */}

        {/* <button >Modal Open</button> */}

        <div className="content">
          {/* <span className="number">
            <h1># {num}</h1>
          </span> */}
          <span className="title">
            <h2>제목 : </h2>
            <h3>{title}</h3>
          </span>
          <span className="writer">
            <h3>글쓴이 : </h3>
            <h4>{owner_name}</h4>
          </span>
          <span>
            <h4>작성 날짜 : </h4>
            <h4>{date}</h4>
          </span>
        </div>
      </div>
      <div className="modal">
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          id={id}
        >
          <Detail></Detail>
          <h1>제목</h1>
          <h4>글쓴이</h4>
          <p>내용</p>
          <button onClick={() => setModalIsOpen(false)}>닫기</button>
        </Modal>
      </div>
    </div>
    // </Link>
  );
}

function WeekList({ id, week, title, owner_name, date }) {
  const [num, setNum] = useState(1);

  const increaseNum = () => {
    setNum((prevNum) => prevNum + 1);
  };

  return (
    <div className="rect2">
      <h1>{week} 주차</h1>
      {increaseNum}
      <Content
        num={num}
        // id={id}
        title={title}
        owner_name={owner_name}
        date={date}
      ></Content>
      <Content
        num={num}
        // id={id}
        title={title}
        owner_name={owner_name}
      ></Content>
    </div>
  );
}

function Block({ id, week, title, owner_name, date }) {
  title = "제목";
  owner_name = "글쓴이";
  date = "24-01-30";

  return (
    <div className="list">
      <WeekList week={week} title={title} owner_name={owner_name} date={date} />
    </div>
  );
}

function List() {
  return (
    <div className="list">
      <div className="num">
        <Header></Header>
        <Month></Month>
        <Block week="1"></Block>
        <Block week="2"></Block>
        <Block week="3"></Block>
        <Block week="4"></Block>
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
