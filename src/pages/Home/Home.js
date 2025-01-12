import React from "react";
import AboutMe from "./AboutMe";
import Publication from "./Publication";
import ContactMe from "./ContactMe";
import HeroSection from "./HeroSection";
import Skills from "../Skills/Skills";
const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <Skills />
      <Publication />
      <ContactMe />
    </>
  );
};

export default Home;
