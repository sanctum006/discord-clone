import React from "react";
import { Button } from "@material-ui/core";
import { auth, provider } from "./../../firebase";
import "./Login.css";
import Logo from "./logo.png";
function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img src={Logo} alt="discord-logo" />
      </div>

      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
}

export default Login;
