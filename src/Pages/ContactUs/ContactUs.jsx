import React, { useState } from "react";
import "./ContactUs.css"; // link to your custom CSS
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const ContactForm = () => {
  const handleOpenTab = (link) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
    sourcepage: "Contact Us",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbxXgFjRfloUaeWB49YcK1iBraoxMuObtJrnu6EHALeQAxyuEaMFf70OMwbLWHQpV4Ru/exec";

    try {
      const formPayload = new FormData();
      for (let key in formData) {
        formPayload.append(key, formData[key]);
      }

      console.log(formPayload, "formPayloadformPayload");

      const response = await fetch(scriptURL, {
        method: "POST",
        body: formPayload, // No 'Content-Type' header for FormData
      });
      console.log(response, "resssssss");

      if (response.ok) {
        alert("Form submitted successfully!");
        console.log("submited succes", response);
        setFormData({
          name: "",
          email: "",
          phoneNumber: "",
          message: "",
        });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error submitting the form. Please check your connection.");
    }
  };

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
            <FaLinkedin
              onClick={() =>
                handleOpenTab(
                  "https://www.linkedin.com/company/sapience-minds/"
                )
              }
            />
          </div>
        </div>

        {/* Left - Contact Form */}
        <div className="reach-form">
          <h2>Reach Us</h2>
          <p className="subtext">
            Feel Free To Contact Us At Anytime ,We Will Get Back As Soon As
            Possible
          </p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              required
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <label htmlFor="mail">Email</label>
            <input
              type="email"
              required
              id="mail"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <label htmlFor="mobile">Phone Number</label>
            <input
              type="tel"
              required
              id="mobile"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            <label htmlFor="message">Message</label>
            <textarea
              rows="3"
              required
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
            <button type="submit">Send</button>
          </form>
        </div>

        {/* Right - Info Box */}
        <div className="reach-info">
          <div className="corner-box"></div>
          <h3>Info</h3>
          <div>
            <p>reachus@sapienceminds.com</p>
            <p>+91 9036062378</p>
            <p>Bengaluru, Karnataka, India</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
