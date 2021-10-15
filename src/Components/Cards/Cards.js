import React from "react";
import "./Cards.css";
import cardsIcon from "./../Images/arrow.png"
import { getCardData } from './../../Utilities/CardData.js'

export class Card extends React.Component {
  
  render() {
    const cardData = getCardData()

    let current = "";
    if (this.props.title !== null) {
      current = this.props.title;
    }
    return (
      <div className="card-container">
      <div className="card-child">
      <img src={cardData[current].image} alt={cardData[current].image_alt} />
        <h4>{cardData[current].title}</h4>
        <ul>
          <li>{cardData[current].entry_1}</li>
          <li>{cardData[current].entry_2}</li>
          <li>{cardData[current].entry_3}</li>
          <li>{cardData[current].entry_4}</li>
          <li>{cardData[current].entry_5}</li>
          <li>{cardData[current].entry_6}</li>
          <li>{cardData[current].entry_7}</li>
        </ul>
      </div>
      </div>
    )
  }
}

export class Cards extends React.Component {
  render() {
    return (
        <div className="cards-container">
          <div className="cards-child child-one">
          <img src={cardsIcon} alt="arrow icon" />
            <h4>Programming</h4>
            <ul>
              <li>React</li>
              <li>JavaScript</li>
              <li>C++</li>
              <li>Python</li>
              <li>Swift</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
          <div className="cards-child child-two">
          <img src={cardsIcon} alt="arrow icon" />
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
          <img src={cardsIcon} alt="arrow icon" />
            <h4>Certifications</h4>
            <ul>
              <li>CodePath's iOS Development</li>
              <li>Codecademy's Web Development</li>
              <li>SuperHi's Visual Design + Branding</li>
            </ul>
          </div>
          <div className="cards-child child-four">
          <img src={cardsIcon} alt="arrow icon" />
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
