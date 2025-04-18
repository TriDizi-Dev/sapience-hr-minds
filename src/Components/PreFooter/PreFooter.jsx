import React, { useEffect, useRef, useState } from "react";
import "./PreFooter.css";
import AOS from "aos";
import "aos/dist/aos.css";
// {head,Content,Btn1,Btn2}
export const PreFooter = ({
  Head,
  Content,
  Btn1 = "Get Started",
  Btn2 = "Book A Meeting",
}) => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 1000,
      easing: "ease-in-sine",
      once: false,
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const hadleNavigate = () => {
    window.open(
      "https://calendly.com/babitha-sapienceminds-pfmn/45min",
      "_blank"
    );
  };
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const modalRef = useRef(null);

  const handleOpenForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      handleCloseForm();
    }
  };


  useEffect(() => {
    if (showForm) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showForm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setShowForm(false);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <div className="PreFooter_Main" data-aos="zoom-in">
        <p className="Heading_PreFooter">{Head}</p>
        <p className="Para_PreFooter">{Content}</p>
        <div className="Buttons_Container">
          <button className="Button1" onClick={() => handleOpenForm()}>
            {Btn1}
          </button>
          <button className="Button22" onClick={() => hadleNavigate()}>
            {Btn2}
          </button>
        </div>
      </div>
      {showForm && (
        <div className="modal-overlay">
          <div className="modal-box" ref={modalRef}>
            <h2>Contact Form</h2>
            <form onSubmit={handleSubmit} className="form">
              <label className="Label">
                Name:
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="Input"
                />
              </label>

              <label className="Label">
                Email:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="Input"
                />
              </label>
              <label className="Label">
                Message
                <textarea
                  type="text"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="Input"
                />
              </label>

              <div className="form-buttons">
                <button type="submit">Submit</button>
                <button type="button" onClick={handleCloseForm}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
