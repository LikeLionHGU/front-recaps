import "./css/footer.css";

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

export default Footer;
