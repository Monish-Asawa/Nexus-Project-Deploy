import React from 'react';
import { Link } from 'react-scroll';
import './HorizontalNavbar.css';
// import { getOffset } from '../Scroll Navigation/scroll_navigation';

const HorizontalNavbar = () => {
  return (
    <nav className="horizontal-navbar">
      <ul>
        <li>
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="aboutUs"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="products"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="contactUs"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Contact Us
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="userInfo"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            User Info
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default HorizontalNavbar;
