import React, { useEffect, useState } from "react";
import barIcon from "../../images/icons8-tasks-30.png";
import "./Header.styles.css";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
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
          <a
            className={navbar ? "name_white navbar-brand" : "navbar-brand name"}
            href="/#home"
          >
            <span>MD.</span> ANIK MIAH
          </a>
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
                <a className="nav-link ms-3" href="/#home">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a className="nav-link ms-3" href="/#about">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a className="nav-link ms-3" href="/#resume">
                  Resume
                </a>
              </li>
              <li class="nav-item">
                <a className="nav-link ms-3" href="/#blog">
                  Blog
                </a>
              </li>
              <li class="nav-item">
                <a className="nav-link ms-3" href="/#project">
                  Project
                </a>
              </li>
              <li class="nav-item">
                <a className="nav-link ms-3" href="/#skill">
                  Skill
                </a>
              </li>
              <li class="nav-item">
                <a className="nav-link ms-3" href="/#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
