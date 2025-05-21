import React, { useEffect, useRef, useState } from "react";
import "./PreFooter.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { ImCross } from "react-icons/im";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// {head,Content,Btn1,Btn2}
export const PreFooter = ({
  Head,
  Content,
  Btn1 = "Get Started",
  Btn2 = "Book A Meeting",
  sourcepages,
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

  const modalRef = useRef(null);
  const preFooterRef = useRef(null); // add this line
  const handleOpenForm = () => {
    if (preFooterRef.current) {
      preFooterRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }

    setTimeout(() => {
      setShowForm(true);
    }, 200); // wait a bit to let scroll finish
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      handleCloseForm();
    }
  };

  useEffect(() => {
    if (showForm) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showForm]);

  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    PhoneNumber: "",
    Message: "",
    Sourcepage: sourcepages,
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
      "https://script.google.com/macros/s/AKfycbzvzG1K-8O3LD328fyCXs5oyEkWVA12zplggBg-jMLHZjk9tFow9AYw_EhVQqvjlRNPcQ/exec";

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
      // console.log(response, "resssssss");

      if (response.ok) {
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
        handleCloseForm();
      } else {
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
    <>
      <div className="PreFooter_Main" data-aos="zoom-in" ref={preFooterRef}>
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
            <div className="Cancel_and_form_head">
              <h2>Contact Form</h2>
              <p>
                <ImCross
                  className="Icons_X"
                  onClick={() => handleCloseForm()}
                />
              </p>
            </div>
            <form onSubmit={handleSubmit} className="form">
              <label className="Label">
                Name:
                <input
                  type="text"
                  name="Name"
                  value={formData.Name}
                  onChange={handleChange}
                  required
                  className="Input"
                />
              </label>

              <label className="Label">
                Email:
                <input
                  type="email"
                  name="Email"
                  value={formData.Email}
                  onChange={handleChange}
                  required
                  className="Input"
                />
              </label>
              <label className="Label">
                Phone Number:
                <input
                  type="tel"
                  name="PhoneNumber"
                  value={formData.PhoneNumber}
                  onChange={handleChange}
                  required
                  className="Input"
                />
              </label>
              <label className="Label">
                Message:
                <textarea
                  type="text"
                  name="Message"
                  value={formData.Message}
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
