import React from "react";
import styled from "styled-components";
//화면 전환을 위한 reat-router-dom {Link}요소 사용
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="header">
      <div className="header__logo">
        <img src="./img/likelion header.jpg" alt="" />
        <a href="#">LikeLion Frontend</a>
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

export default Header;
