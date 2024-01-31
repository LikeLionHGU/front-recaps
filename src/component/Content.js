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
            <button
              onClick={() => setModalIsOpen(false)}
              className="diary_home_btn"
            >
              뒤로가기
            </button>
            {/* # 수정할수 있음을 안내해주기 */}
            <h1>{owner_name}님이 작성하신 글 입니다</h1>
            <strong>수정을 위해서는 비밀번호를 입력해주세요</strong>
            {/* <h1>{title}</h1>
            <h4>{owner_name}</h4>
            <h5>{date}</h5>
            <p>{body}</p> */}
            <Update
              id={id}
              title={title}
              owner_name={owner_name}
              date={date}
              body={body}
              pass={pass}
            ></Update>
            {/* <button onClick={() => setModalIsOpen(false)}>닫기</button> */}
          </Modal>
        </div>
      </div>
      // </Link>
    );
  } else {
    return <></>;
  }
}
