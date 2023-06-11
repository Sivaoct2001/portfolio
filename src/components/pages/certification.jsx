import React from "react";
import Content from "../certifi_herocontent/view_hero";
import Degree from "../education/education";
import Skills from "../skills/skills";
const Certify = () => {
  return (
    <div className="certification_hero">
      <Content />
      <Degree />
      <Skills />
    </div>
  );
};
export default Certify;
