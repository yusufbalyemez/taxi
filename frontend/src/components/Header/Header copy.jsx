import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import "./Header.css"

const Header = () => {
    const [menubarState, setMenubarState] = useState(false)

    return (
        <header className="header">
            <a href="" id="logo">
                <img src="images/CabHUB.png" alt="" />
            </a>
            <nav className={`navbar ${menubarState ? "active" : ""}`}>
                <Link to="/">Home</Link>
                <a href="#">Gallery</a>
                {/* <a href="#">Blog</a> */}
                {/* <a href="#">About</a> */}
                <Link to="/contact">Contact</Link>
                <Link to="/auth">Register</Link>
                <a href="/admin">Login</a>
            </nav>

            <a href="#" id="menu-bars" className={`fas fa-bars ${menubarState ? "fa-times" : ""}`} onClick={(e) => {
                e.preventDefault()
                setMenubarState(!menubarState)
            }}></a>
        </header>
    )
}

export default Header