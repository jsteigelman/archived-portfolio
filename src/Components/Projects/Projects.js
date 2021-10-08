import React from "react";
import "./Projects.css";
import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";
import ReactGA from "react-ga";
import { getProject } from "./../../Utilities/Functions.js";
import Marquee from "react-fast-marquee";

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
      return;
    }

    return (
      <button className="projects-button">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={projectData[currentProject][currentButton].url}
        >
          {projectData[currentProject][currentButton].title}
        </a>
      </button>
    );
  }
}

export class ProjectVideo extends React.Component {
  render() {
    const projectData = getProject();

    let currentProject = "";
    if (this.props.title !== null) {
      currentProject = this.props.title;
    }

    return (
      <div>
        <div className="projects-youtube">
          <iframe
            width="100%"
            height="385"
            src={projectData[currentProject].videoUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <Marquee className="projects-youtube-text" gradient={true} pauseOnHover={true} pauseOnClick={true}>
          {projectData[currentProject].videoDescription}
        </Marquee>
      </div>
    );
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
        console.log(projectData[projectTitle][buttonNumber].title);
        return <ProjectButton title={projectTitle} buttonNum={buttonNumber} />;
      }
    };

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