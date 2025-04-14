import React from "react";
import "./ContactUs.css"; // link to your custom CSS
import { FaFacebookF, FaInstagram, FaGoogle, FaFacebook } from "react-icons/fa";

const ContactForm = () => {
  return (
    <div className="reach-container">
      {/* Side accents */}

      {/* Main Box */}
      <div className="reach-box">
        <div className="diamond"></div>
        <div className="left-accent"></div>

        <div className="right-accent">
          <div className="social-icons">
          <FaFacebook />
            <FaInstagram />
            <FaGoogle />
          </div>
        </div>

        {/* Left - Contact Form */}
        <div className="reach-form">
          <h2>Reach Us</h2>
          <p className="subtext">
            Feel Free To Contact Us At Anytime ,We Will Get Back As Soon As
            Possible
          </p>
          <form>
            <label>Name</label>
            <input type="text" />
            <label>Email</label>
            <input type="email" />
            <label>Message</label>
            <textarea rows="3" />
            <button type="submit">Send</button>
          </form>
        </div>

        {/* Right - Info Box */}
        <div className="reach-info">
          <div className="corner-box"></div>
          <h3>Info</h3>
          <div>
          <p>Info@Gmail.Com</p>
          <p>+91 2345187634</p>
          <p>Babitha</p>
          </div>
       
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
