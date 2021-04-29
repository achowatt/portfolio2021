import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const SkillsSection = ({ setSectionShown }) => {
  const [ref, inView] = useInView({
    threshold: 0.51,
  });

  useEffect(() => {
    if (inView) {
      setSectionShown("skillsSection");
    }
  }, [inView, setSectionShown]);
  return (
    <section ref={ref} className="skills home-sections">
      <div className="content">
        <h1>Skills</h1>
        <ul>
          <li>HTML5, CSS3, SASS, Javascript, ES6 </li>
          <li>Frameworks: React, Vue3</li>
          <li>Ecommerce: Salesforce Commerce Cloud</li>
          <li>Version Control: Git, Github, Bitbucket</li>
          <li>Design Tools: Photoshop, Illustrator, and Figma</li>
        </ul>
        <blockquote>
          <p>
            "Skills can be taught. Craftmanship can be learned. But the best
            results come from those who love what they do." —
            <cite> Anna Chowattanakul (2021)</cite>
          </p>
        </blockquote>
      </div>
    </section>
  );
};

export default SkillsSection;
