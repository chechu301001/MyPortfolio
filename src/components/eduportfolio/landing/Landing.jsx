import React from "react";
import "./landing.css";
import bars from '../images/bars.png';

const Landing = () => {
  return (
    <div className="landing-screen">
      <img className="landing-bars" src={bars} alt="bars" />
      <div className="edu-hero">

        <div className="edu-hero-left">
          <div className="edu-content">
            <h2>Hey there, I'm</h2>
            <h1>Shreyas B Rao</h1>
            <p>Welcome to my education portfolio page.
              Here you can get to know more about 
              my skills, projects, collaborations, 
              and more. Looking forward to collbaborating with you!
            </p>
          </div>
        </div>

        <div className="edu-hero-right">
          <div className="edu-content">
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
