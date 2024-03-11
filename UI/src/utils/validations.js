import * as Yup from "yup";
export const email = Yup.string()
  .email("Invalid Email")
  .required("Email is required");
export const username = Yup.string()
  .min(3, "Username must be at least 3 characters")
  .required("Username is required");
export const password = Yup.string()
  .min(8, "Password must be at least 8 characters")
  .required("Password is required");
export const confirmPassword = Yup.string()
  .oneOf([Yup.ref("password"), null], "Passwords must match")
  .required("Confirm Password is required");
