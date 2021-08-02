import React from "react";
import "./Projects.css";
import artwork_image from "./../Images/projects-artwork.png";
import vmoh_image from "./../Images/projects-vmoh.png";
import sunnyside_image from "./../Images/projects-sunnyside.png";
import wordbuzz_image_one from "./../Images/projects-wordbuzz-1.png";
import wordbuzz_image_two from "./../Images/projects-wordbuzz-2.png";
import wordbuzz_image_three from "./../Images/projects-wordbuzz-3.png";
import memory_image from "./../Images/projects-memory.png";
import tiptop_image from "./../Images/projects-tiptop.png";
import tiptop_ipad from "./../Images/projects-tiptop-ipad.png";
import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";

export class Projects extends React.Component {
  render() {
    return (
      <div className="projects-container-grid">
        <div className="projects-container">
          <div className="projects-section projects-wordbuzz">
            <div className="projects-content">
              <div className="projects-text">
                <h6>Swift</h6>
                <h5>WordBuzz</h5>
                <p>
                  WordBuzz is a gamified vocabulary building app. Co-developed
                  in a team of three using WordsAPI and a custom backend
                  database. Selected as one of ten finalists for iOS at
                  CodePath’s National Demo Day out of over 125 groups.{" "}
                </p>
                <div className="project-link-container">
                  <button className="projects-button">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.youtube.com/watch?v=PYqlwjb9euI&t=1s"
                    >
                      YouTube
                    </a>
                  </button>
                  <button className="projects-button">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/codepath-ios-team/Wordbuzz"
                    >
                      Github
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="project-image">
              <div className="projects-wordbuzz-images">
                <InView threshold={0.25}>
                  {({ ref, inView }) => (
                    <motion.img
                      ref={ref}
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.8 }}
                      src={wordbuzz_image_one}
                      alt="preview of app project"
                    />
                  )}
                </InView>
                <InView threshold={0.25}>
                  {({ ref, inView }) => (
                    <motion.img
                      ref={ref}
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.8 }}
                      src={wordbuzz_image_two}
                      alt="preview of app project"
                    />
                  )}
                </InView>
                <InView threshold={0.25}>
                  {({ ref, inView }) => (
                    <motion.img
                      ref={ref}
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.8 }}
                      src={wordbuzz_image_three}
                      alt="preview of app project"
                    />
                  )}
                </InView>
              </div>
            </div>
          </div>

          <div className="projects-youtube">
            <iframe
              width="640"
              height="385"
              src="https://www.youtube.com/embed/auQ3POqs-F8"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
              <h5>Watch the app demo of WordBuzz on YouTube</h5>
          </div>

          <div className="projects-section projects-tiptop">
            <div>
              <div className="projects-text">
                <h6>Swift</h6>
                <h5>TipTop</h5>
                <p>
                  TipTop is a tip calculator app that makes calculating tips
                  quick and easy. Simply enter the bill amount to instantly see
                  the calculated tip and the total cost including tip. You can
                  also adjust the tip percentage and conveniently split the bill
                  amongst friends.{" "}
                </p>
                <div className="project-link-container">
                  <button className="projects-button">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/greencreate/tiptop"
                    >
                      Github
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="project-image">
              <div className="projects-tiptop-images">
                <InView threshold={0.25}>
                  {({ ref, inView }) => (
                    <motion.img
                      ref={ref}
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.8 }}
                      className="tiptop-iphone"
                      src={tiptop_image}
                      alt="preview of app project"
                    />
                  )}
                </InView>
                <InView threshold={0.25}>
                  {({ ref, inView }) => (
                    <motion.img
                      ref={ref}
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.8 }}
                      className="tiptop-ipad"
                      src={tiptop_ipad}
                      alt="preview of app project"
                    />
                  )}
                </InView>
              </div>
            </div>
          </div>

          <div className="projects-section projects-vmoh">
            <div>
              <div className="project-image website-image">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="www.vmoholo.org"
                >
                  <InView threshold={0.25}>
                    {({ ref, inView }) => (
                      <motion.img
                        ref={ref}
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        src={vmoh_image}
                        alt="preview of project website"
                      />
                    )}
                  </InView>
                </a>
              </div>
              <div className="projects-text">
                <h6>ReactJS</h6>
                <h5>The Virtual Museum of Holography Website</h5>
                <p>
                  Designed and developed the website for The Virtual Museum of
                  Holography. New updates to the website coming soon.
                </p>
                <div className="project-link-container">
                  <button className="projects-button">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="www.vmoholo.org"
                    >
                      Live Site
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="projects-section projects-artwork">
            <div>
              <div className="projects-text">
                <h6>ReactJS</h6>
                <h5>Artist Website</h5>
                <p>
                  I’m an artist turned developer. This is a website I created to
                  showcase my artwork.
                </p>
                <div className="project-link-container">
                  <button className="projects-button">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="www.joeysteigelman.com"
                    >
                      Live Site
                    </a>
                  </button>
                  <button className="projects-button">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/greencreate/artwork"
                    >
                      Github
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="project-image website-image">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="www.joeysteigelman.com"
              >
                <InView threshold={0.25}>
                  {({ ref, inView }) => (
                    <motion.img
                      ref={ref}
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.8 }}
                      src={artwork_image}
                      alt="preview of project website"
                    />
                  )}
                </InView>
              </a>
            </div>
          </div>

          <div className="projects-section projects-sunnyside">
            <div>
              <div className="project-image website-image">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="www.steigelman-sunnyside.netlify.app"
                >
                  <InView threshold={0.25}>
                    {({ ref, inView }) => (
                      <motion.img
                        ref={ref}
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        src={sunnyside_image}
                        alt="preview of project website"
                      />
                    )}
                  </InView>
                </a>
              </div>
              <div className="projects-text">
                <h6>HTML + CSS + Javascript</h6>
                <h5>Sunnyside Agency Landing Page</h5>
                <p>
                  This is my solution to the Sunnyside agency landing page
                  challenge on Frontend Mentor. Frontend Mentor provides
                  front-end challenges that include professional web designs.
                </p>
                <div className="project-link-container">
                  <button className="projects-button">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="www.steigelman-sunnyside.netlify.app"
                    >
                      Live Site
                    </a>
                  </button>
                  <button className="projects-button">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/greencreate/sunnyside-agency-landing-page"
                    >
                      Github
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="projects-section projects-memory">
            <div className="projects-content">
              <div className="projects-text">
                <h6>HTML + CSS</h6>
                <h5>Light and Sound Memory Game</h5>
                <p>
                  This is a memory game in which players must repeat random
                  sequences of lights and sounds by pressing buttons in the
                  correct order.
                </p>
                <div className="project-link-container">
                  <button className="projects-button">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://flaxen-therapeutic-clarinet.glitch.me/"
                    >
                      Live Site
                    </a>
                  </button>
                  <button className="projects-button">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/greencreate/Light-Sound-Memory-Game"
                    >
                      Github
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="project-image website-image">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://flaxen-therapeutic-clarinet.glitch.me/"
              >
                <InView threshold={0.25}>
                  {({ ref, inView }) => (
                    <motion.img
                      ref={ref}
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.8 }}
                      src={memory_image}
                      alt="preview of project website"
                    />
                  )}
                </InView>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
