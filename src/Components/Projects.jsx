import "../styles/projects.css";
import Card from "./Card";

import React from "react";

const Projects = () => {
  return (
    <>
      <section className="projects" id="projects">
        <h1>Projects</h1>
        <Card
          image="https://imgur.com/XXwh2O3.png"
          title="Sickfits - E-commerce website"
          info="An E-commerce web application designed to buy/sell trainers. Consumers can add items to cart and make a purchase via Stripe. This website is currently in test mode."
          tags={["NextJS", "React", "JavaScript", "TypeScript", "Apollo", "GraphQL", "Node.js", "Keystone", "Stripe", "Styled-Components", "Email", "Cloudinary", "Vercel"]}
          demourl="https://www.sickfits-steven.co.uk/"
          githuburl="https://github.com/Steven-Ha-88/Sickfits"
          target="_blank"
        />
        <Card
          image="https://imgur.com/PPrfHpg.png"
          title="The Movie Database"
          info="Being a bit of a Netflix fanatic, I wanted to create an application that would make my film selection process quick and effortless. The result was a web app that displays film star-ratings, trailers and a discussion board to users. Consequently, this project helped me to enhance my backend coding ability."
          tags={["JavaScript", "TypeScript", "React", "Redux", "React-Router", "Node.js", "Express", "MongoDB", "Styled Components", "Bootstrap4", "Heroku"]}
          demourl="https://serene-plains-40116.herokuapp.com/"
          githuburl="https://github.com/Steven-Ha-88/MovieDB"
          target="_blank"
        />
        <Card
            image="https://imgur.com/IdhTyDn.png"
            title="The AniMates Podcast"
            info="A web and mobile application made for AniMates. AniMates is a podcast that not only brings about fun and interesting topics and discussions but on a larger mission, brings about inclusivity and representation for young black males and females, who enjoy anime but don’t have a community that gives them the opportunity to share their opinions and be apart of."
            tags={["JavaScript", "React", "React-Router", "HTML5", "CSS", "Styled Components", "Netlify", "YoutubeAPI"]}
            demourl="https://www.animatestv.co.uk/"
            githuburl="https://github.com/Steven-Ha-88/AniMates"
            target="_blank"
          />
        <Card
          image="https://imgur.com/V7xma8b.png"
          title="The ESO of the Morning Star Church App"
          info="The ESO of the Morning Star church website. This website incorporates a hymns lyrics feature using Contenful CMS and GraphQL. Note: This project is still ongoing..."
          tags={["Gatsby", "React", "JavaScript", "GraphQL", "HTML5", "Styled Components", "Contenful"]}
          demourl="https://morningstarlondon.com/"
          githuburl="https://github.com/Steven-Ha-88/Eso-morningstar"
          target="_blank"
        />
        <Card
          image="https://imgur.com/HX7Y3PC.png"
          title="The Musician"
          info="A Web app made for a professional freelance musician with the purpose of promoting his services and showcasing past and current projects"
          tags={["JavaScript", "HTML", "CSS", "Bootstrap"]}
          demourl="https://kelvincarmichael.com/"
          githuburl="https://github.com/Steven-Ha-88/Kelvin-Carmichael"
          target="_blank"
        />
        <Card
          image="https://imgur.com/ZKULy75.png"
          title="A Social News App"
          info="A social news/forum web application where users can ask questions and have discussions on particular subjects. follows CRUD operations."
          tags={["JavaScript", "React", "Redux", "React-Router", "Firebase", "Firestore", "Cloud-Functions", "Styled Components", "Bootstrap4"]}
          demourl="https://ask-me-something-e4828.firebaseapp.com/"
          githuburl="https://github.com/Steven-Ha-88/Ask-Me-Something"
          target="_blank"
        />
      </section>
    </>
  );
};

export default Projects;
