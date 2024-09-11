import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AttendanceMarking from "./components/AttendanceMarking";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marking" element={<AttendanceMarking />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
