import TextField from '@mui/material/TextField';
function Login() {
  return (
    <>
      <TextField className="w-full" label="Email" variant="outlined" />
      <TextField className="w-full" label="Password" variant="outlined" />
    </>
  );
}
export default Login;