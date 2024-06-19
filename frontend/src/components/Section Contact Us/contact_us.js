import React from 'react';
import './contact_us.css';
import { PiHandWavingFill } from "react-icons/pi";
import { FaWhatsapp, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';

const ContactUs = () => {


    return (
        <div id="contactUs" className="section contact-us" >
            <h1 id="contact-us-content-1">Let's Have a Chat <PiHandWavingFill /></h1>

            <div className="cards-container">
                <a href="https://wa.link/mqch1c" target="blank">
                    <div className="card Whatsapp">
                        <h3>Whatsapp</h3>
                        <div className='icon-class'>
                            <FaWhatsapp size={100}/>
                        </div>
                    </div>
                </a>
                <a href="https://www.linkedin.com/company/nexus-software-pvt-ltd/" target="blank">
                    <div className="card LinkedIn">
                        <h3>LinkedIn</h3>
                        <div className='icon-class'>
                            <FaLinkedin size={100}/>
                        </div>
                    </div>
                </a>
                <a href="https://www.instagram.com/nexusinfo.in/" target="blank">
                    <div className="card Instagram">
                        <h3>Instagram</h3>
                        <div className='icon-class'>
                            <FaInstagram size={100} />
                        </div>
                    </div>
                </a>
                <a href="https://www.instagram.com/nexusinfo.in/" target="blank">
                    <div className="card Facebook">
                        <h3>Facebook</h3>
                        <div className='icon-class'>
                            <FaFacebook size={100} />
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default ContactUs;
