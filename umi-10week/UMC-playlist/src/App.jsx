// eslint-disable-next-line no-unused-vars
import React from "react";
import "./App.css";
import MainPage from "./pages/MainPage";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

function RouteNotFound() {
  alert("존재하지 않는 페이지입니다");
  return <Navigate to="/" replace />;
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/*" element={<RouteNotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
