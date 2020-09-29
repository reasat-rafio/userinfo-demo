import React from "react";
import { useAuth } from "./UseAuth";

const Login = () => {
  const auth = useAuth();

  const handleSignIn = () => {
    auth.signInWithGoogle().then((res) => {
      window.location.pathname = "/home";
    });
  };

  const handleSignOut = () => {
    auth.signOutWithGoogle().then(() => {
      window.location.pathname = "/login";
    });
  };

  return (
    <div style={{ background: "white" }}>
      <h2>Login</h2>
      {auth.user ? (
        <button onClick={handleSignOut} className="btn bg-info">
          SignOut
        </button>
      ) : (
        <button onClick={handleSignIn} className="btn bg-info">
          SignIn
        </button>
      )}

      {auth.user && <p>{auth.user.name}</p>}
    </div>
  );
};

export default Login;
