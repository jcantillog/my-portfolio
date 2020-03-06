import React from "react";
import Particles from "react-particles-js";
import paramsConfig from "./paramsConfig";

/* Styles */
if (typeof window === "object") {
  require("./style.scss");
}

const ParticlesContainer = () => {
  const particlesParams = paramsConfig();
  return (
    <div className="particles-container">
      <Particles
        params={particlesParams[getRandomInt(particlesParams.length)]}
      />
    </div>
  );

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
};

export default ParticlesContainer;
