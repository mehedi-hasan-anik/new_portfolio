import React from "react";
import Tittle from "../../components/Tittle";
import "./Resume.styles.css";

const Resume = () => {
  return (
    <div className="resume_wrapper" id="resume">
      <Tittle title="My Resume" sub_title="who i am" color="white" />
      <div className="container">
        <div className="row innner_resume_wrapper">
          <div className="col-md-6">
            <div className="single_border">
              <h3>Skill</h3>
              <ul>
                <li> C, JavaScript.</li>
                <li>ReactJS, Redux, ChartJS, Styled Component.</li>
                <li> Material UI, Ant Design, Bootstrap.</li>
                <li> HTML5, CSS3, SASS.</li>
                <li>Problem Solving.</li>
                <li>Bitbucket, Git</li>
                <li>Teamwork, Effective communication, and Time management.</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <div className="single_border">
              <h3>Education</h3>
              <div className="bsc">
                <h4>B.S.C in Computer Science & Engineering</h4>
                <p>Tejgaon College,National University of Bangladesh.</p>
              </div>
              <div className="hsc">
                <h3>Higher Secondary</h3>
                <ul>
                  <li>College : Ghatail Cantonment Public School & College</li>
                  <li>Group : Science</li>
                  <li>Passing Year : 2015</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 ">
            <div className="single_border">
              <h3>Experience</h3>
              <h4>React JS Developer (Jul 2021 - Present) </h4>
              <h5>Bdtask Limited</h5>
              <p>
                Bdtask is one of the largest and leading software companies. We
                produce digital assets for web, mobile, and desktop. A team with
                me created the BUS365. My responsibility is to work with:
              </p>
              <ul>
                <li>UI design</li>
                <li>Responsive</li>
                <li>API integration</li>
                <li>Social login with Google and Facebook</li>
                <li>Add Payment Gateway</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
