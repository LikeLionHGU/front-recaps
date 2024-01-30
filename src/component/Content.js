import { useState } from "react";
import Modal from "react-modal";
import Detail from "./Detail";

export default function Content({ num, id, title, owner_name, date }) {
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
