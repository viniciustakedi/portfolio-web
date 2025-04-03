"use client";
import React from "react";
import FirstInformations from "./first-informations";
import Jobs from "./jobs";

const Work: React.FC = () => {
  return (
    <section id="#" className="work__section padding__global pb-20">
      <FirstInformations />
      <Jobs />
    </section>
  );
};

export default Work;
