import TextField from '@mui/material/TextField';
function Register() {
  return (
    <>
      <TextField className="w-full" label="Email" variant="outlined" />
      <TextField className="w-full" label="Username" variant="outlined" />
      <TextField className="w-full" label="Password" variant="outlined" />
      <TextField className="w-full" label="Re-enter Password" variant="outlined" />
    </>
  );
}
export default Register;