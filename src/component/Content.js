import { useState } from "react";
import Modal from "react-modal";
import Detail from "./Detail";
import { useParams } from "react-router-dom";
import Update from "./Update"; // update함수 추가

function MonthCal({ date }) {}

export default function Content({
  num,
  id,
  title,
  owner_name,
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
      <div>
        <div className="rect3" onClick={() => setModalIsOpen(true)}>
          <div className="content">
            <MonthCal date={date} />
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
            <h1>{title}</h1>
            <h4>{owner_name}</h4>
            <h5>{date}</h5>
            <p>{body}</p>
            <Update
              id={id}
              title={title}
              owner_name={owner_name}
              date={date}
              body={body}
              pass={pass}
            ></Update>
            <button onClick={() => setModalIsOpen(false)}>닫기</button>
          </Modal>
        </div>
      </div>
      // </Link>
    );
  } else {
    return <></>;
  }
}
