import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import Register from "./Register";
import { act } from "react-dom/test-utils";

test("renders Register component without crashing", () => {
  render(<Register />);
});

describe("Register Component", () => {
  it("clears input fields when reset button is clicked", async () => {
    const { getByLabelText, getByText } = render(<Register />);
    await act(async () => {
      fireEvent.change(getByLabelText("Email"), {
        target: { value: "test@example.com" },
      });
      fireEvent.change(getByLabelText("Username"), {
        target: { value: "testuser" },
      });
      fireEvent.change(getByLabelText("Password"), {
        target: { value: "password123" },
      });
      fireEvent.change(getByLabelText("Confirm Password"), {
        target: { value: "password123" },
      });
    });
    // Fill data into input fields

    // Click reset button
    fireEvent.click(getByText("Reset"));

    // Check if input fields are cleared
    expect(getByLabelText("Email")).toHaveValue("");
    expect(getByLabelText("Username")).toHaveValue("");
    expect(getByLabelText("Password")).toHaveValue("");
    expect(getByLabelText("Confirm Password")).toHaveValue("");
  });
});

describe("Register Component Validations", () => {
  it("displays error message when email is invalid", async () => {
    const { getByLabelText, getByText } = render(<Register />);

    // Fill in an invalid email
    await act(async () => {
      fireEvent.change(getByLabelText("Email"), {
        target: { value: "invalid-email" },
      });
      fireEvent.blur(getByLabelText("Email"));
    });

    // Wait for validation message to appear
    await waitFor(() => {
      expect(getByText("Invalid Email")).toBeInTheDocument();
    });
  });

  it("displays error message when username is less than 3 characters", async () => {
    const { getByLabelText, getByText } = render(<Register />);

    // Fill in a username less than 3 characters
    await act(async () => {
      fireEvent.change(getByLabelText("Username"), { target: { value: "us" } });
    });

    fireEvent.blur(getByLabelText("Username"));

    // Wait for validation message to appear
    await waitFor(() => {
      expect(
        getByText("Username must be at least 3 characters")
      ).toBeInTheDocument();
    });
  });

  it("displays error message when password is less than 8 characters", async () => {
    const { getByLabelText, getByText } = render(<Register />);

    // Fill in a password less than 8 characters
    await act(async () => {
      fireEvent.change(getByLabelText("Password"), {
        target: { value: "short" },
      });
    });

    fireEvent.blur(getByLabelText("Password"));

    // Wait for validation message to appear
    await waitFor(() => {
      expect(
        getByText("Password must be at least 8 characters")
      ).toBeInTheDocument();
    });
  });

  it("displays error message when confirm password does not match password", async () => {
    const { getByLabelText, getByText } = render(<Register />);

    // Fill in password and confirm password with different values
    await act(async () => {
      fireEvent.change(getByLabelText("Password"), {
        target: { value: "password123" },
      });
      fireEvent.change(getByLabelText("Confirm Password"), {
        target: { value: "password456" },
      });
    });

    fireEvent.blur(getByLabelText("Confirm Password"));

    // Wait for validation message to appear
    await waitFor(() => {
      expect(getByText("Passwords must match")).toBeInTheDocument();
    });
  });
});

describe("Register Component Signup", () => {
  it("triggers handleSubmit function in Register component", async () => {
    const { getByLabelText, getByText } = render(<Register />);

    // Fill data into input fields
    await act(async () => {
      fireEvent.change(getByLabelText("Email"), {
        target: { value: "test@example.com" },
      });
      fireEvent.change(getByLabelText("Username"), {
        target: { value: "testuser" },
      });
      fireEvent.change(getByLabelText("Password"), {
        target: { value: "password123" },
      });
      fireEvent.change(getByLabelText("Confirm Password"), {
        target: { value: "password123" },
      });
    });
    // Click reset button
    await act(async () => {
      fireEvent.click(getByText("Sign Up"));
    });
  });
});
