import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import barIcon from "../../images/icons8-tasks-30.png";
import "./Header.styles.css";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 40) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <div className={navbar ? "navbar" : "full-navigation"}>
      <nav class="navbar navbar-expand-lg  fixed-top">
        <div class="container nav-full-area">
          <Link
            className={navbar ? "name_white navbar-brand" : "navbar-brand name"}
            to="/"
          >
            <span>MD.</span> ANIK MIAH
          </Link>
          <button
            class="navbar-toggler toggle"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon">
              <img src={barIcon} alt="bar" />
            </span>
          </button>
          <div
            class="collapse navbar-collapse navigation-area"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 nav-menu-li">
              <li class="nav-item">
                <Link className="nav-link ms-3" to="/home">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link ms-3" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link ms-3" to="/resume">
                  Resume
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link ms-3" to="/blog">
                  Blog
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link ms-3" to="/project">
                  Project
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link ms-3" to="/skill">
                  Skill
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link ms-3" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
