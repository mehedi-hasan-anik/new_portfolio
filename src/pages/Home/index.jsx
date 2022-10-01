import React from "react";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import About from "../../pages/About";
import "./Home.styles.css";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
    </div>
  );
};

export default Home;
