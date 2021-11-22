import React from "react";
import "../styles/header.css";
import Button from "./Button";
import logo from "../assets/logo.png";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";

const Header = () => {
  return (
    <>
      <nav id="top">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
        <ul>
          <li>
            <a href="#projects" className="hover-animation">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover-animation">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <header>
        <div className="stars">
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
        </div>
        <div className="header-content">
          <div className="name">
            <h1>Steven <br/> Ha</h1>
            <div className="social-icons">
              <a
                href="https://www.linkedin.com/in/steven-dev/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedin} alt="linkedin" />
              </a>
              <a
                href="https://github.com/Steven-Ha-88"
                target="_blank"
                rel="noreferrer"
              >
                <img src={github} alt="github" />
              </a>
            </div>
          </div>
          <div className="info">
            <p className="role">Frontend developer</p>
            <div className="content-body">
              <p>
                A versitile front end developer implementing web and mobile applications.
                Passionate about UI / motion design and programming.
                Technologies I use include 
                <span className="lang">React</span>{" "}
                <span className="lang">TypeScript</span> and{" "}
                <span className="lang">Next.js</span>.
                <span className="lang">GraphQL</span>.
                <span className="lang">MongoDB</span>.
              </p>
              <p>
              I enjoy using the latest technology to deliver the simplest solution. Aside from coding, I love to game and travel.
              </p>
            </div>
            <div className="buttons">
              <Button
                bg="#1f1f1f"
                borderColor="#839ef6"
                shadowColor="#839ef6"
                textColor="#F1F7EE"
                href="#projects"
              >
                View Projects
              </Button>
              <Button
                bg="#1f1f1f"
                borderColor="#c2c2c2"
                shadowColor="#c2c2c2"
                textColor="#c2c2c2"
                href="https://github.com/mandeepdebnath/portfolio/blob/main/src/Resume/resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                View Resume
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
