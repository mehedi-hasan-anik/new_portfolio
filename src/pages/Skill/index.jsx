import React from "react";
import Tittle from "../../components/Tittle";
import "./Skill.styles.css";

const Skill = () => {
  return (
    <div className="skill_wrapper">
      <Tittle title="My Skill" sub_title="who i am" />
      <div className="container">
        <div className="wrap">
          <div className="bar">
            <h3>
              REACT <abbr>80%</abbr>
            </h3>
            <span></span>
          </div>
          <div className="bar">
            <h3>
              Redux <abbr>80%</abbr>
            </h3>
            <span></span>
          </div>
          <div className="bar">
            <h3>
              JAVASCRIPT <abbr>70%</abbr>
            </h3>
            <span></span>
          </div>
          <div className="bar">
            <h3>
              Styled Component <abbr>90%</abbr>
            </h3>
            <span></span>
          </div>
          <div className="bar">
            <h3>
              Bootstrap <abbr>80%</abbr>
            </h3>
            <span></span>
          </div>
          <div className="bar">
            <h3>
              Ant Design <abbr>80%</abbr>
            </h3>
            <span></span>
          </div>
          <div className="bar">
            <h3>
              Material UI <abbr>80%</abbr>
            </h3>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
