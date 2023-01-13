import React, { useEffect } from "react";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../../features/Auth/authActions";
import { reset } from "../../features/Auth/authSlice";
import "./header.css";
import decode from 'jwt-decode'

function Header() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    dispatch(reset());
    navigate("/");
  };
useEffect(() => {

    if (user) {
      const decodedJwt = decode(user.Token);

      if (decodedJwt.exp * 1000 < Date.now()) {
        dispatch(logoutUser())
      }
    }
  }, [dispatch]);

  return (
    <div className="header">
      <div className="header_tag">
        <Link to="/">
          <h1>HelpDesk</h1>
        </Link>
      </div>
      <ul className="links">
        {user ? (
          <li>
            <button className="btn" onClick={handleLogout}>
              <FaSignOutAlt />
              logout
            </button>
          </li>
        ) : (
          <>
            <li>
              <Link to="login">
                {" "}
                <FaSignInAlt />
                Login
              </Link>
            </li>
            <li>
              <Link to="register">
                <FaUser /> Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}

export default Header;
