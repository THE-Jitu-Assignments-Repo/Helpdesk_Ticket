import React from "react";
import { useState } from "react";
import { FaHandPointLeft, FaHandPointRight, FaUser, FaUserAlt, FaUserLock } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../features/Auth/authActions";
import "./login.css";

function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [logData, setLogData] = useState({email:'', password:''})
  const {email, password} = logData

  const handleChange=(e)=>{
    const {name, value} = e.target
    setLogData((prev)=>({
      ...prev,
      [name]: value
    }))
  }

  const submitLogin=(e)=>{
    e.preventDefault()
    dispatch(loginUser(logData))
    navigate('/')
  }

  return (
    <div className="login">
      <FaUserLock size={50}/>
      <span>Login to HelpDesk Tickets</span>

      <form className="form" onSubmit={submitLogin}>
        <input type="email" name="email" placeholder="...@gmail.com" value={email} onChange={handleChange}/>
        <input type="password"  name="password" placeholder="Enter password" value={password} onChange={handleChange}/>
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
