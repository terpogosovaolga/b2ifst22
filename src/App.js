// import logo from "./logo.svg";
import React from "react";
import "./style/style.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";

import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favs" element={<h1>Избранное</h1>} />
        <Route path="*" element={<h1>Страница не найдена</h1>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
