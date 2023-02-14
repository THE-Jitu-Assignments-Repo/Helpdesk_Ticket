import React, { useEffect } from "react";
import { useState } from "react";
import {
  FaHandPointLeft,
  FaHandPointRight,
  FaRegEye,
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
import Alert from '@mui/material/Alert';


function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );
  const [passwordShown, setPasswordShown] = useState(false);
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
    setErr("");
    setPasswordShown(false)
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

  const handleVisibility = () => {
    setPasswordShown(!passwordShown);

  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="login">
      <FaUserLock size={50} />
      <span>Login to HelpDesk Tickets</span>

      <form className="form" onSubmit={submitLogin}>
        {err ? (
            <Alert severity="error">{err}</Alert> 
        ) : (
          ""
        )}
    <label htmlFor="email">User Email</label>
        <input
          type="email"
          name="email"
          placeholder="...@gmail.com"
          value={email}
          onChange={handleChange}
          autoFocus
        />
        <label htmlFor="password">Password</label>
        <div className="toggle-password-visibility" id="toggle">
          <input
            type={passwordShown ? "text" : "password"}
            name="password"
            placeholder="Enter password"
            value={password}
            onChange={handleChange}
            className="toggle-password-visibility__input"
          />
          <FaRegEye
            className="toggle-password-visibility__toggle"
            onClick={handleVisibility}
          />
        </div>
        <div className="form_button">
          <button className="btn">Sign in</button>
        </div>
        <span className="reg_link2">
           Don't have an Account?
          <Link className="reg_link" to="/register">
            {/* <FaHandPointRight className="handme" /> */}
           Register
          </Link>
        </span>
      </form>
    </div>
  );
}

export default Login;
