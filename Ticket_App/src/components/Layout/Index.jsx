import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
// import { useAuthStatus } from "../../Hooks/authStatus";
import Header from "../header/Header";

function Index() {
  // const { loggedIn, checkingStatus } = useAuthStatus();
  // const navigate = useNavigate();
  return (
    <div>
      <Header />
      <Outlet />
      {/* {loggedIn ? <Outlet /> : navigate("/login")} */}
    </div>
  );
}

export default Index;
