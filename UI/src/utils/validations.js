import * as Yup from "yup";
import {
  confirmPasswordRequired,
  emailRequired,
  invalidEmail,
  passwordMinCharacters,
  passwordRequired,
  passwordsMatch,
  usernameMinCharacters,
  usernameRequired,
} from "./constants";
export const email = Yup.string().email(invalidEmail).required(emailRequired);
export const username = Yup.string()
  .min(3, usernameMinCharacters)
  .required(usernameRequired);
export const password = Yup.string()
  .min(8, passwordMinCharacters)
  .required(passwordRequired);
export const confirmPassword = Yup.string()
  .oneOf([Yup.ref("password"), null], passwordsMatch)
  .required(confirmPasswordRequired);
