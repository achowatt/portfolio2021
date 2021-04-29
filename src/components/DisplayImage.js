import React, { useState, useEffect } from "react";
import designandcode from "../images/designandcode.svg";
import anna from "../images/anna.png";
import contact from "../images/contact.svg";
import skills from "../images/skills.svg";

const DisplayImage = ({ sectionShown }) => {
  const [image, setImage] = useState("");
  const [transition, setTransition] = useState("");

  useEffect(() => {
    if (sectionShown === "landingSection") {
      setTransition("transition");
      setTimeout(function () {
        setImage(designandcode);
      }, 500);
    } else if (sectionShown === "aboutSection") {
      setTransition("transition");
      setTimeout(function () {
        setImage(anna);
      }, 500);
    } else if (sectionShown === "skillsSection") {
      setTransition("transition");
      setTimeout(function () {
        setImage(skills);
      }, 500);
    } else if (sectionShown === "contactSection") {
      setTransition("transition");
      setTimeout(function () {
        setImage(contact);
      }, 500);
    } else {
      setTransition("transition");
      setTimeout(function () {
        setImage(designandcode);
      }, 500);
    }
  }, [sectionShown]);

  setTimeout(function () {
    setTransition("");
  }, 500);

  return (
    <div
      className={"display-image circle " + transition}
      style={{ backgroundImage: `url(${image})` }}
    ></div>
  );
};

export default DisplayImage;
