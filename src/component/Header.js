import React from "react";
import styled from "styled-components";
import "../css/header.css";
import "../css/month.css";
import "../css/footer.css";
import "../css/container.css";
import "../css/goal.css";
import { Link } from "react-router-dom";

function Title() {
  return (
    <nav className="header">
      <div className="header__emty"></div>
      <div className="header__logo">
        <a href="#">📖Reflect dairy</a>
      </div>

      <ul className="header__menu">
        <li>
          {/*<a href="">New Post</a>*/}

          {/*Link�� ���ؼ� Write �������� �̵�*/}

          {/*Link를 통해서 Write 페이지로 이동*/}

          <Link to={"/write"}>📝New Post</Link>
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
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="footer">
      <img
        id="likelionLogo-footer"
        src="https://i.ibb.co/QfYWJV0/frontend-recpas.jpg"
      />
      <span id="title-footer">LikeLion Frontend</span>

      <div id="likelionAddress-footer">
        <p>
          <span>(주)멋쟁이사자처럼</span>|<span>한동대학교</span>|
          <span>Front-End</span>
        </p>
        <p>경상북도 포항시 북구 흥해읍 한동로 558</p>
      </div>
    </div>
  );
}

function Header() {
  return (
    <body>
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
    </body>
  );
}

export default Header;
