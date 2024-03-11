import { memo, useState } from "react";
import Login from "../../components/login/Login";
import Register from "../../components/register/Register";
import { Button } from "@mui/material";
import Logo from "../../components/logo/Logo.js";
function LoginWrapper() {
  const [showLogin, setShowLogin] = useState(true);
  function changeView() {
    setShowLogin(!showLogin);
  }
  return (
    <div className="w-full flex flex-col items-center">
      <div className="max-w-md flex w-full flex-col items-center gap-4 p-4">
        <Logo></Logo>
        {showLogin ? <Login></Login> : <Register></Register>}
        <div className="flex w-full justify-end">
          <Button onClick={changeView}>
            {showLogin ? "New User?" : "Existing User?"}
          </Button>
        </div>
      </div>
    </div>
  );
}
export default LoginWrapper;
