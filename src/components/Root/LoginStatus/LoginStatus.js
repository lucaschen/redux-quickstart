import React from "react";
import { useSelector } from "react-redux";

const LoginStatus = () => {
  const isLoggedIn = useSelector(store => store.session.isLoggedIn);

  return <strong>{isLoggedIn ? "LOGGED IN" : "NOT LOGGED IN"}</strong>;
};

export default LoginStatus;
