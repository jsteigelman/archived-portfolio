import React from "react";
import "./Marquee.css";
import Marquee from "react-fast-marquee";

export class MarqueeTicker extends React.Component {
  render() {
    return (
      <div className="marquee">
        <Marquee gradient={false} speed={90}>
          <p>
            Say hi at joey.steigelman@gmail.com · Say hi at
            joey.steigelman@gmail.com · Say hi at joey.steigelman@gmail.com ·{" "}
          </p>
        </Marquee>
      </div>
    );
  }
}
