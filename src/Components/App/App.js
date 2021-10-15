import "./App.css";
import { Intro } from "./../Intro/Intro.js";
import { Cards } from "./../Cards/Cards.js";
import { CardSwiper } from "./../Cards/CardSwiper.js";

import { Project, ProjectVideo } from "./../Projects/Projects.js";
import { MarqueeTicker } from "./../Marquee/Marquee.js";
import ReactGA from "react-ga";

ReactGA.initialize("UA-203154360-2");
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {

  
  return (
    <div className="App" id="contact">
      <Intro />
      <MarqueeTicker />
      <span id="skills" ></span>
      <Cards />
      <CardSwiper />
      <div
        style={{
          borderTop: "1px solid #E3E3E3 ",
          marginLeft: 64,
          marginRight: 64,
        }}
      ></div>

      <div className="section-container-grid" id="featured-work">
        <h1>Featured Work</h1>
        <h2>A selection of my work in front-end development.</h2>
        <div className="section-container">
          <Project title="vmoh" />
          <Project title="artist_website" />
        </div>
      </div>

      <div
      style={{
        borderTop: "1px solid #E3E3E3 ",
        marginLeft: 64,
        marginRight: 64,
      }}
    ></div>

      <div className="section-container-grid" id="recent-projects">
        <h1>Recent Projects</h1>
        <h2>
          A selection of my latest projects in iOS and full-stack development.
        </h2>
        <div className="section-container">
        <Project title="node_weather_app" />
        <Project title="wordbuzz" />
        <ProjectVideo title="wordbuzz" />
        <Project title="tiptop" />
        <Project title="todos_app" />
        <Project title="notes_app" />
        <Project title="hangman_game" />
        <Project title="sunnyside_agency" />
        <Project title="memory_game" />
        </div>

      </div>
    </div>
  );
}

export default App;
