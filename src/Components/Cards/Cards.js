import React from "react";
import "./Cards.css";

export class Cards extends React.Component {
  render() {
    return (
        <div className="cards-container">

          <div className="cards-child child-one">
            <h4>Programming</h4>
            <ul>
              <li>React</li>
              <li>Javascript</li>
              <li>C++</li>
              <li>Python</li>
              <li>Swift</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
          <div className="cards-child child-two">
            <h4>Technologies</h4>
            <ul>
              <li>Figma</li>
              <li>Git/Github</li>
              <li>Jira</li>
              <li>Xcode</li>
              <li>OS X</li>
              <li>Blender</li>
              <li>Adobe Photoshop</li>
            </ul>
          </div>

          <div className="cards-child child-three">
            <h4>Certifications</h4>
            <ul>
              <li>CodePath's iOS Development</li>
              <li>Codecademy's Web Development</li>
              <li>SuperHi's Visual Design + Branding</li>
            </ul>
          </div>
          <div className="cards-child child-four">
            <h4>Experience</h4>
            <ul>
              <li>Agile</li>
              <li>Product management</li>
              <li>Communication across technical and non-technical stakeholders</li>
              <li>Organizational change</li>
              <li>Big data</li>
            </ul>
          </div>
        </div>
    );
  }
}
