import React, { useRef } from 'react';
import HorizontalNavbar from './components/Horizontal navbar/horizontal_navbar';
import VerticalNavbar from './components/Vertical navbar/vertical_navbar';
import './App.css';
import Home from './components/Section Home/home';
import { AboutUs1, AboutUs2, AboutUs3 } from './components/Section About Us/about_us';
import Products from './components/Section Products/products';
import ContactUs from './components/Section Contact Us/contact_us';
import UserInfo from './components/Section User info/user_info';
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const App = () => {
  const parallaxRef = useRef(null);

  return (
    <div className="app-container">
      <HorizontalNavbar parallaxRef={parallaxRef} />
      <VerticalNavbar />
      <div className="app-content">
        <Parallax ref={parallaxRef} pages={7.1} config={{ tension: 150, friction: 20 }}>
          <ParallaxLayer offset={0} speed={0.5}>
            <Home />
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={1} sticky={{ start: 1, end: 3 }}>
            <AboutUs1 />
          </ParallaxLayer>

          <ParallaxLayer offset={2} speed={0.5} sticky={{ start: 2, end: 3 }}>
            <AboutUs2 />
          </ParallaxLayer>

          <ParallaxLayer offset={3} speed={0.05} style={{
            height: "1vh",
            // width: "50vw"
          }}>
            <AboutUs3 />
          </ParallaxLayer>

          <ParallaxLayer offset={4} speed={0.05}>
            <Products />
          </ParallaxLayer>

          <ParallaxLayer offset={5} speed={0.5}>
            <ContactUs />
          </ParallaxLayer>

          <ParallaxLayer offset={6} speed={0.5}>
            <UserInfo />
          </ParallaxLayer>
        </Parallax>
      </div>
    </div>
  );
}

export default App;
