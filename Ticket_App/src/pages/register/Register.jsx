import React from "react";
import { FaHandPointRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./register.css";

function Register() {
  return (
    <div className="register">
      <span>Register to HelpDesk Tickets</span>

      <form className="form">
        <input type="text" name="username" placeholder="eg. johnDoe" />
        <input type="email" name="" placeholder="...@gmail.com" />
        <input type="password" placeholder="Enter password" />
        <input type="password" placeholder="Confirm password" />

        <div className="form_button">
          <button className="btn">Register</button>
        </div>
        <span className="reg_link">
          <Link to="/login">
            <FaHandPointRight className="handme" />
            Already have an Account!
          </Link>
        </span>
      </form>
    </div>
  );
}

export default Register;
