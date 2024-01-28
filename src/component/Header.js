import React from "react";
import styled from "styled-components";
//ȭ�� ��ȯ�� ���� reat-router-dom {Link}��� ���
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
          {/*Link�� ���ؼ� Write �������� �̵�*/}
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
