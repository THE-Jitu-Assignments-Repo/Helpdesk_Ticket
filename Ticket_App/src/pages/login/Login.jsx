import React, { useEffect } from "react";
import { useState } from "react";
import {
  FaHandPointLeft,
  FaHandPointRight,
  FaUser,
  FaUserAlt,
  FaUserLock,
  FaWindowClose,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "../../components/spinner/Spinner";
import { loginUser } from "../../features/Auth/authActions";
import { reset } from "../../features/Auth/authSlice";
import "./login.css";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );
  const [err, setErr] = useState("");
  const [logData, setLogData] = useState({ email: "", password: "" });
  const { email, password } = logData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // dispatch(reset())
    setErr('')
  };

  const submitLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser(logData));
  };

  useEffect(() => {
    if (isError) {
      setErr(message);
    }
    if (isSuccess || user) {
      navigate("/");
    }
    dispatch(reset());
  }, [isSuccess, user, isError, message, navigate, dispatch]);

  if(isLoading){
    return <Spinner />
  }
  return (
    <div className="login">
      <FaUserLock size={50} />
      <span>Login to HelpDesk Tickets</span>

      <form className="form" onSubmit={submitLogin}>
        {err ? (
          <span
            style={{
              color: "red",
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            <FaWindowClose /> {err}
          </span>
        ) : (
          ""
        )}

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
        <div className="form_button">
          <button className="btn">Sign in</button>
        </div>
        <span className="reg_link">
          <Link to="/register">
            <FaHandPointRight className="handme" />
            Don't have an Account!
          </Link>
        </span>
      </form>
    </div>
  );
}

export default Login;
