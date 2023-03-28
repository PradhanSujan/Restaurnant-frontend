import React, { createContext, useReducer } from "react";
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
import ForgotPassword from "./pages/forgot-password/ForgotPassword";
import Dashboard from "./pages/dashboard/Dashboard";
import { initialState, reducer } from "./components/reducer/UseReducer";

//1: contextAPI
export const UserContext = createContext();
const App = () => {
  // The useReducer Hook is used to store and update states, just like the
  // useState Hook. It accepts a reducer function as its first parameter and the initial state as the second.
  // const [state, dispatch] = useReducer(reducer, initialState  )
  // we need
  //1): contextAPI
  //2)provider
  //3)consumer - now consumer ko bada we use useContext

  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(`app ${state}`);

  const Routing = () => {
    return (
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
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <GoToTop />
        <Footer />
      </Router>
    );
  };

  return (
    <div className="app-container">
      <UserContext.Provider value={{ state, dispatch }}>
        <Routing />
      </UserContext.Provider>
    </div>
  );
};

export default App;
