import React from "react";
import { render, fireEvent } from "@testing-library/react";
import LoginWrapper from "./LoginWrapper";

test("toggle between login and register components", () => {
  const { getByText } = render(<LoginWrapper />);

  // Initial render, should display login component
  expect(getByText("Login")).toBeInTheDocument();

  // Click the button to toggle view
  fireEvent.click(getByText("New User?"));

  // After clicking, it should display register component
  expect(getByText("Sign Up")).toBeInTheDocument();

  // Click the button again to toggle back to login
  fireEvent.click(getByText("Existing User?"));

  // After clicking again, it should display login component
  expect(getByText("Login")).toBeInTheDocument();
});
