import React from "react";
import photo from "../../assets/images/My_img.jpeg";
import phone from "../../assets/images/phone.png";
import email from "../../assets/images/email.jfif";
import location from "../../assets/images/location.jfif";
import "./hero_content.css";
const Profilecontent = () => {
  return (
    <div className="procontent_hero">
      <div className="about">
        <img src={photo} alt="" />
        <h1>SIVANANDHAM S</h1>
        <h3>Frontend Developer</h3>
        <div className="phone">
          <img src={phone} alt="" />
          <p>7339503069</p>
        </div>
        <div className="mail">
          <img src={email} alt="" />
          <p>sivanandham217@gmail.com</p>
        </div>
        <div className="location">
          <img src={location} alt="" />
          <p>Chennai</p>
        </div>
      </div>
      <div className="content">
        <p>
          Highly skilled in front-end developer with a passion for creating
          user-friendly and visually appealing websites. prificient in HTML,
          CSS, and javascript with a storng understanding of responsive desin
          principle. Excellent problem-solving and communication skills with
          ability to collaborate effectively with cross function teams.
        </p>
      </div>
    </div>
  );
};
export default Profilecontent;
