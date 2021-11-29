import React from "react";
import { render, screen } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  test("renders App component", () => {
    render(<App />);

    // So every time you are asserting that an element isn't there, use queryBy. Otherwise default to getBy.

    expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();
  });
  test("check if Searches exist", () => {
    render(<App />);

    expect(screen.getByRole("textbox")).toBeInTheDocument();
    // So every time you are asserting that an element isn't there, use queryBy. Otherwise default to getBy.
  });
});
