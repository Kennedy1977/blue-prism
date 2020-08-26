import React from "react";
import { Route, Switch } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Panel } from "../components/content/Panel";
import { useUpdatePath } from "./helpers/useUpdatePath";

export const App = () => {
  useUpdatePath(); // passive hook

  return (
    <>
      <Header />
      <main id="main" role="main">
        <Switch>
          <Route path="/" component={Panel} />
          <Route path="/stages:id" component={Panel} />
        </Switch>
      </main>
      <footer></footer>
    </>
  );
};
