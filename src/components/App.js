import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Panel } from "../components/content/Panel";
import { UpdatePath } from "./helpers/UpdatePath";

export const App = () => {
  return (
    <Router>
      <UpdatePath />
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
