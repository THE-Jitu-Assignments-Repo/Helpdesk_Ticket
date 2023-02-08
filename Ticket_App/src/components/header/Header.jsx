import React, { useEffect } from "react";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../../features/Auth/authActions";
import { reset } from "../../features/Auth/authSlice";
import "./header.css";
import decode from 'jwt-decode'
import Avatar from "../avatar/Avatar";

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
        console.log("token expired");
      }
    }
  }, [dispatch]);

  return (
    <div className="header">
      <div className="header_tag">
        <Link to="/" style={{display: 'flex', gap:'5'}}>
          <h1>HelpDesk</h1>
          <img src="https://imgs.search.brave.com/tye20r-9LIO1ZobUfddbN4RPid8CQh3up28MfeqaRqw/rs:fit:512:512:1/g:ce/aHR0cHM6Ly9pY29u/LWxpYnJhcnkuY29t/L2ltYWdlcy9oZWxw/ZGVzay1pY29uLXBu/Zy9oZWxwZGVzay1p/Y29uLXBuZy0yMS5q/cGc" alt="" width={40} height={40} />
        </Link>
      </div>
      <ul className="links">
        {user && <Avatar email={user.email} />}
        {user ? (
          <li>
            <button className="btn" onClick={handleLogout} id="logout--btn">
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
