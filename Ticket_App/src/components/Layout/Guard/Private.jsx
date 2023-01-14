import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuthStatus } from "../../../Hooks/authStatus";

function Private() {
  const { loggedIn, checkingStatus } = useAuthStatus();
  const navigate = useNavigate();

  return loggedIn ? <Outlet /> : navigate("/login");
}

export default Private;
