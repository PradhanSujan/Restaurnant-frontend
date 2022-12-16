import React from "react";
import "./assets/style/style.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./components/about/About";
import Menu from "./components/menu/Menu";
import Header from "./layouts/header/Header";
import Footer from "./layouts/footer/Footer";
const App = () => {
  return (
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/menu" element={<Menu/>} />
          {/* <Route path="/event" element={<Event/>} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
        <Footer/>
      </Router>

  );
};

export default App;
