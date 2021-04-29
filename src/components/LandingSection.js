import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const LandingSection = ({ setSectionShown }) => {
  const [ref, inView] = useInView({
    threshold: 1,
  });

  useEffect(() => {
    if (inView) {
      setSectionShown("landingSection");
    }
  }, [inView, setSectionShown]);

  return (
    <section className="landing-page home-sections">
      <div ref={ref} className="content">
        <h1>
          Hello, I'm <span className="emphasize-text">Anna.</span>
        </h1>
        <p>
          A <span className="emphasize-text"> Front-End Developer </span> with a
          deep passion for{" "}
          <span className="emphasize-text">UX | UI Design.</span>
        </p>
        <q>
          My mission is to break technological barriers by creating{" "}
          <span className="emphasize-text">intuitive</span>,{" "}
          <span className="emphasize-text">effortless</span>, and
          <span className="emphasize-text"> captivating </span>
          digital solutions, bringing joy and inclusiveness to all users.
        </q>
        <div className="button-container">
          <button className="contact-button button">Contact Now</button>
          <button className="resume-button button">Resume</button>
        </div>
      </div>
    </section>
  );
};

export default LandingSection;
