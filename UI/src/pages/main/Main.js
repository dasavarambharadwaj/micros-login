import { useState } from "react";
import Login from "../../components/login/Login";
import Register from "../../components/register/Register";
import Logo from "../../components/logo/Logo";
import Button from '@mui/material/Button';

function Main() {
  const [showLogin, setShowLogin] = useState(true);
  function changeView() {
    setShowLogin(!showLogin);
  }
  return (
    <div className="w-full flex justify-center pt-5">
      <div className="flex justify-center items-center flex-col gap-3 p-4 w-full max-w-md">
        <Logo className="text-4xl mb-14"></Logo>
        <h2 className='text-2xl text-gray-900 dark:text-white'>{showLogin ? "Sign in" : "Create an Account"}</h2>
        {showLogin ? (
          <Login></Login>
        ) : (
          <Register></Register>
        )}
        {
          showLogin && (
            <div className="w-full flex justify-end">
              <Button variant="text">Forgot Password?</Button>
            </div>
          )
        }
        <div className="flex w-full justify-between gap-4 mt-2">
          <Button variant="text" onClick={changeView}>{showLogin ? "Create Account": "Existing User?"}</Button>
          <Button variant="contained">{showLogin ? "Login" : "Register"}</Button>
        </div>
      </div>
    </div>
  );
}
export default Main;
