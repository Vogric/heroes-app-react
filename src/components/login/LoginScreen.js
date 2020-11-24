import React, { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";

export const LoginScreen = ({ history }) => {
  const { dispatch } = useContext(AuthContext);

  const handleLogin = () => {
    const lastPath = localStorage.getItem("lastPath");

    dispatch({
      type: types.login,
      payload: {
        name: "Braian",
      },
    });

    history.replace(lastPath);
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
