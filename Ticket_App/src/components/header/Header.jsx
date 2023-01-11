import React from "react";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <div className="header_tag">
        <Link to="/">
          <h1>HelpDesk</h1>
        </Link>
      </div>
      <ul className="links">
        <li>
          <a>
            <Link to="login">   
              {" "}
              <FaSignInAlt />
              Login
            </Link>
          </a>
        </li>
        <li>
          <a>
            <Link to="register">
              <FaUser /> Register
            </Link>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
