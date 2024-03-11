import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import Login from "./Login";
import { act } from "react-dom/test-utils";

test("renders Login component without crashing", () => {
  render(<Login />);
});
describe("Login Component", () => {
  it("clears input fields when reset button is clicked", async () => {
    const { getByLabelText, getByText } = render(<Login />);

    // Fill data into input fields
    await act(async () => {
      fireEvent.change(getByLabelText("Email"), {
        target: { value: "test@example.com" },
      });
      fireEvent.change(getByLabelText("Password"), {
        target: { value: "password123" },
      });
    });

    // Click reset button
    await act(async () => {
      fireEvent.click(getByText("Reset"));
    });

    // Check if input fields are cleared
    expect(getByLabelText("Email")).toHaveValue("");
    expect(getByLabelText("Password")).toHaveValue("");
  });
});

describe("Login Component Validations", () => {
  it("displays error message when email is invalid", async () => {
    const { getByLabelText, getByText } = render(<Login />);

    // Fill in an invalid email
    await act(async () => {
      fireEvent.change(getByLabelText("Email"), {
        target: { value: "invalid-email" },
      });
    });
    fireEvent.blur(getByLabelText("Email"));

    // Wait for validation message to appear
    await waitFor(() => {
      expect(getByText("Invalid Email")).toBeInTheDocument();
    });
  });

  it("displays error message when password is less than 8 characters", async () => {
    const { getByLabelText, getByText } = render(<Login />);

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
});
describe("Login Component Submit", () => {
  it("triggers handleSubmit function in Login component", async () => {
    const { getByLabelText, getByText } = render(<Login />);

    // Fill data into input fields
    await act(async () => {
      fireEvent.change(getByLabelText("Email"), {
        target: { value: "test@example.com" },
      });
      fireEvent.change(getByLabelText("Password"), {
        target: { value: "password123" },
      });
    });
    // Click reset button
    await act(async () => {
      fireEvent.click(getByText("Login"));
    });
  });
});
