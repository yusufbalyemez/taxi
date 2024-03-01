import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, NavLink, useNavigate } from 'react-router-dom';
import { useLanguage } from '../Languages/LanguageContext';
import { message } from 'antd';
import "./Header.css";

const Header = () => {
    const [menubarState, setMenubarState] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { language, switchLanguage } = useLanguage();
    const navbarTexts = language.homepage.header;
    const apiUrl = import.meta.env.VITE_API_BASE_URL;
    const navigate = useNavigate();

    useEffect(() => {
        const user = localStorage.getItem('user');
        setIsLoggedIn(!!user);
        const lang = localStorage.getItem('lang') || 'ger';
        switchLanguage(lang);
    }, [switchLanguage]);

    const userId = localStorage.getItem('user_id');

    const handleLogout = () => {
        localStorage.removeItem('user');
        setIsLoggedIn(false);
        navigate("/");
        message.success(navbarTexts.exitMessage);
    };

    const handleNavItemClick = () => {
        setMenubarState(false);
    };

    const handleLanguageChange = (e) => {
        const newLang = e.target.value;
        localStorage.setItem('lang', newLang);
        switchLanguage(newLang);
    };

    return (
        <>
            <header className="header">
                <a href="/" id="logo">
                    <img src="images/CabHUB.png" alt="" />
                </a>
                <nav className={`navbar ${menubarState ? "active" : ""}`}>
                    <NavLink to="/" onClick={handleNavItemClick} className={({ isActive }) => isActive ? "active" : ""}>{navbarTexts.navbar.home}</NavLink>
                    <NavLink to={`/bookings/${userId}`} onClick={handleNavItemClick} className={({ isActive }) => isActive ? "active" : ""}>{navbarTexts.navbar.mybookings}</NavLink>
                    <NavLink to="/gallery" onClick={handleNavItemClick} className={({ isActive }) => isActive ? "active" : ""}>{navbarTexts.navbar.gallery}</NavLink>
                    <NavLink to="/contact" onClick={handleNavItemClick} className={({ isActive }) => isActive ? "active" : ""}>{navbarTexts.navbar.contact}</NavLink>
                    <NavLink to="/about-us" onClick={handleNavItemClick} className={({ isActive }) => isActive ? "active" : ""}>{navbarTexts.navbar.aboutUs}</NavLink>
                    <NavLink to="/policy" onClick={handleNavItemClick} className={({ isActive }) => isActive ? "active" : ""}>{navbarTexts.navbar.policy}</NavLink>
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
