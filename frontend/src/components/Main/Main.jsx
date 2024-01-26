import React, { useState } from "react"
import "./Main.css"
const Main = () => {
    const [menubarState, setMenubarState] = useState(false)
    return (
        <React.StrictMode>
            <header className="header">
                <a href="" id="logo">
                    <img src="images/CabHUB.png" alt="" />
                </a>
                <nav className={`navbar ${menubarState ? "active" : ""}`}>
                    <a href="#">Home</a>
                    <a href="#">Gallery</a>
                    <a href="#">Blog</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                </nav>
                <a href="#" id="menu-bars" className={`fas fa-bars ${menubarState ? "fa-times" : ""}`} onClick={(e) => {
                    e.preventDefault()
                    setMenubarState(!menubarState)
                }}></a>
            </header>
            <div className="main-container">
                <div className="background-text">
                    <h2>book a <span>cab now</span></h2>
                </div>

                <div className="taxi-image">
                    <img src="images/carmain.png" alt="" />
                </div>
            </div>
        </React.StrictMode>
    )
}

export default Main