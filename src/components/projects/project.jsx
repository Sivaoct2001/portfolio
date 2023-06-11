import React from "react";
import protimg from "../../assets/images/profile.jpg";
import network from "../../assets/images/network.jpg";
import "./project.css";
const Projects = () => {
  return (
    <div className="project_cards">
      <h1>PROJECTS</h1>
      <div className="portfolio_card">
        <div className="portfolio_img">
          <img src={protimg} alt="" />
          <a href="">Portfolio</a>
        </div>
        <div className="portfolio_about">
          Overall, a portfolio is a powerful tool that enables individuals to
          present their best work, demonstrate their abilities, and make a
          compelling case for their expertise and suitability for specific
          opportunities.
        </div>
      </div>
      <div className="card_socialmedia">
        <div className="socialmedia_img">
          <img src={network} alt="" />
          <a href="">Socialnetwork</a>
        </div>
        <div className="socialnetwork_about">
          A social network is a digital platform or online community that
          enables individuals to connect, communicate, and interact with each
          other. It provides a virtual space where users can create profiles,
          share information, and engage in various forms of social interactions.
        </div>
      </div>
    </div>
  );
};
export default Projects;
