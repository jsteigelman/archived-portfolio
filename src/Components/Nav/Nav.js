import React from "react";
import "./Nav.css";
import nav_icon from "../Images/icon-hamburger.svg";

export class Nav extends React.Component {
  render() {
    return (
      <div className="nav-container">
        <div>Joey Steigelman</div>

        <button className="nav-button">
          <a href="mailto:joeysteigelman@gmail.com?subject=Hello">Contact</a>
        </button>

        <Links />
      </div>
    );
  }
}

export class Links extends React.Component {
  render() {
    function toggleNavDropDown() {
      var x = document.getElementById("navLinks");
      var y = document.getElementById("navBackground");
      if (x.style.display === "block") {
        x.classList.toggle("hide");
        y.classList.toggle("hide");
      } else {
        x.classList.toggle("show");
        y.classList.toggle("show");
      }
    }

    return (
      <div>

        <div class="links-nav-container-outer">
          <a
            href="javascript:void(0);"
            class="nav-icon-container"
            onClick={toggleNavDropDown}
          >
            <img src={nav_icon} alt="mobile drop-down menu icon" />
          </a>

          <div
            class="nav-link-container-outer"
            id="navLinks"
            onClick={toggleNavDropDown}
          >
            <div class="nav-link-container-inner">
              <a className="mobile-only" href="#navigation-skills">Skills</a>
              <a className="mobile-only" href="#navigation-work">Featured Work</a>
              <a className="mobile-only" href="#navigation-projects">Recent Projects</a>
              <a className="mobile-only" href="#navigation-contact">Contact</a>
            </div>
          </div>
        </div>
        <div
          id="navBackground"
          class="nav-background"
          onClick={toggleNavDropDown}
        ></div>
      </div>
    );
  }
}
