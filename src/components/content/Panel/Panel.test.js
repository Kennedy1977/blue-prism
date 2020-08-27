import React from "react";
import { render, cleanup, getByTestId } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { GlobalProvider } from "../../../services/context/GlobalState";
import { Panel } from "./Panel";
import { Header } from "../../Header/Header";

afterEach(cleanup);

test("That it Renders", () => {
  render(
    <GlobalProvider>
      <Header />
      <Panel />
    </GlobalProvider>
  );
});
