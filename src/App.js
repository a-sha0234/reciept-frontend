import { BrowserRouter, Route, Routes } from "react-router-dom";
import { react } from "react";
import Home from "./pages/Home";
import "./scss/main.scss";

function App() {
  return (
    <div className="App">
      {" "}
      <BrowserRouter>
        {" "}
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
