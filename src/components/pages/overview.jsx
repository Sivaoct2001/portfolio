import React from "react";
import Profilecontent from "../overview_herocontent/hero_content";
import Projects from "../projects/project";

const Overview = () => {
  return (
    <>
      <div className="profilebody_main">
        <Profilecontent />
      </div>
      <Projects />
    </>
  );
};
export default Overview;
