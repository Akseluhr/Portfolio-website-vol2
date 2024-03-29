import React from "react";
import "animate.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const HomeScreen = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };
  return (
    <div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: {
            enable: true,
            zIndex: 1,
          },
          particles: {
            number: {
              value: 80,
              density: {
                enable: false,
              },
            },
            size: {
              value: 0.5,
              random: true,
              anim: {
                speed: 4,
                size_min: 0.3,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 1,
              straight: false,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "bubble",
              },
              onclick: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              bubble: {
                distance: 250,
                duration: 2,
                size: 0,
                opacity: 0,
              },
              repulse: {
                distance: 400,
                duration: 4,
              },
            },
          },
        }}
      />
      <div>
        <nav>
          <ul className="navbar">
            <li>
              <a href="#about">ABOUT</a>
            </li>
            <li>
              <a href="#projects">PROJECTS</a>
            </li>
            <li>
              <a href="#contact">CONTACT</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="firstView">
        <div className="firstLeft animate__animated animate__slideInUp">
          <h1> aksel uhr.</h1>
          <p className="pitch">
            Optimistic Data Science MSc. student & part time web developer.
          </p>
          <a className="btn-type-one" href="#about">
            Get to know me!
          </a>
        </div>
      </div>

      <footer className="footer">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />

        <a
          href="https://www.linkedin.com/in/aksel-uhr/"
          className="fa fa-linkedin"
        >
          {" "}
        </a>
        <a
          href="https://www.facebook.com/aksel.uhr/"
          className="fa fa-facebook"
        >
          {" "}
        </a>
        <a
          href="https://www.instagram.com/akseluhr/"
          className="fa fa-instagram"
        >
          {" "}
        </a>
        <a 
          href="https://github.com/Akseluhr" 
          className="fa fa-github" 
        >
          {" "}
        </a>
      </footer>
      <div className="navPin"></div>
    </div>
  );
};

export default HomeScreen;
