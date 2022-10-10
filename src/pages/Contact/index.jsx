import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Tittle from "../../components/Tittle";
import "./Contact.styles.css";

const Contact = () => {
  return (
    <div className="contact_wrapper">
      <Tittle title="Contact Me" sub_title="who i am" color="white" />
      <div className="form-area ">
        <div className="inner-form-area ">
          <form
            action="https://formcarry.com/s/JPbGpbi0qPn"
            method="POST"
            accept-charset="UTF-8"
          >
            <input type="email" name="email" placeholder="Enter Your Email" />
            <br />
            <input
              type="text"
              name="firstName"
              placeholder="Enter Your FirstName"
            />
            <br />
            <input
              type="text"
              name="lastName"
              placeholder="Enter Your LastName"
            />
            <br />
            <textarea
              type="text"
              name="lastName"
              placeholder="Description"
            ></textarea>
            <br />
            <input
              type="submit"
              style={{ background: "crimson", color: "white" }}
            />
          </form>
        </div>
      </div>
      <div className="phone-email">
        <div className="row phone-email-area">
          <div className="col-md-12">
            <h4>Phone : +8801959109322</h4>
          </div>
          <div className="col-md-12">
            <h4>Email : anikm2283@gmail.com</h4>
          </div>
        </div>
      </div>
      <div className="follow-area">
        <div className="inner-follow-area">
          <ul>
            <li>
              {" "}
              <a href="https://www.facebook.com/anik.ahamed.908/">
                <FontAwesomeIcon icon={faFacebook} />
              </a>{" "}
            </li>
            <li>
              {" "}
              <a href="https://github.com/mehedi-hasan-anik">
                <FontAwesomeIcon icon={faGithub} />
              </a>{" "}
            </li>
            <li>
              {" "}
              <a href="https://www.linkedin.com/in/anik-hasan-051072211/">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
