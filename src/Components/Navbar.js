import React from 'react'
import { NavLink } from 'react-router-dom'

import "../App.css"

function Nav() {
    return (
        <nav className="navbar">
            <NavLink exact activeClassName="active" to='/'> Home </NavLink>
            <NavLink activeClassName="active" to='/students'>Students</NavLink>
            <NavLink activeClassName="active" to='/contact'>Contact US</NavLink>
        </nav>
    );
}

export default Nav;