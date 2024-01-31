import { useState } from "react";
import Modal from "react-modal";
import Detail from "./Detail";
import { useParams, Link } from "react-router-dom";
import "../css/content.css";
import Delete from "./Delete"; // update함수 추가

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
      <div className="list-container">
        <div className="rect3" onClick={() => setModalIsOpen(true)}>
          <div className="content">
            <MonthCal date={date} />
            <div className="title">
              <h2>제목 : </h2>
              <h3>{title}</h3>
            </div>
            <div className="writer">
              <h3>글쓴이 : </h3>
              <h4>{owner_name}</h4>
            </div>
            <div>
              <h4>작성 날짜 : </h4>
              <h4>{date}</h4>
            </div>
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
            <h1>#작성한 글을 수정할 수 있습니다!</h1>
            <strong>수정을 원하시면</strong>
            <h3>{owner_name}님이 작성한 글 입니다.</h3>
            <Link
              to="/update"
              state={{
                id: id,
                title: title,
                owner_name: owner_name,
                date: date,
                body: body,
                pass: pass,
              }}
            >
              <button>수정하기</button>
            </Link>
            <Delete id={id} pass={pass}></Delete>{" "}
            {/*삭제하기 기능은 구현 예정 아직 오류*/}

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
