import React from "react";
import "./Marquee.css";
import Marquee from "react-fast-marquee";

export class MarqueeText extends React.Component {
  render() {
    return (
      <p>Say hi at joey.steigelman@gmail.com ·{" "}</p>
    )
  }
}

export class MarqueeTicker extends React.Component {
  render() {
    return (
      <div className="marquee">
        <Marquee loop={0} gradient={false} speed={90}>
          <MarqueeText />
          <MarqueeText />
          <MarqueeText />
          <MarqueeText />
          <MarqueeText />
          <MarqueeText />
          <MarqueeText />
          <MarqueeText />
          <MarqueeText />
          <MarqueeText />
          <MarqueeText />
          <MarqueeText />
        </Marquee>
      </div>
    );
  }
}