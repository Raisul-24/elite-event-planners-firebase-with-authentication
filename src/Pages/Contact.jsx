// import React from 'react';

import NavbarTop from "../Components/Header/NavbarTop";

const Contact = () => {
   return (
      <div>
         <NavbarTop></NavbarTop>
         <div className="contact-form text-center py-10 text-black px-5">
            <h1>Contact Us</h1>
            <p>We would love to hear from you. Please fill out the form below:</p>
 

        
        <div className="contact-info">
            <h2>Contact Information</h2>
            <p>If you prefer to contact us through other means, here are our contact details:</p>
            
            <ul>
                <li>Email: <a href="mailto:contact@example.com">contact@example.com</a></li>
                <li>Phone: <a href="tel:+1234567890">+1 (234) 567-890</a></li>
                <li>Address: 123 Main Street, City, Country</li>
            </ul>
        </div>
         </div>
      </div>
   );
};

export default Contact;