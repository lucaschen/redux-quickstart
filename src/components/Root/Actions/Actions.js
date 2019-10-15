import React from "react";
import { useDispatch } from "react-redux";

import { loginUser, logoutUser } from "#store/ducks/session";

const Actions = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(loginUser())}>Login</button>
      <button onClick={() => dispatch(logoutUser())}>Logout</button>
    </div>
  );
};

export default Actions;
