import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Bank from "./pages/Bank.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bank" element={ <Bank /> }></Route>
      </Routes>
    </>
  );
}

export default App;
