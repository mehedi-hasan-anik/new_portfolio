import React from "react";
import portfolioImg from "../../images/Untitled-4_50.png";
import "./Hero.styles.css";

const Hero = () => {
  return (
    <div className="hero_wrapper" id="home">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div className="hero-left">
            <div class="home-content">
              <div class="text-1">Hello, my name is</div>
              <div class="text-2">Md. Anik Miah</div>
              <div class="text-3">
                And I'm a <span class="typing">Frontend Developer</span>
              </div>
              <a href="#">Hire me</a>
            </div>
          </div>
          <div className="hero-right">
            <img src={portfolioImg} alt="portfolioImg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
