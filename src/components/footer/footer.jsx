import React from "react";
import facebook from "../../assets/images/facebook.png";
import instagram from "../../assets/images/instagram.png";
import linkedin from "../../assets/images/linkedin.png";
import mail from "../../assets/icons/mail_8.png";
import skype from "../../assets/images/skype.png";
import twitter from "../../assets/images/twitter.png";
import whatsapp from "../../assets/images/whatsapp.png";
import "./footer.css";
const Footer = () => {
  return (
    <div className="portfolio_footer">
      <div className="footer_img">
        <img src={facebook} alt="" />
        <img src={instagram} alt="" />
        <img src={linkedin} alt="" />
        <img src={mail} alt="" />
        <img src={skype} alt="" />
        <img src={twitter} alt="" />
        <img src={whatsapp} alt="" />
      </div>
      <div className="main_links">
        <div className="footer_link">
          <a href="">Overview</a>
          <a href="">About me</a>
        </div>
        <div className="main_footerlink">
          <a href="">Certification</a>
          <a href="">Portfolio</a>
        </div>
      </div>
      <p>Email:sivanandham217@gmail.com</p>
    </div>
  );
};
export default Footer;
