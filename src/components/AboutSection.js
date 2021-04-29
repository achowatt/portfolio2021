import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const AboutSection = ({ setSectionShown }) => {
  const [ref, inView] = useInView({
    /* Optional options */
    threshold: 1,
  });

  useEffect(() => {
    if (inView) {
      console.log("hello from about");
      setSectionShown("aboutSection");
    }
  }, [inView]);

  return (
    <section className="about home-sections">
      <div ref={ref} className="content">
        <h1>About me</h1>
        <p>
          My name is Anna Chowattanakul. I am currently working on several
          projects at Codeboxx as a front-end developer. I love writing clean
          code and building accessible, beautiful and responsive web/mobile
          applications with great performance. In my spare time, I love learning
          about user experience in order to broaden my ideas of the user's
          needs. When I am not at my computer, I am either playing jazz piano,
          taking photos of nature, or making delicious Thai food. I'm always
          open to meeting new people, so don't hesitate to reach out!
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
