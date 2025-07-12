import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import { FaPlay } from "react-icons/fa";
import { CiCircleInfo } from "react-icons/ci";
import TitleCards from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="hero">
        <img
          src="https://images.unsplash.com/photo-1722618282641-fcf9a134c363?q=80&w=1475&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="film"
          className="banner-img"
        />
        <div className="hero-caption">
          <h2 className="caption-text">
            THE <br />
            PROTECTOR
          </h2>
          <p>
            Discovering this ties to a secret ancient order, a youn man living
            in a modern instanbul embarks on a quest to save the city from an
            immortal enemy.
          </p>
          <div className="hero-btns">
            <button className="btn">
              <FaPlay className="play" /> Play
            </button>
            <button className="btn dark-btn">
              <CiCircleInfo /> More Info
            </button>
          </div>
          <TitleCards />
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"Blockbuster Movies"} category={"top_rated"} />
        <TitleCards title={"Only on Netflix"} category={"popular"} />
        <TitleCards title={"Upcoming"} category={"upcoming"} />
        <TitleCards title={"Top Pics for You"} category={"now_playing"} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
