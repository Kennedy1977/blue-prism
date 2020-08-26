import React from "react";
import { render } from "@testing-library/react";
import { App } from "./App";

describe("Header", () => {
  test("renders Header component", () => {
    render(<App />);
  });
});
