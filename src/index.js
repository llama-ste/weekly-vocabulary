import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import HomePage from "./components/pages/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DayList from "./components/DayList";
import DayPage from "./components/pages/DayPage";
import EmptyPage from "./components/pages/EmptyPage";
import NewWordPage from "./components/pages/NewWordPage";

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route path="/" element={<DayList />} />
        <Route path="day/:day" element={<DayPage />} />
        <Route path="new_word" element={<NewWordPage />} />
        <Route path="*" element={<EmptyPage />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
