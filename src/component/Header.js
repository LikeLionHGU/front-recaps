import React from "react";
import styled from "styled-components";
import "../css/header.css";
import "../css/month.css";
import "../css/footer.css";
import "../css/container.css";
import "../css/goal.css";

function Title() {
  return (
    <nav className="header">
      <div className="header__emty"></div>
      <div className="header__logo">
        <a href="#">📖Reflect dairy</a>
      </div>

      <ul className="header__menu">
        <li>
          <a href="">New Post</a>
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
    <div class="goal__container">
      <div class="goal">
        This Year's Goal: Eat well,play well, and develop well!
      </div>
    </div>
  );
}

function Month() {
  return (
    <div class="members">
      <div class="member-card template">
        <div class="card-banner">
          <img src="#" alt="card-banner" />
        </div>
        <div class="member-info">
          <div class="info-left">
            <div class="info-name"></div>
            <div class="info-link"></div>
          </div>
          <div class="info-github"></div>
          <div class="info-introduce">
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div class="footer">
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
      <div class="container">
        <Title></Title>
        <Goal></Goal>
        <div class="month-container">
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
