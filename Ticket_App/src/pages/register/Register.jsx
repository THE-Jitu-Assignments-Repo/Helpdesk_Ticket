import React from "react";
import { useState } from "react";
import { FaHandPointRight, FaUser, FaWindowClose } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./register.css";

function Register() {
  const [err, setErr]=useState('')
  const [regData, setRegData] = useState({
    username: "",
    email: "",
    password: "",
    confirmed_password: "",
  });
  const { username, email, password, confirmed_password } = regData;


  const handleChange = (e) => {
    let {name, value} = e.target;
    setRegData((prev) => ({ ...prev, [name]: value }));
    setErr('')
  };

  const registerUser=(e)=>{
    e.preventDefault()
    if(password !== confirmed_password){
      setErr('Passwords do not match!')
    }
  }

  return (
    <div className="register">
      <FaUser size={40} />
      <span>Register to HelpDesk Tickets</span>

      <form className="form" onSubmit={registerUser}>
        {err? <span style={{color:'red', display:'flex', alignItems:'center', gap:'4px'}}><FaWindowClose /> {err}</span>: ''}
        <input
          type="text"
          name="username"
          placeholder="eg. johnDoe"
          value={username}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="...@gmail.com"
          value={email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={password}
          onChange={handleChange}
        />
        <input
          type="password"
          name="confirmed_password"
          placeholder="Confirm password"
          value={confirmed_password}
          onChange={handleChange}
        />

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
