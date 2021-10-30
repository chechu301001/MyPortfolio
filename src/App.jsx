import React from "react";
import Home from "./components/Home";
import { Route, Switch, Redirect } from "react-router-dom";
import MusicPortfolio from "./components/musicportfolio/MusicPortfolio";
import EduPortfolio from "./components/eduportfolio/EduPortfolio";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
          <Route exact path="/musicportfolio" component={MusicPortfolio} />
          <Route exact path="/eduportfolio" component={EduPortfolio} />
        <Redirect to="/" /> 
      </Switch>
    </>
  );
};

export default App;
