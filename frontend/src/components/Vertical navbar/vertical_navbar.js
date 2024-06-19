// src/VerticalNavbar.js
import React from 'react';
import './VerticalNavbar.css';
import { FaWhatsapp, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';

const VerticalNavbar = () => {
  return (
    <nav className="vertical-navbar">
      <ul>
        <li><a href="https://wa.link/mqch1c" target="blank"><FaWhatsapp size={30}  /></a></li>
        <li><a href="https://www.instagram.com/nexusinfo.in/" target="blank"><FaFacebook size={30} /></a></li>
        <li><a href="https://www.linkedin.com/company/nexus-software-pvt-ltd/" target="blank"><FaLinkedin size={30} /></a></li>
        <li><a href="https://www.instagram.com/nexusinfo.in/" target="blank"><FaInstagram size={30} /></a></li>
      </ul>
    </nav>
  );
}

export default VerticalNavbar;
