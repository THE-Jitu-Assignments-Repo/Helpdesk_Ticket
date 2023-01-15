import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useAuthStatus } from "../../../Hooks/authStatus";

function Private( {children}) {
  // const { loggedIn, checkingStatus } = useAuthStatus();
  // const navigate = useNavigate();

  // return loggedIn ? <Outlet /> : navigate("/login");
   const { user } = useSelector((state) => state.auth)

  if (user) return children

  return <Navigate to='/login' />
}

export default Private;
