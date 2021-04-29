import React, { useState } from "react";
import LandingSection from "../components/LandingSection";
import ContactSection from "../components/ContactSection";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import HeaderNav from "../components/HeaderNav";
import Footer from "../components/Footer";
import DisplayImage from "../components/DisplayImage";

const HomePage = ({ sectionShown, setSectionShown }) => {
  return (
    <div>
      <HeaderNav />
      <main>
        <DisplayImage sectionShown={sectionShown} />
        <LandingSection setSectionShown={setSectionShown} />
        <AboutSection setSectionShown={setSectionShown} />
        <SkillsSection setSectionShown={setSectionShown} />
        <ContactSection setSectionShown={setSectionShown} />
        <Footer />
      </main>
    </div>
  );
};

export default HomePage;
