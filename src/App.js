import Header from "./component/Header";
import "../src/css/header.css";
import Write from "./component/Write";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    // ȭ�� ��ȯ�� �̷�������� react-router-dom�� ���

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}></Route>
        <Route path="/write" element={<Write />}></Route>
      </Routes>
    </BrowserRouter>

    // <div>
    //   <Header />
    // </div>
  );
}

export default App;
