import React from 'react';
import "./Footer.css";

const Footer = () => {
  // Mevcut yılı al
  const year = new Date().getFullYear();

  return (
    <footer className='footer-copyRight'>
      Copyright © {year} | Powered by Yusuf BALYEMEZ
    </footer>
  );
}

export default Footer;
