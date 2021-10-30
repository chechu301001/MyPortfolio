import React from "react";
import "./Home.css";
import MenuBookOutlinedIcon from "@material-ui/icons/MenuBookOutlined";
import RadioIcon from "@material-ui/icons/Radio";
import { NavLink } from "react-router-dom";
import Loading from "./loading/Loading";

const Home = () => {
  return (
    <>
      <Loading />
      <div className="home-screen">
        <div className="home-container">
          <div className="home-header">
            <h1>Choose where you want to go</h1>
          </div>
          <div className="home-choose">
            <div className="home-container-left">
              <div className="home-container-layer"></div>
              <div className="home-content">
                <MenuBookOutlinedIcon fontSize="large" />
                <h2>Edu. Portfolio</h2>
                <p>
                  Check out development and technology based skills, projects,
                  achievements and further details.
                </p>
                <NavLink
                  className="btn btn-secondary btn-sm home-btn"
                  to="/eduportfolio"
                  role="button">
                  View
                </NavLink>
              </div>
            </div>
            <div className="home-line"></div>
            <div className="home-container-right">
              <div className="home-container-layer"></div>
              <div className="home-content">
                <RadioIcon fontSize="large" />
                <h2>Music Portfolio</h2>
                <p>
                  Check out my music production, singing, videos, projects, achievements
                  and details for collaboration.
                </p>
                <NavLink
                  className="btn btn-secondary btn-sm home-btn"
                  to="/musicportfolio"
                  role="button">
                  View
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
