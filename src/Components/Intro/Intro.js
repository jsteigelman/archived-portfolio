import React from "react";
import "./Intro.css";
import { Nav } from "./../Nav/Nav.js";

export class Intro extends React.Component {
  render() {
    return (
      <div className="intro-container">
        <Nav />
        <div className="intro-row">
          <div className="intro-row-text">
              <h2>Hi, I’m Joey. I’m a <span>developer</span> based in New York City.</h2>
              <button className="mobile-button"><a href="mailto:joeysteigelman@gmail.com?subject=Hello">Contact</a></button>
          </div>
        </div>
      </div>
    );
  }
}
