import React from "react";
import Typical from "react-typical";
import portfolioImg from "../../images/Untitled-4_50.png";
import "./Hero.styles.css";

const Hero = () => {
  return (
    <div className="hero_wrapper" id="home">
      <div className="container">
        <div className="inner_hero_wrapper">
          <div className="hero-left">
            <div class="home-content">
              <div class="text-1">Hello, my name is</div>
              <div class="text-2">Md. Anik Miah</div>
              <div class="text-3">
                <span class="typing">
                  <Typical
                    steps={[
                      "And",
                      1000,
                      "I'm a",
                      1000,
                      "Frontend",
                      1000,
                      "Developer",
                      1000,
                    ]}
                    loop={Infinity}
                    wrapper="p"
                  />
                </span>
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
