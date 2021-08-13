import React from "react";
import "./Footer.css";

export class Footer extends React.Component {
  render() {
    return (
      <div className="footer-container">
        <div className="footer-text">
          <h2>
          Get in touch.
          </h2>
          {/* <button className="footer-button"><a href="mailto:joeysteigelman@gmail.com?subject=Hello">Contact</a></button> */}
          <a href="mailto:joeysteigelman@gmail.com?subject=Hello">
            <button className="footer-button">Contact</button>
          </a>
        </div>
      </div>
    );
  }
}
