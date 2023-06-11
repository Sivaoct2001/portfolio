import React from "react";
import "./education.css";
import college from "../../assets/images/my_college.jpeg";
import graduate from "../../assets/images/my_graduate.jpeg";
const Degree = () => {
  return (
    <div className="hero">
      <h1>Education</h1>
      <div className="hero_content">
        <div className="hero_education">
          <div className="bachelor">
            <div className="bachelor_clg">
              <img src={college} alt="" />
              <h3>Pgp college of arts and science</h3>
            </div>
            <div className="bachelor_dgr">
              <img src={graduate} alt="" />
              <h3>Bachelor of Science in Biotechnology(2019-2022)</h3>
            </div>
            <div className="bechelor_level">
              <div className="bachelor_bar">
                <div className="bachelor_range">
                  <p>80%</p>
                </div>
              </div>
            </div>
          </div>
          <div className="school">
            <div className="school_name">
              <img src={college} alt="" />
              <h3>Muthur Government Hr Sec School</h3>
            </div>
            <div className="school_dgr">
              <img src={graduate} alt="" />
              <h3>Higher Secondary School</h3>
            </div>
            <div className="school_level">
              <div className="school_bar">
                <div className="school_range">
                  <p>80%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Degree;
