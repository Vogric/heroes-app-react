import React from "react";

export const LoginScreen = ({ history }) => {
  const handleLogin = () => {
    // history.push("/marvel");
    history.replace("/");
  };

  return (
    <div className="container mt-5">
      <h1>LoginScreen WIP</h1>
      <hr />
      <button className="btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};
