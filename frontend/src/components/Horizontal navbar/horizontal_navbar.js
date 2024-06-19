// HorizontalNavbar.js
import React from 'react';
import './HorizontalNavbar.css';

const HorizontalNavbar = ({ parallaxRef }) => {

  const handleSmoothScroll = (event, page, offset) => {
    event.preventDefault();
    if (parallaxRef && parallaxRef.current) {
      parallaxRef.current.scrollTo(page+offset);
    }
  };

  return (
    <nav className="horizontal-navbar">
      <ul>
        <li>
          <a href="#home" onClick={(e) => handleSmoothScroll(e, 0, 0)}>Home</a>
        </li>
        <li>
          <a href="#aboutUs" onClick={(e) => handleSmoothScroll(e, 1, 0.1)}>About Us</a>
        </li>
        <li>
          <a href="#products" onClick={(e) => handleSmoothScroll(e, 4, 0.13)}>Products</a>
        </li>
        <li>
          <a href="#contactUs" onClick={(e) => handleSmoothScroll(e, 5, 0.1)}>Contact Us</a>
        </li>
        <li>
          <a href="#userInfo" onClick={(e) => handleSmoothScroll(e, 6, 0.08)}>User Info</a>
        </li>
      </ul>
    </nav>
  );
};

export default HorizontalNavbar;
