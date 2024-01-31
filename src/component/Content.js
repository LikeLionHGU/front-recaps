import { useState } from "react";
import Modal from "react-modal";
import Detail from "./Detail";
import { useParams } from "react-router-dom";
import "../css/content.css";
import Update from "./Update"; // update함수 추가

function MonthCal({ date }) {}

export default function Content({
  num,
  id,
  title,
  owner_name,
  img_path,
  date,
  body,
  pass,
}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const params = useParams();

  const month = date.slice(5, 7);

  if (Number(params.month) == Number(month)) {
    return (
      // <Link to={`/list/${id}`}>
      <div className="list-container">
        <div className="rect3" onClick={() => setModalIsOpen(true)}>
          <div className="content">
            <MonthCal date={date} />
            <div className="top-content">
              <span className="writer">
                <h4>{owner_name}</h4>
              </span>
              <span className="date">
                <h4>{date}</h4>
              </span>
            </div>
            <div className="title">
              <h2>제목 : {title} </h2>
            </div>
            <div className="text-content">
              <p>{body.length > 82 ? `${body.slice(0, 82)}... ` : body} </p>
            </div>
          </div>
        </div>
        console.log({pass});
        <div className="modal">
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            id={id}
          >
            {/* <Detail></Detail> */}
            <h1 className="modal-title">{title}</h1>
            <div className="name-date">
              <span>{owner_name}</span>
              <span>{date}</span>
            </div>
            <p className="modal-content">{body}</p>
            <div className="image">
              <img src={"https://ll-api.jungsub.com" + img_path}></img>
            </div>
            <button>삭제하기</button>
            <button onClick={() => setModalIsOpen(false)}>닫기</button>
            <button>수정하기</button>
          </Modal>
        </div>
      </div>
      // </Link>
    );
  } else {
    return <></>;
  }
}
