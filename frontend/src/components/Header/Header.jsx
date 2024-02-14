import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { message } from 'antd';
import { useLanguage } from '../Languages/LanguageContext'; // useLanguage hook'unu içe aktarın
import "./Header.css";


const Header = () => {
    const [menubarState, setMenubarState] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const { language } = useLanguage(); // Dil bağlamından dil bilgisini al
    const navbarTexts = language.homepage.header; // Navbar metinlerine erişim

    const apiUrl = import.meta.env.VITE_API_BASE_URL;

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
            message.error(navbarTexts.errorMsg); // Hata mesajı göster
        }
    };


    const handleLogout = () => {
        handleNavItemClick();
        localStorage.removeItem('user');
        setIsLoggedIn(false);
        // Redirect or do additional cleanup here if needed
        navigate("/")
        message.success(navbarTexts.exitMessage)
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
                <Link to="/" onClick={handleNavItemClick}>{navbarTexts.navbar.home}</Link>
                <Link to="/gallery" onClick={handleNavItemClick}>{navbarTexts.navbar.gallery}</Link>
                <Link to="/contact" onClick={handleNavItemClick}>{navbarTexts.navbar.contact}</Link>
                <a href="#" onClick={handleNavToBookings}>{navbarTexts.navbar.mybookings}</a>
            </nav>
            <a href="#" id="menu-bars" className={`fas fa-bars ${menubarState ? "fa-times" : ""}`} onClick={(e) => {
                e.preventDefault();
                setMenubarState(!menubarState);
            }}></a>

        </header>
    );
};
    
export default Header;
