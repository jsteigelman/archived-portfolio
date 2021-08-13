import "./App.css";
import { Intro } from "./../Intro/Intro.js";
import { Cards } from "./../Cards/Cards.js";
import { Projects } from "./../Projects/Projects.js";
import { Footer } from "./../Footer/Footer.js";
import { MarqueeTicker } from "./../Marquee/Marquee.js";
import ReactGA from 'react-ga';


ReactGA.initialize("UA-203154360-2");
ReactGA.pageview(window.location.pathname + window.location.search);


function App() {
  return (
    <div className="App">
      <Intro />
      <MarqueeTicker />
      <Cards />
    

      <Projects />
      <Footer />
    </div>
  );
}

export default App;
