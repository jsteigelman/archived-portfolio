import React from "react";
import "./Marquee.css";
import Marquee from "react-fast-marquee";

export class MarqueeTicker extends React.Component {
  render() {
    return (
        <Marquee className="home-marquee" loop={0} gradient={false} speed={90} >
          <h1>Say hi at joey.steigelman@gmail.com · Say hi at joey.steigelman@gmail.com · Say hi at joey.steigelman@gmail.com · Say hi at joey.steigelman@gmail.com · Say hi at joey.steigelman@gmail.com · Say hi at joey.steigelman@gmail.com · Say hi at joey.steigelman@gmail.com ·{" "}</h1>
        </Marquee>
    );
  }
}