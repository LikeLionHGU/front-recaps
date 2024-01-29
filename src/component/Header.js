import React from "react";
import styled from "styled-components";
import "../css/header.css";
import "../css/month.css";
import "../css/footer.css";
import "../css/container.css";
import "../css/goal.css";
import Footer from "../Footer";

//화면 전환을 위한 reat-router-dom {Link}요소 사용
import { Link } from "react-router-dom";

function Title() {
  return (
    <nav className="header">
      <div className="header__emty"></div>
      <div className="header__logo">
        <a href="#">Reflect dairy</a>
      </div>

      <ul className="header__menu">
        <li>
          {/*<a href="">New Post</a>*/}
          {/*Link를 통해서 Write 페이지로 이동*/}
          <Link to={"/write"}>New Post</Link>
        </li>
      </ul>

      <a href="#" className="header__toogleBtn">
        <i className="fa-solid fa-bars"></i>
      </a>
    </nav>
  );
}
function Goal() {
  return (
    <div className="goal__container">
      <div className="goal">
        This Year's Goal: Eat well,play well, and develop well!
      </div>
    </div>
  );
}

function Month() {
  return (
    <div className="members">
      <div className="member-card template">
        <div className="card-banner">
          <img src="#" alt="card-banner" />
        </div>
        <div className="member-info">
          <div className="info-left">
            <div className="info-name"></div>
            <div className="info-link"></div>
          </div>
          <div className="info-github"></div>
          <div className="info-introduce">
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}

// function Footer() {
//   return (
//     <div className="footer">
//       <img
//         id="likelionLogo-footer"
//         src="https://i.ibb.co/QfYWJV0/frontend-recpas.jpg"
//       />
//       <span id="title-footer">LikeLion Frontend</span>

//       <div id="likelionAddress-footer">
// <p>
//   <span>(주)멋쟁이사자처럼</span>|<span>한동대학교</span>|
//   <span>Front-End</span>
// </p>
// <p>경상북도 포항시 북구 흥해읍 한동로 558</p>
//       </div>
//     </div>
//   );
// }

function Header() {
  return (
    <div className="body">
      {/*<body></body> <html></html> 태그는 jsx에서 사용하면 cosole에서 오류가 출력되서 <div>로 수정했어요*/}
      <div className="container">
        <Title></Title>
        <Goal></Goal>
        <div className="month-container">
          <Month></Month>
          <Month></Month>
          <Month></Month>
          <Month></Month>
          <Month></Month>
          <Month></Month>
          <Month></Month>
          <Month></Month>
          <Month></Month>
          <Month></Month>
          <Month></Month>
          <Month></Month>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Header;
