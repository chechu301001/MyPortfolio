import React from "react";
import "./loading.css";

const Loading = () => {
  return (
    <>
      <div id="loader">
        <div id="wrapperload">
          <div className="elem">
            <h3>Full Stack Developer</h3>
          </div>
          <div className="elem">
            <h3>Musician/Singer</h3>
          </div>
          <div className="elem">
            <h3>Welcome to my Portfolio.</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;
