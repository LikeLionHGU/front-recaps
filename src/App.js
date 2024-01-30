import Header from "./component/Header";
import "../src/css/header.css";
import Write from "./component/Write";
import List from "./component/List";
import Month from "./component/Month";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./component/Detail";
import Item from "./component/pages/Item";

function App() {
  return (
    // ȭ�� ��ȯ�� �̷�������� react-router-dom�� ���

    // react-router-dom

    // 화면 전환이 이루어지도록 react-router-dom을 사용
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}></Route>
        <Route path="/write" element={<Write />}></Route>

        <Route path="/list/:month" element={<List />}></Route>
        {/* <Route path="/list/detail" element={<Detail />}></Route> */}
        <Route path="/list" element={<List />}></Route>
        <Route path="/list/:id" element={<Item />}></Route>

      </Routes>
    </BrowserRouter>

    // <div>
    //   <Header />
    // </div>
  );
}

export default App;
