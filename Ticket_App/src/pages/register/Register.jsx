import React, { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
  FaHandPointRight,
  FaRegEye,
  FaUser,
  FaWindowClose,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "../../components/spinner/Spinner";
import { RegisterUser } from "../../features/Auth/authActions";
import { reset } from "../../features/Auth/authSlice";
import "./register.css";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError, isLoading, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const [passwordShown, setPasswordShown] = useState(false);

  const [err, setErr] = useState("");
  const [regData, setRegData] = useState({
    username: "",
    email: "",
    password: "",
    confirmed_password: "",
  });
  const { username, email, password, confirmed_password } = regData;

  const handleChange = (e) => {
    let { name, value } = e.target;
    setRegData((prev) => ({ ...prev, [name]: value }));
    setErr("");
  };

  const registerUser = (e) => {
    e.preventDefault();
    if (
      password !== confirmed_password ||
      (password && confirmed_password == "")
    ) {
      setErr("Passwords do not match!");
    }
    dispatch(RegisterUser({ username, email, password }));
    // .unwrap()
    // .then(() => {
    //   navigate("/login");
    // })
    // .catch((error) => {
    //   setErr(error);
    // navigate('/register')
    // });
  };

  // useEffect(()=>{
  //   if(isError){
  //     setErr(message)
  //   }
  //   if(isSuccess){
  //     navigate('/login')
  //   }
  //   dispatch(reset())
  // }, [isSuccess, isError, message, navigate, dispatch])

  // if(isLoading){
  //   return <Spinner />
  // }

  const handleError = useCallback(() => {
    if (isError) {
      setErr(message);
    }
    if (isSuccess) {
      dispatch(reset());
      navigate("/login");
    }
  }, [isError, isSuccess, message, navigate, dispatch]);

  useEffect(() => {
    handleError();
  }, [handleError]);

  // if(isError){
  //   setErr(message)
  // }
  // if(isSuccess){
  //   dispatch(reset())
  // }

  const handleVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="register">
          <FaUser size={40} />
          <span>Register to HelpDesk Tickets</span>

          <form className="form" onSubmit={registerUser}>
            {err ? (
              <span
                style={{
                  color: "red",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  backgroundColor: "grey",
                  padding: "8px",
                  justifyContent: "center",
                  borderRadius: "5px",
                  fontSize: "12px",
                }}
              >
                <div>
                  <FaWindowClose />
                </div>{" "}
                <div>{err}</div>
              </span>
            ) : (
              ""
            )}
            <input
              type="text"
              name="username"
              placeholder="eg. johnDoe"
              value={username}
              onChange={handleChange}
              autoFocus
            />
            <input
              type="email"
              name="email"
              placeholder="...@gmail.com"
              value={email}
              onChange={handleChange}
            />
            <div className="toggle-password-visibility" id="toggle">
              <input
                type={passwordShown ? "text" : "password"}
                name="password"
                placeholder="Enter password"
                value={password}
                onChange={handleChange}
              />
              <FaRegEye
                className="toggle-password-visibility__toggle"
                onClick={handleVisibility}
              />
            </div>
            <div className="toggle-password-visibility" id="toggle">
              <input
                type={passwordShown ? "text" : "password"}
                name="confirmed_password"
                placeholder="Confirm password"
                value={confirmed_password}
                onChange={handleChange}
              />
              <FaRegEye
                className="toggle-password-visibility__toggle"
                onClick={handleVisibility}
              />
            </div>

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
      )}
    </>
  );
}
export default Register;
