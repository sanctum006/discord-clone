import React from "react";
import { auth, provider } from "./../../firebase";

function Login() {
  const signIN = () => {
    auth.signInWithPopup(provider).catch((err) => alert(err.message));
  };

  return (
    <div>
      <button onClick={signIN}>Login</button>
    </div>
  );
}

export default Login;
