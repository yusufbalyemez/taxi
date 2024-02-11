import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { message } from 'antd';
import "./Header.css";


const Header = () => {
    const [menubarState, setMenubarState] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const navigate = useNavigate();

    // Check for user in localStorage when component mounts
    useEffect(() => {
        const user = localStorage.getItem('user');
        setIsLoggedIn(!!user);
    }, []);

    const handleNavToBookings = () => {
        handleNavItemClick(); // Menüyü kapat
        const userId = localStorage.getItem('user_id'); // user_id'yi localStorage'dan al
        if (userId) {
            navigate(`/bookings/${userId}`); // Kullanıcıyı /bookings/user_id sayfasına yönlendir
        } else {
            message.error("Kullanıcı bilgisi bulunamadı."); // Hata mesajı göster
        }
    };


    const handleLogout = () => {
        handleNavItemClick();
        localStorage.removeItem('user');
        setIsLoggedIn(false);
        // Redirect or do additional cleanup here if needed
        navigate("/")
        message.success("Çıkış yapıldı.")
    };

    const handleNavItemClick = () => {
        setMenubarState(false); // Set menubarState to false to close the menu
    };


    return (
        <header className="header">
            <a href="" id="logo">
                <img src="images/CabHUB.png" alt="" />
            </a>
            <nav className={`navbar ${menubarState ? "active" : ""}`}>
                <Link to="/" onClick={handleNavItemClick}>Home</Link>
                <Link to="/gallery" onClick={handleNavItemClick}>Gallery</Link>
                <Link to="/contact" onClick={handleNavItemClick}>Contact</Link>
                <a href="#" onClick={handleNavToBookings}>My Bookings</a>
                {/* Conditionally render links based on login status */}
                {/* {!isLoggedIn ? (
                    <>
                        <Link to="/contact" onClick={handleNavItemClick}>Contact</Link>
                        <a href="#" onClick={handleNavToBookings}>My Bookings</a>
                        <Link to="/auth" onClick={handleNavItemClick}>Login</Link>
                    </>
                ) : (
                    <>
                        <a onClick={handleLogout}>Logout</a>
                    </>
                )} */}
            </nav>

            <a href="#" id="menu-bars" className={`fas fa-bars ${menubarState ? "fa-times" : ""}`} onClick={(e) => {
                e.preventDefault();
                setMenubarState(!menubarState);
            }}></a>
        </header>
    );
};

export default Header;
