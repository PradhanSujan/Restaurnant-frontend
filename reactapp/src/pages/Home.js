import React from "react";
import "../assets/style/Home.scss";
import Hero from "../components/hero-section/Hero";
import About from "../components/about/About";
import Menu from "../components/menu/Menu";
import ChooseFood from "../components/choose-food/ChooseFood";
import MeetingHall from "../components/meeting-hall/MeetingHall";
import Events from "../components/event/Events";
import ClientReview from "../components/client-review/ClientReview";
import Gallery from "../components/gallery/Gallery";
import Achievement from "../components/achievement/Achievement";
const Home = () => {
  return (
    <div className="main-wrapper">
      <div className="container">
        <Hero />
        <Achievement />
        <About />
        <Menu />
        <ChooseFood />
        <MeetingHall />
        <Events />
        <ClientReview />
        <Gallery />
      </div>
    </div>
  );
};
export default Home;
