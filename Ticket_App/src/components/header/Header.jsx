import React from 'react'
import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import './header.css'

function Header() {
  return (
    <div className='header'>
        <div className='header_tag'>
            {/* <Link to='/'>HelpDesk</Link> */}
            <h1>HelpDesk</h1>
        </div>
        <ul className='links'>
            <li>
                <span> <a href="#"><FaSignInAlt />Login</a></span>
            </li>
            <li>
                <span><a href="#"><FaUser /> Register</a></span>
            </li>
        </ul>
    </div>
  )
}

export default Header