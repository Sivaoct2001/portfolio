import React from "react";
import "./skills.css";
const Skills = () => {
  return (
    <div className="skills_main">
      <h1>Skills</h1>
      <div className="knowledge">
        <div className="html">
          <h3>HTML</h3>
          <div className="html_bar">
            <div className="html_range">90%</div>
          </div>
        </div>
        <div className="css">
          <h3>CSS</h3>
          <div className="css_bar">
            <div className="css_range">86%</div>
          </div>
        </div>
        <div className="react">
          <h3>REACT JS</h3>
          <div className="react_bar">
            <div className="react_range">65%</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
