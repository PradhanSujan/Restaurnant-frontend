import React from "react";
// import "./assets/style/style.scss";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./components/about/About";
import Menu from "./components/menu/Menu";
import Header from "./layouts/header/Header";
import Footer from "./layouts/footer/Footer";
import Events from "./components/event/Events";
import Contact from "./pages/contact/Contact";
import Login from "./pages/login/Login";
import Logout from "./pages/logout/Logout";

import GoToTop from "./components/go-to-top/GoToTop";
import Register from "./pages/signup/Register";
const App = () => {
  return (
    <div className="app-container">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Register />} />
          <Route path="/logout" element={<Logout />} />

        </Routes>
        <GoToTop />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
