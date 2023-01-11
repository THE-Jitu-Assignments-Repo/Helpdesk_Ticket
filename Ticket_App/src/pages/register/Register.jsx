import React from "react";
import { useState } from "react";
import { FaHandPointRight, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./register.css";

function Register() {
  const [regData, setRegData] = useState({username: '', email: '', password: '', confirmed_password: ''})


  return (
    <div className="register">
      <FaUser size={40}/>
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
