import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <nav className="header">
      <div className="header__logo">
        <img src="./img/likelion header.jpg" alt="" />
        <a href="#">LikeLion Frontend</a>
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

export default Header;
