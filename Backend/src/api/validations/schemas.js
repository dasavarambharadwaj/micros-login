import * as yup from "yup";

export const loginSchema = yup.object({
  body: yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(8).max(255).required(),
  }),
});

export const addUserSchema = yup.object({
  body: yup.object({
    email: yup.string().email().required(),
    username: yup.string().min(3).max(30).required(),
    password: yup.string().min(8).max(255).required(),
  }),
});

export const tokenValidationSchema = yup.object({
  body: yup.object({
    token: yup.string().required(),
  }),
});
