import React from "react";
import Tittle from "../../components/Tittle";
import cv from "../../images/MD. ANIK MIAH.docx.pdf";
import aboutImg from "../../images/Untitled-4_50.png";
import "./About.styles.css";

const About = () => {
  return (
    <div className="about_wrapper" id="about">
      <div className="container">
        <Tittle title="About Me" sub_title="Who I Am" />
        <div className="inner_about_wrapper">
          <div className=" about_left">
            <img src={aboutImg} alt="aboutImg" />
          </div>
          <div className=" about_right">
            <h2>
              I am Md. <span>Anik Miah </span>
            </h2>
            <p>
              I am a frontend web developer. I can provide clean code and pixel
              perfect design. I also make website more & more interactive with
              web animations.
            </p>
            <ul className="informtion">
              <li>Full Name : Md. Anik Miah</li>
              <li>Age : 25</li>
              <li>Nationality: Bangladeshi</li>
              <li>Language : Bangla, English</li>
              <li>Address: Dhaka, Bangladesh</li>
            </ul>

            <div className="cv_downlod_btn_wrapper">
              <a href={cv} className="cv_downlod_btn" download>
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
