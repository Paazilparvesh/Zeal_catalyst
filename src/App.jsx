import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page from "./Components/Page";
import { Page2 } from "./Components2/Page2";
import { Page3 } from "./Components3/Page3";
import { Page4 } from "./Components4/Page4";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page />}></Route>
          <Route path="/assessment" element={<Page2 />}></Route>
          <Route path="/lms" element={<Page3 />}></Route>
          <Route path="/counsel" element={<Page4 />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
