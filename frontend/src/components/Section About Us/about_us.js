import React from 'react';
import './about_us.css';


export const AboutUs1 = () => {
  return (
      <div id="aboutUs" className="section About-us">
          <div className='parallax-layer-1'>
            <h1 id="About-us-content-1">About Us</h1>
          </div>
      </div>
  );
}; 

export const AboutUs2 = () => {
  return (
      <div id="aboutUs" className="section About-us">
          <div className='parallax-layer-1'>
            {/* <h1>Hey this is page 1</h1> x*/}
            <p className="About-us-content-2-1">
              Welcome to Techy Software, where innovation meets excellence in software solutions. Our mission is to revolutionize the tech landscape with cutting-edge web development and AI-driven applications. We pride ourselves on delivering top-tier products that not only meet but exceed client expectations.
            </p>

            <p className='About-us-content-2-2'>
            Innovation, Creativity, and Excellence—these are the pillars of Techy Software. Our commitment to high-quality design and development ensures that every project we undertake is a testament to our passion for technology. Discover the future of software with us.
            </p>


            <p className='About-us-content-2-3'>
            Transforming ideas into reality, Techy Software stands at the forefront of digital innovation. Our portfolio showcases our proficiency in creating visually stunning and functionally robust websites. Trust us to bring your vision to life with precision and flair.
            </p>

          </div>
      </div>
  );
}; 

export const AboutUs3 = () => {
  return (
      <div id="aboutUs" className="section About-us About-us-3">
          <div className='parallax-layer-1'>

            <p className='About-us-content-3-1'>
            At Techy Software, we believe in the power of technology to transform businesses. Our team of experts is dedicated to crafting intuitive and responsive web designs that enhance user experiences across all devices. Join us on our journey to create seamless and impactful digital solutions.
            </p>

            <img src='/assets/new_rocket.png' className='rocket' alt='not found' /> 

            <p className='About-us-content-3-2'>
            "Your Vision, Our Innovation"—at Techy Software, we are driven by a relentless pursuit of excellence. Our comprehensive range of services is designed to meet the diverse needs of our clients, ensuring their digital success in an ever-evolving technological landscape.
            </p>
          </div>
      </div>
  );
}; 


