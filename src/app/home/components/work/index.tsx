"use client";

import React from "react";
import FirstInformations from "./first-informations";
import Jobs from "./jobs";

const Work: React.FC = () => {
  return (
    <section id="work" className="work__section padding__global">
      <FirstInformations />
      <Jobs />
    </section>
  );
};

export default Work;
