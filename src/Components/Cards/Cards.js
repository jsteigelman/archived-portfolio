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
    )
  }
}

export class Cards extends React.Component {
  render() {
    return (
        <div className="cards-container">
          <Card title="programming" />
          <Card title="technologies" />
          <Card title="certifications" />
          <Card title="experience" />
        </div>
    );
  }
}
