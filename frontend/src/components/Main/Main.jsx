import React from "react"
import "./Main.css"
const Main = () => {
    return (
        
        <div className="main-container">
            <div className="background-text">
                <h2>book a <span>cab now</span></h2>
            </div>
            <header className="header">
                <a href="" id="logo">
                    <img src="images/CabHUB.png" alt=""  />
                </a>
                <nav className="navbar">
                    <a href="index.php">Home</a>
                    <a href="#">Gallery</a>
                    <a href="#">Blog</a>
                    <a href="#">About</a>
                    <a href="contact.php">Contact</a>
                </nav>
                <a href="#" id="menu-bars" className="fas fa-bars"></a>
            </header>
            <div className="taxi-image">
                <img src="images/carmain.png" alt=""/>
            </div>
        </div>
    )
}

export default Main