// 한성
import React from "react";
import { useEffect, useState } from "react";
import { json, useNavigate } from "react-router-dom";
import "../css-write/form.css";
import { Link } from "react-router-dom";

function Write() {
  //const navigate = useNavigate();
  //입력 받은 contents 저장 변수
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  // const [uploadImgUrl, setUploadImgUrl] = useState("");
  const [img, setImg] = useState();
  //const [imgName, setImgName] = useState("");

  const [date, setDate] = useState("");

  //   const onchangeImageUpload = (e) => {
  //     const { files } = e.target;
  //     const uploadFile = files[0];
  //     const reader = new FileReader();
  //     reader.readAsDataURL(uploadFile);
  //     reader.onloadend = () => {
  //       setUploadImgUrl(reader.result);
  //     };
  //   };

  return (
    <html>
      <nav>
        {" "}
        <Link to={"/"}>
          <h3 className="homebtn">Home</h3>
        </Link>
        <div className="title-header">Write your dairy</div>
      </nav>
      <hr />

      <div className="recap-form">
        <div>
          <div
            className="title" // 글의 제목
          >
            제목
            <input
              value={title}
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
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>

          <div
            className="date" //작성자 날짜
          >
            날짜
            <input
              type="date"
              value={date}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <hr />
          <div
            className="body" //본문내용
          >
            <textarea
              placeholder="본문작성"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
          </div>
          <hr />
          <div
            className="Img_upload" //이미지 업로드
          >
            {/* <img src={uploadImgUrl} img="img" />
          <input type="file" accept="image/*" onChange={onchangeImageUpload} /> */}
            <input
              type="file"
              onChange={(e) => {
                setImg(e.target.files[0]);
                //setImgName(e.target.files[0].name);
              }}
            />
          </div>
          <div className="bottom">
            <button
              onClick={(e) => {
                //console.log(title, body, name, password, uploadImgUrl);
                // fetch(
                //   "https://ll-api.jungsub.com/recap/add", //API, 데이터 저장할 저장소
                //   {
                //     method: "post",
                //     headers: {
                //       "Content-Type": "application/json",
                //     },

                //     // key 와 value 값을 각각 설정 solution (FormData)
                //     body: JSON.stringify({
                //       title: title,
                //       body: body,
                //       owner_name: name,
                //       owner_pass: password,
                //       // 추가적인 변수
                //       //owner_imag: uploadImgUrl, // 업로드 이미지 저장을 위해 추가적인 변수 필요
                //       date: date, //설정한 날짜
                //     }),
                //   }
                // )
                //   .then((data) => data.json())
                //   .then((json) => {
                //     //double CLick 방지
                //     if (!!json.ok) {
                //       navigate("/recap/" + json.ok.id); // 자신이 작성한 글 '바로 보기'
                //       window.location.href = "/";
                //     }
                //   }); // 데이터 넣어줄 DB API

                console.log(title, body, name, password);
                const formData = new FormData();

                formData.append("title", title);
                formData.append("body", body);
                formData.append("date", date);
                formData.append("owner_name", name);
                formData.append("owner_pass", password);
                formData.append("owner_image", img);

                fetch("https://ll-api.jungsub.com/diary/create", {
                  method: "post",
                  body: formData,
                })
                  .then((data) => data.json())
                  .then((json) => {
                    if (!!json.ok) {
                      // navigate("/recap/" + json.ok._id);
                    }
                  });
              }}
            >
              만들기
            </button>
          </div>
        </div>
      </div>
    </html>
  );
}

export default Write;
