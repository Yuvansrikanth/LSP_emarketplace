import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navbar,
  Home,
  About,
  LawyerApp,
  ClientApp,
  Legalguides,
} from "./Navbar";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<>
          <Navbar />
          <Home />
        </>} />
      <Route path="/about" element={<>
          <Navbar />
          <About />
        </>} />
      <Route path="/legalguides" element={<>
          <Navbar />
          <Legalguides />
        </>} />
      <Route path="/lawyerapp" element={<LawyerApp />} />
      <Route path="/clientapp" element={<ClientApp />} />
    </Routes>
  </Router>,

  document.getElementById("root")
);
