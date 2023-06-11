import React from "react";
import Review from "../portfolio_reviews/port_reviews";
import Myproject from "../my_projects/port_project";
import About from "../portfolio_hero/hero";
const Myportfolio = () => {
  return (
    <div>
      <About />
      <div className="reviews">
        <Review />
      </div>
      <Myproject />
    </div>
  );
};
export default Myportfolio;
