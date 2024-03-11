import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders App component without crashing", () => {
  render(<App />);
});

describe("Theme change", () => {
  it("triggers theme change function", async () => {
    const { getByTestId } = render(<App />);
    // Click reset button
    fireEvent.click(getByTestId("theme-switch"));
  });
});
