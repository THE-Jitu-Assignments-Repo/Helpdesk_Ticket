import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

function Login() {
  return (
    <div className="login">
      <span>Login to HelpDesk Tickets</span>

      <form className="form">
        <input type="email" name="" placeholder="...@gmail.com" />
        <input type="password" placeholder="Enter password" />
        <div className="form_button">
          <button className="btn">Sign in</button>
        </div>
        <span className="reg_link">
          <Link to="/register">Already have an Account!</Link>
        </span>
      </form>
    </div>
  );
}

export default Login;
