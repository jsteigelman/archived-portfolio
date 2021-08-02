import "./App.css";
import { Intro } from "./../Intro/Intro.js";
import { Cards } from "./../Cards/Cards.js";
import { Projects } from "./../Projects/Projects.js";
import { Footer } from "./../Footer/Footer.js";
import { MarqueeTicker } from "./../Marquee/Marquee.js";


function App() {
  return (
    <div className="App">
      <Intro />
      <MarqueeTicker />
      <Cards />
      <div className="section-text">
        <p className="section-description">
        Below is a selection of <span>recent projects</span>. My work has primarily been focused in front-end development, iOS apps, and UX/UI design.      
        </p>
        </div>
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
