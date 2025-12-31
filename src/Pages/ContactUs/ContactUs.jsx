import React, { useEffect, useState } from "react";
import "./ContactUs.css"; // link to your custom CSS
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ContactForm = () => {
  const handleOpenTab = (link) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    PhoneNumber: "",
    Message: "",
    Sourcepage: "Contact Us",
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      "https://script.google.com/macros/s/AKfycbzvzG1K-8O3LD328fyCXs5oyEkWVA12zplggBg-jMLHZjk9tFow9AYw_EhVQqvjlRNPcQ/exec";

    try {
      const formPayload = new FormData();
      for (let key in formData) {
        formPayload.append(key, formData[key]);
      }
      const response = await fetch(scriptURL, {
        method: "POST",
        body: formPayload, // No 'Content-Type' header for FormData
      });
      if (response.ok) {
        // alert("Form submitted successfully!");
        toast.success("Form submitted successfully!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        setFormData({
          Name: "",
          Email: "",
          PhoneNumber: "",
          Message: "",
        });
      } else {
        // alert("Something went wrong. Please try again.");
        toast.warning("Something went wrong. Please try again.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    } catch (error) {
      console.error("Error:", error);
      // alert("Error submitting the form. Please check your connection.");
      toast.error("Error submitting the form. Please check your connection.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
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
            <FaFacebook
              onClick={() =>
                handleOpenTab(
                  "https://www.facebook.com/people/Sapience-Minds/61564911584088/"
                )
              }
            />
            <FaInstagram
              onClick={() =>
                handleOpenTab(
                  "https://www.instagram.com/sapience_minds?igsh=eHhpYm4ydnhnMGZh"
                )
              }
            />
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
          <form onSubmit={handleSubmit} className="from_container-contact-page">
            <div className="from-sub-container">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                required
                id="name"
                name="Name"
                value={formData.Name}
                onChange={handleChange}
              />
            </div>
            <div className="from-sub-container">
              <label htmlFor="mail">Email</label>
              <input
                type="email"
                required
                id="mail"
                name="Email"
                value={formData.Email}
                onChange={handleChange}
              />
            </div>
            <div className="from-sub-container">
              <label htmlFor="mobile">Phone Number</label>
              <input
                type="tel"
                required
                id="mobile"
                name="PhoneNumber"
                value={formData.PhoneNumber}
                onChange={handleChange}
              />
            </div>
            <div className="from-sub-container">
              <label htmlFor="message">Message</label>
              <textarea
                rows="3"
                required
                id="message"
                name="Message"
                value={formData.Message}
                onChange={handleChange}
              />
            </div>
            <button type="submit">Send</button>
          </form>
        </div>

        {/* Right - Info Box */}
        <div className="reach-info">
          <div className="corner-box"></div>
          <h3>Info</h3>
          <div>
            {/* <p>reachus@sapienceminds.com</p>
            <p>+91 9606939773</p> */}
            <p>
              <a href="mailto:reachus@sapienceminds.com">
                reachus@sapienceminds.com
              </a>
            </p>
            <p>
              <a href="tel:+919606939773">+91 9606939773</a>
            </p>

            <p>Bengaluru, Karnataka, India</p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ContactForm;
