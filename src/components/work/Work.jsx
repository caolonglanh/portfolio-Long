import React, { useEffect, useState } from "react";
import Works from "./Works";
import "./work.css";
import { projectsData } from "./Data";

const Work = () => {
  return (
    <section className="work section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most resent works</span>
      <Works />
    </section>
  );
};

export default Work;
