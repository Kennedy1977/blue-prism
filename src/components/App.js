import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Panel } from "../components/content/Panel/Panel";
import { TrackPath } from "./helpers/TrackPath";

export const App = () => {
  return (
    <Router>
      <TrackPath />
      <Header />
      <main id="main" role="main">
        <Switch>
          <Route path="/" component={Panel} />
          <Route path="/stages:id" component={Panel} />
        </Switch>
      </main>
      <footer></footer>
    </Router>
  );
};
