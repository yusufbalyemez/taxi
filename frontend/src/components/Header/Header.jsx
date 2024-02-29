import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../Languages/LanguageContext'; // useLanguage hook'unu içe aktarın
import { message } from 'antd';
import "./Header.css";

const Header = () => {
    const [menubarState, setMenubarState] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { language, switchLanguage } = useLanguage(); // Dil bağlamından dil bilgisini al
    const navbarTexts = language.homepage.header; // Navbar metinlerine erişim
    const apiUrl = import.meta.env.VITE_API_BASE_URL;
    const navigate = useNavigate();

    // Check for user in localStorage when component mounts
    useEffect(() => {
        const user = localStorage.getItem('user');
        setIsLoggedIn(!!user);
        // Read lang from localStorage and set it as the current language
        const lang = localStorage.getItem('lang') || 'ger'; // Default to 'ger' if not set
        switchLanguage(lang); // Set the language based on localStorage or default
    }, [switchLanguage]);

    const handleNavToBookings = () => {
        handleNavItemClick(); // Close menu
        const userId = localStorage.getItem('user_id'); // Get user_id from localStorage
        if (userId) {
            navigate(`/bookings/${userId}`); // Navigate to /bookings/user_id page
        } else {
            message.error(navbarTexts.errorMsg); // Show error message
        }
    };

    const handleLogout = () => {
        handleNavItemClick();
        localStorage.removeItem('user');
        setIsLoggedIn(false);
        navigate("/");
        message.success(navbarTexts.exitMessage);
    };

    const handleNavItemClick = () => {
        setMenubarState(false); // Close the menu
    };

    const handleLanguageChange = (e) => {
        const newLang = e.target.value;
        localStorage.setItem('lang', newLang); // Update lang in localStorage
        switchLanguage(newLang); // Update language in context
    };

    return (
        <>
            <header className="header">
                <a href="/" id="logo">
                    <img src="images/CabHUB.png" alt="" />
                </a>
                <nav className={`navbar ${menubarState ? "active" : ""}`}>
                    <Link to="/" onClick={handleNavItemClick}>{navbarTexts.navbar.home}</Link>
                    <Link to="/gallery" onClick={handleNavItemClick}>{navbarTexts.navbar.gallery}</Link>
                    <Link to="/contact" onClick={handleNavItemClick}>{navbarTexts.navbar.contact}</Link>
                    <a href="#" onClick={handleNavToBookings}>{navbarTexts.navbar.mybookings}</a>
                    <Link to="/policy" onClick={handleNavItemClick}>{navbarTexts.navbar.policy}</Link>
                </nav>
                <a href="#" id="menu-bars" className={`fas fa-bars ${menubarState ? "fa-times" : ""}`} onClick={(e) => {
                    e.preventDefault();
                    setMenubarState(!menubarState);
                }}></a>
            </header>
            <div className='language-switcher'>
                <select value={localStorage.getItem('lang')} onChange={handleLanguageChange}>
                    <option value='ger'>DE</option>
                    <option value='eng'>ENG</option>
                    <option value='tr'>TR</option>
                </select>
            </div>
        </>
    );
};

export default Header;
