import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Form, Formik, Field } from "formik";
import * as Yup from "yup";
import { email, password } from "../../utils/validations";
function Login() {
  const initialValues = { email: "", password: "" };
  const validationSchema = Yup.object().shape({ email, password });
  function handleSubmit(values, helpers) {
    helpers.setSubmitting(false);
  }
  return (
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
                error={!!meta.touched && !!meta.error}
                helperText={meta.touched && meta.error}
                variant="outlined"
                type="email"
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
                error={!!meta.touched && !!meta.error}
                helperText={meta.touched && meta.error}
              />
            )}
          </Field>
          <div className="flex w-full justify-between">
            <Button onClick={resetForm} type="reset">
              Reset
            </Button>
            <Button type="submit" variant="outlined" disabled={isSubmitting}>
              Login
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
export default Login;
