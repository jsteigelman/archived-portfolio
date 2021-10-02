import React from "react";
import "./Projects.css";
import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";
import ReactGA from "react-ga";
import { getProject } from "./../../Utilities/Functions.js";

export class ProjectButton extends React.Component {

    // handle button click
    eventTrack = (category, action, label) => {
      ReactGA.event({
        category: category,
        action: action,
        label: label,
      });
    };

  render() {

    const projectData = getProject();

    let currentProject = "";
    if (this.props.title !== null) {
      currentProject = this.props.title;
    }

    let currentButton = "";
    if (this.props.buttonNum !== null) {
      currentButton = this.props.buttonNum;
    }

    if (projectData[currentProject][currentButton].title === null) {
      return
    }

    return (
      <button
        className="projects-button"

        // onClick={this.eventTrack.bind(
        //   {projectData[currentProject][currentButton].title},
        //   {projectData[currentProject].title},
        //   "Button"
        // )}
      >
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={projectData[currentProject][currentButton].url}
        >
        {projectData[currentProject][currentButton].title}
        </a>
      </button>
    )
  }
}

export class Project extends React.Component {

  render() {
    const projectData = getProject();

    let currentProject = "";
    if (this.props.title !== null) {
      currentProject = this.props.title;
    }

    const getButton = (projectTitle, buttonNumber) => {
      if (projectData[projectTitle][buttonNumber].title !== "") {
        console.log(projectData[projectTitle][buttonNumber].title)
        return <ProjectButton title={projectTitle} buttonNum={buttonNumber} />
      } 
    }

    return (
      <div className="projects-section">
        <div>
          <div
            className={`project-image ${projectData[currentProject].imageStyle}`}
          >
              <InView threshold={0.25}>
                {({ ref, inView }) => (
                  <motion.img
                    ref={ref}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    src={projectData[currentProject].projectImage}
                    alt={projectData[currentProject].title}
                  />
                )}
              </InView>
          </div>
          <div className="projects-text">
            <h6>{projectData[currentProject].language}</h6>
            <h5>{projectData[currentProject].title}</h5>
            <p>{projectData[currentProject].description}</p>
            <div className="project-link-container">
            {getButton(currentProject, "button_one")}
            {getButton(currentProject, "button_two")}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export class Projects extends React.Component {

  render() {
    return (
      <div className="projects-container-grid">
        <h1>Recent Projects</h1>
        <h2>A selection of my latest work in iOS and front-end development.</h2>
        <div className="projects-container">
  
        <Project title="wordbuzz" />

          <div className="projects-youtube">
            <iframe
              // width="640"
              width="100%"
              height="385"
              src="https://www.youtube.com/embed/auQ3POqs-F8"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h5>Watch the app demo of WordBuzz on YouTube</h5>
          </div>

          <Project title="tiptop" />
          <Project title="vmoh" />
          <Project title="artist_website" />
          <Project title="hangman_game" />
          <Project title="sunnyside_agency" />
          <Project title="memory_game" />
        </div>
      </div>
    );
  }
}
