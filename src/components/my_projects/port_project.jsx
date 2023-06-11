import React from "react";
import socialimg from "../../assets/images/social.img.jpg";
import portimg from "../../assets/images/port.img.jpg";
import "./port_project.css";
const Myproject = () => {
  return (
    <div className="main_portproject">
      <h1>My projects</h1>
      <div className="projects_name">
        <div className="media_lander">
          <a href="">
            <img src={socialimg} alt="" />
          </a>
          <h2>Socialnetwork</h2>
        </div>
        <div className="media_header">
          <a href="">
            <img src={portimg} alt="" />
          </a>
          <h2>Portfolio</h2>
        </div>
      </div>
    </div>
  );
};
export default Myproject;
