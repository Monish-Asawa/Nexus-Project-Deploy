// src/VerticalNavbar.js
import React from 'react';
import './VerticalNavbar.css';
import { FaWhatsapp, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';

const VerticalNavbar = () => {
  return (
    <nav className="vertical-navbar">
      <ul>
        <li><a href="#home"><FaWhatsapp size={30}  /></a></li>
        <li><a href="#about"><FaFacebook size={30} /></a></li>
        <li><a href="#contact"><FaLinkedin size={30} /></a></li>
        <li><a href="#contact"><FaInstagram size={30} /></a></li>
      </ul>
    </nav>
  );
}

export default VerticalNavbar;
