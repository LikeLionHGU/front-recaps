import { Link } from "react-router-dom";

// Write part�� ��� paige �̵� �׸�
export default function Writeheader() {
  return (
    <div className="header_Write">
      {/*Header(Main)ȭ������ �̵��ϱ�*/}

      <span className="Header_Main">
        <Link to={"/"}>
          <span id="homebtn">Home</span>
        </Link>
      </span>

      <span className="List">
        <Link to={"/list"}>
          {/*���� List �߰� */}
          <span id="listbtn">List</span>
        </Link>
      </span>

      <div className="title-header">Write your diary</div>
    </div>
  );
}
