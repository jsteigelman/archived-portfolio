import React from "react";
import "./Cards.css";
import cards_image_programming from "./../Images/cards_icon_programming.png";
import icon_one from "./../Images/icon_one.png";
import icon_two from "./../Images/icon_two.png";
import icon_three from "./../Images/icon_three.png";
import icon_four from "./../Images/icon_four.png";

export class Cards extends React.Component {
  render() {
    return (
        <div className="cards-container">
          <div className="cards-child child-one">
            {/* <img src={icon_one} /> */}
            <h4>Programming</h4>
            <ul>
              <li>ReactJS</li>
              <li>Javascript</li>
              <li>C++</li>
              <li>Python</li>
              <li>Swift</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
          <div className="cards-child child-two">
            {/* <img src={icon_two} /> */}
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
            {/* <img src={icon_three} /> */}
            <h4>Certifications</h4>
            <ul>
              <li>CodePath's iOS Development</li>
              <li>Codecademy's Web Development</li>
              <li>SuperHi's Visual Design + Branding</li>
            </ul>
          </div>
          <div className="cards-child child-four">
            {/* <img src={icon_four} /> */}
            <h4>Experience</h4>
            <ul>
              <li>Agile</li>
              <li>Scrum</li>
              <li>Kanban</li>
              <li>Product management</li>
              <li>Big data</li>
              {/* <li>Organizational change</li> */}
            </ul>
          </div>
        </div>
    );
  }
}
