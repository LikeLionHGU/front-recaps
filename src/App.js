import Header from "./component/Header";
import Write from "./component/Write";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    // 화면 전환이 이루어지도록 react-router-dom을 사용

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
