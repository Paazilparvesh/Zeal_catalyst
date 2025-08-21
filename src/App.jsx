import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page from "./Components/Page";
import { Page2 } from "./Components2/Page2";
import { Page3 } from "./Components3/Page3";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/ai" element={<Page />}></Route>
          <Route path="/assesment" element={<Page2 />}></Route>
          <Route path="/3" element={<Page3 />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
