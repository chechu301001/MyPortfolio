import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./projects.css";
import Card from "./Card";
import { FaMoneyBillAlt } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { CgNotes } from "react-icons/cg";
// import { IconName } from "react-icons/fa";
// import trial from "./Images/trial1.svg";

const Projects = () => {
  //SCROLL FADE
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="projects-screen" id="projects">
      <div className="projects-title">Projects</div>
      <div className="projects-container">
        <div data-aos="fade-up" className="projects-cards">
          <div className="row gy-3 my-3">
            <div className="col-sm-6 col-md-3">
              <Card
                img={<FaMoneyBillAlt size={90} />}
                title="Dockerized Expense Tracker"
                desc="This is a React project which uses simple javascript to calculate your total balance. It runs in a Docker container."
                link="https://github.com/chechu301001/Expense-Tracker/tree/master"
              />
            </div>
            <div className="col-sm-6 col-md-3">
              <Card
                img={<FaVideo size={90} />}
                title="Video Call App"
                desc="This is a React project which uses socket.io to implement video calling. Consists of both frontend, backend, React Hooks and so on."
                link="https://github.com/chechu301001/VideoCall"
              />
            </div>
            <div className="col-sm-6 col-md-3">
              <Card
                img={<CgProfile size={90} />}
                title="Advanced Authentication"
                desc="This is a MERN Stack project which has Register, Login, Change password and verification through Email."
                link="https://github.com/chechu301001/AdvancedAuth/tree/master"
              />
            </div>
            <div className="col-sm-6 col-md-3">
              <Card
                img={<CgNotes size={90} />}
                title="Advanced Authentication"
                desc="This is a simple React project which helps you make small Notes to remember. It focuses on Front end."
                link="https://github.com/chechu301001/NoteMakingApp/tree/master"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
