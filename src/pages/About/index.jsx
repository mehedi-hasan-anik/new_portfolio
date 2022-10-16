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

            <h6>Full Name : Md. Anik Miah</h6>
            <h6>Age : 25</h6>
            <h6>Nationality: Bangladeshi</h6>
            <h6>Language : Bangla, English</h6>
            <h6>Address: Dhaka, Bangladesh</h6>
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
