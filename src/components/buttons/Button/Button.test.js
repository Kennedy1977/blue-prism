import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Button } from "./Button";

afterEach(cleanup);

test("That it Renders", () => {
  const data = [{ label: "Test", css: "btn btn-primary" }];
  render(<Button data={data} />);
});
