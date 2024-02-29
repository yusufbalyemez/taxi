import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, useNavigate } from 'react-router-dom';
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

    const userId = localStorage.getItem('user_id'); // Kullanıcı ID'sini burada al

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
                    <Link to="/" onClick={handleNavItemClick}>{navbarTexts.navbar.home}</Link>
                    <Link to={`/bookings/${userId}`} onClick={handleNavItemClick}>{navbarTexts.navbar.mybookings}</Link>
                    <Link to="/gallery" onClick={handleNavItemClick}>{navbarTexts.navbar.gallery}</Link>
                    <Link to="/contact" onClick={handleNavItemClick}>{navbarTexts.navbar.contact}</Link>
                    <Link to="/about-us" onClick={handleNavItemClick}>About Us</Link>
                    {/* Link bileşenini kullanarak ve userId'yi URL'e ekleyerek güncelleme */}
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
