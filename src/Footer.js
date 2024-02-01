import "./css/footer.css";

function Footer() {
  return (
    <div className="footer">
      {/* <img
        id="likelionLogo-footer"
        src="https://i.ibb.co/QfYWJV0/frontend-recpas.jpg"
      /> */}

      {/* <div id="title-footer">
        <h2>LikeLion Frontend</h2>
      </div>
      <div className="member">
        <h3>made by 김예지, 임종현, 장한성</h3>
    </div>*/}
      <img
        id="likelionLogo-footer"
        src="https://i.ibb.co/PxJNskS/Likelion.jpg"
      />
      <span id="title-footer">LikeLion Frontend</span>

      <div id="likelionAddress-footer">
        <p>
          <span>(주)멋쟁이사자처럼</span>|<span>한동대학교</span>|
          <span>Front-End</span>
        </p>
        <p>경상북도 포항시 북구 흥해읍 한동로 558</p>
      </div>
      <div id="footer-members">
        <h3>made by 김예지, 임종현, 장한성</h3>
      </div>

      <div id="likelionContact-footer">
        <ul>
          <li id="github">
            <a
              href="https://github.com/LikeLionHGU"
              title="멋쟁이사자처럼 Github"
            ></a>
          </li>
          <li id="instargram">
            <a
              href="https://www.instagram.com/likelion_hgu/"
              title="멋쟁이사자처럼 instargram"
            ></a>
          </li>
          <li id="web-official">
            <a
              href="https://hgulikelion.web.app/"
              title="멋쟁이사자처럼 공식 홈페이지"
            ></a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
