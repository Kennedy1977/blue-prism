import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Header } from "./Header";

afterEach(cleanup);

test("That it Renders", () => {
  render(<Header />);
});

test("That there is a title", () => {
  const { getByText } = render(<Header />);
  expect(getByText("Process Name")).toBeInTheDocument();
});

test("That the navigation exists", () => {
  const { getByRole } = render(<Header />);
  expect(getByRole("button")).toBeInTheDocument();
});

test("That the network activity exists", () => {
  const { getByRole } = render(<Header />);
  expect(getByRole("alert")).toBeInTheDocument();
});
