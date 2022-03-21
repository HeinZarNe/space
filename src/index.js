import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Destination from "./components/destination";
import Crew from "./components/crew";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Technoogy from "./components/technoogy";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/destination" element={<Destination />}></Route>
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technoogy />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
