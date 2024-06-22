import { Alert, Button, TextField } from "@mui/material";
import { Form, Formik, Field } from "formik";
import * as Yup from "yup";
import {
  email,
  username,
  password,
  confirmPassword,
} from "../../utils/validations";
import api from "../../utils/api";
import { CREATE_USER } from "../../utils/requestUrls";
import { useState } from "react";
import { userSignupSuccessful } from "../../utils/constants";

function Register() {
  const [showAlert, setShowAlert] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const initialValues = {
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object().shape({
    email,
    username,
    password,
    confirmPassword,
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    const { email, username, password } = values;
    setSubmitting(true);
    try {
      const response = await api.post(CREATE_USER, {
        email,
        username,
        password,
      });
      setIsSuccess(true);
    } catch (e) {
      setIsSuccess(false);
      setErrorMessage(e.message);
    }
    setShowAlert(true);
    setSubmitting(false);
    resetForm();
  };

  return (
    <>
      {showAlert && (
        <Alert severity={isSuccess ? "success" : "error"}>
          {isSuccess ? userSignupSuccessful : errorMessage}
        </Alert>
      )}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, resetForm }) => (
          <Form className="flex justify-center items-center flex-col gap-3 w-full">
            <Field name="email" className="w-full">
              {({ field, meta }) => (
                <TextField
                  {...field}
                  className="w-full"
                  name="email"
                  label="Email"
                  error={meta.touched && !!meta.error}
                  helperText={meta.touched && meta.error}
                  variant="outlined"
                  type="email"
                />
              )}
            </Field>
            <Field name="username" className="w-full">
              {({ field, meta }) => (
                <TextField
                  {...field}
                  className="w-full"
                  name="username"
                  label="Username"
                  variant="outlined"
                  error={meta.touched && !!meta.error}
                  helperText={meta.touched && meta.error}
                />
              )}
            </Field>
            <Field name="password" className="w-full">
              {({ field, meta }) => (
                <TextField
                  {...field}
                  className="w-full"
                  name="password"
                  label="Password"
                  variant="outlined"
                  type="password"
                  error={meta.touched && !!meta.error}
                  helperText={meta.touched && meta.error}
                />
              )}
            </Field>
            <Field name="confirmPassword" className="w-full">
              {({ field, meta }) => (
                <TextField
                  {...field}
                  className="w-full"
                  name="confirmPassword"
                  label="Confirm Password"
                  variant="outlined"
                  type="password"
                  error={meta.touched && !!meta.error}
                  helperText={meta.touched && meta.error}
                />
              )}
            </Field>
            <div className="flex w-full justify-between">
              <Button onClick={resetForm} type="reset">
                Reset
              </Button>
              <Button type="submit" variant="outlined" disabled={isSubmitting}>
                Sign Up
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default Register;
