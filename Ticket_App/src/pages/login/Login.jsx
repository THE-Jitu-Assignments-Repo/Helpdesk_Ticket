import React from "react";
import { FaHandPointLeft, FaHandPointRight, FaUser, FaUserAlt, FaUserLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./login.css";

function Login() {
  return (
    <div className="login">
      <FaUserLock size={50}/>
      <span>Login to HelpDesk Tickets</span>

      <form className="form">
        <input type="email" name="" placeholder="...@gmail.com" />
        <input type="password" placeholder="Enter password" />
        <div className="form_button">
          <button className="btn">Sign in</button>
        </div>
        <span className="reg_link">
          <Link to="/register"><FaHandPointRight className="handme"/>Don't have an Account!</Link>
        </span>
      </form>
    </div>
  );
}

export default Login;
