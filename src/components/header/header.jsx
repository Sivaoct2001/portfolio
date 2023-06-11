import React from "react";
import "./header.css";
import ham from "../../assets/icons/ham_svg.svg";
import cancel from "../../assets/icons/cancel_svg.svg";
import { Link } from "react-router-dom";
const Links = () => {
  const [sidebarOn, setsidebarOn] = React.useState(false);
  const hamburger = (
    <>
      {!sidebarOn ? (
        <img
          src={ham}
          alt="hamimage"
          onClick={(e) => {
            e.preventDefault();
            setsidebarOn(true);
          }}
        />
      ) : (
        <img
          src={cancel}
          alt="hamimage"
          onClick={(e) => {
            e.preventDefault();
            setsidebarOn(true);
          }}
        />
      )}
    </>
  );
  const Sidebar = (
    <div className="sidebar">
      <div className="sidebar_content">
        <Link to="/">Overview</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/certification">Certification</Link>
      </div>
    </div>
  );
  return (
    <div className="portfolio_links">
      <h3>MY PORTFOLIO</h3>
      <Link to="/"> Overview</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/certification">Certification</Link>
      {hamburger}
      {sidebarOn && Sidebar}
      <div className="button_1">
        <button>Hire me</button>
      </div>
    </div>
  );
};
export default Links;
