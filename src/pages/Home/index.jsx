import React from "react";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import About from "../../pages/About";
import Resume from "../Resume";
import "./Home.styles.css";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Resume />
    </div>
  );
};

export default Home;
