import Header from "./component/Header";
import Write from "./component/Write";
import List from "./component/List";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    // ȭ�� ��ȯ�� �̷�������� react-router-dom�� ���

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}></Route>
        <Route path="/write" element={<Write />}></Route>
        <Route path="list" element={<List />}></Route>
      </Routes>
    </BrowserRouter>

    // <div>
    //   <Header />
    // </div>
  );
}

export default App;
