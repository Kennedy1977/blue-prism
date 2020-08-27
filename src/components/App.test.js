import React from "react";
import { render, cleanup, getByTestId } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalProvider } from "../services/context/GlobalState";
import { Header } from "../components/Header/Header";
import { Panel } from "../components/content/Panel/Panel";
import { TrackPath } from "./helpers/TrackPath";

afterEach(cleanup);

test("That it Renders", () => {
  render(
    <GlobalProvider>
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
    </GlobalProvider>
  );
});
