import "./about.css";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";


const About = () => {
  //SCROLL FADE
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="about-screen" id="about">
      <div data-aos="fade-up" className="about-container">
        <div className="about-container-left"></div>
        <div className="about-container-right">
          <div className="about-content">
            <h1>About Me</h1>
            <h2>
              My name is Shreyas B Rao and I'm 20 years old. I am currently
              doing my Computer Science Engineering in Jain University-SET,
              Bangalore. I have been learning full stack, DevOps, and Cloud
              Technologies since the past few years.
            </h2>

            <h2>
              My goal is to collaborate with different people thereby improving
              my own skills and also creating something new.
            </h2>
            <h3>
              "Do the best you can until you know better. Then when you know
              better, do better." - Maya Angelou
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
