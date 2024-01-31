import React from "react";
import { useEffect, useState } from "react";

function Update({ id, title, owner_name, date, body, pass }) {
  const [update_title, setTitle] = useState(title);
  const [update_body, setBody] = useState(body);
  const [update_name, setName] = useState(owner_name);
  const [update_password, setPassword] = useState(pass); // 보안 위해 빈공간으로 두기
  const [update_date, setDate] = useState(date);

  return (
    <div>
      <div
        className="title" // 글의 제목
      >
        제목
        <input
          value={update_title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
      </div>
      <hr />
      <div
        className="owner_name" //작성자 이름
      >
        이름
        <input
          placeholder="이름"
          value={update_name}
          onChange={(e) => setName(e.target.value)}
        ></input>
      </div>
      <div
        className="date" //작성자 날짜
      >
        날짜
        <input
          type="date"
          value={update_date}
          onChange={(e) => setDate(e.target.value)}
        ></input>
      </div>
      <div
        className="owner_password" //사용자 비밀번호
      >
        비밀번호
        <input
          type="password" //masking(효과)
          placeholder="비밀번호"
          value={update_password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
      </div>
      <hr />
      <div
        className="body" //본문내용
      >
        <textarea
          placeholder="본문작성"
          value={update_body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
      </div>
      <hr />

      <div className="bottom">
        <button
          onClick={(e) => {
            // 데이터 넣어줄 DB API

            console.log(id, title, owner_name, date, body, pass);
            const formData = new FormData();

            formData.append("id", id);
            formData.append("title", update_title);
            formData.append("body", update_body);
            formData.append("date", update_date);
            formData.append("owner_name", update_name);
            formData.append("owner_pass", update_password);
            // formData.append("owner_image", img);

            //            if (!password) {
            //             alert("비번을 입력해주세요/1");
            //            }

            fetch("https://ll-api.jungsub.com/diary/update", {
              method: "post",
              body: formData,
            })
              .then((data) => data.json())
              .then((json) => {
                if (!!json.ok) {
                  // navigate("/recap/" + json.ok._id);
                  // *자동 새로고침 기능 추가하기!
                  window.location.reload();
                } else {
                }
              });
          }}
        >
          업데이트
        </button>
      </div>
    </div>
  );
}

export default Update;
