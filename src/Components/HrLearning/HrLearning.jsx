import React, { useEffect, useRef, useState } from "react";
import "./HrLearning.css";
import HrBanner from "../../assets/HrLearning/HrLearnHero.svg";
import BackgroundLayer from "../../assets/HrLearning/BackgroundLayer.svg";
import { PreFooter } from "../PreFooter/PreFooter";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const HrLearning = ({
  HRLearning,
  imgTitle,
  questionTitle,
  img,
  metaTitle,
  metaDescription,
  PreviousHeading,
  Internship1,
  Internship1Description,
  Internship2,
  Internship2Description,
  Internship3,
  Internship3Description,
}) => {
  const [selectedData, setSelectedData] = useState({});
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const modalRef = useRef(null);

  const handleCloseForm = () => {
    setShowForm(false);
  };
  const handleOpenForm = () => {
    setShowForm(true);
  };
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    PhoneNumber: "",
    Sourcepage:"Education and Learning"
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
      formPayload.append("Learning", selectedData.head);
      formPayload.append("Category", questionTitle);
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
        });
        handleCloseForm();
      } else {
        toast.warning("Something went wrong. Please try again.", {
          position: "top-right",
          autoClose: 2000,
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
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  useEffect(() => {
    setSelectedData(HRLearning[0]);
  }, []);
  const Handledatachnage = (data) => {
    setSelectedData(data);
  };

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 500,
      easing: "ease-in-sine",
      once: false,
    });
  }, []);
  useEffect(() => {
    const params = new URLSearchParams();
    if (selectedData?.head) params.set("title", selectedData.head || "");
    const queryString = params.toString();
    navigate(
      queryString
        ? `/${selectedData?.path}?${queryString}`
        : `/${selectedData?.path}`
    );
  }, [selectedData]);
  return (
    <>
    

      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />

        {/* Open Graph Meta Tags (for WhatsApp, Facebook, LinkedIn) */}
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta
          property="og:image"
          content="https://tridizi.com/assets/10782741_19197279%201-DKNLt4HA.svg"
        />
        <meta property="og:url" content="https://tridizi.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta
          name="twitter:image"
          content="https://tridizi.com/assets/10782741_19197279%201-DKNLt4HA.svg"
        />
      </Helmet>
      <div className="Hr_Hero_container">
        <img src={img} alt="HrBanner"></img>
        <p data-aos="fade-right">{imgTitle}</p>
      </div>
      <div className="Section2_Main_container">
        <p className="Section2_Heading_text" data-aos="fade-right">
          What you learn in {questionTitle}?
        </p>
        <div className="Background_Image_Container_1">
          <img src={BackgroundLayer} alt="BackgroundLayer"></img>
        </div>
        <div className="Section2_Cards_Container">
          <div className="Left_Side_Container_Section2">
            {HRLearning.map((item, id) => (
              <div
                className={`Left_Single_Side_Cards_Container ${
                  item.id === selectedData.id
                    ? "card_boarder"
                    : "card_boxshadow"
                }`}
                key={id}
                onClick={() => Handledatachnage(item)}
              >
                <p
                  className={`Single_Cards_head ${
                    item.id === selectedData.id ? "Head_colour" : ""
                  }`}
                >
                  {item.head}
                </p>
                <div className="Single_Cards_Sub_heads_text">
                  <p>{item.subhead1}</p>
                  <p>{item.subhead2}</p>
                  <p>{item.subhead3}</p>
                </div>
                <p className="Single_Cards_Sub_text">{item.paragraph}</p>
              </div>
            ))}
          </div>
          <div className="Right_Side_Container_Section2">
            <div
              className="Right_Side_Container_Section2_top_div"
              data-aos="zoom-in"
            >
              <p className="Right_Side_Container_Header">{selectedData.head}</p>
              <div className="Single_Cards_Sub_heads_text_right">
                <p>{selectedData.subhead1}</p>
                <p>{selectedData.subhead2}</p>
                <p>{selectedData.subhead3}</p>
              </div>
              <p className="Single_Cards_Sub_heads_text_right_Sub_headings">
                {selectedData.PrimaryResponsibilityHeading}
              </p>
              <p className="Single_Cards_Sub_heads_text_right_Sub_text">
                {selectedData.PrimaryResponsibilityPara}
              </p>
              <p className="Single_Cards_Sub_heads_text_right_Sub_headings">
                {selectedData.jobspecificationsHeading}
              </p>
              <ul className="Single_Cards_Sub_heads_text_right_Sub_List_text">
                {selectedData?.jobspecifications?.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <p className="Single_Cards_Sub_heads_text_right_Sub_headings">
                {selectedData.jobspecificationsHeading1}
              </p>
              <ul className="Single_Cards_Sub_heads_text_right_Sub_List_text">
                {selectedData?.Specifications?.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <p
                className="Apply_now_button_content_Hr_Learn"
                onClick={() => handleOpenForm()}
              >
                Apply Now
              </p>
            </div>
            <div className="Privours_Data_Container_last" data-aos="zoom-in-up">
              <p className="Privours_Data_Container_Head_text">
                {PreviousHeading}
              </p>
              <div className="Single_Privious_Data_Cont">
                <p>{Internship1} </p>
                <p>{Internship1Description}</p>
              </div>
              <div className="Single_Privious_Data_Cont">
                <p>{Internship2} </p>
                <p>{Internship2Description}</p>
              </div>
              <div className="Single_Privious_Data_Cont">
                <p>{Internship3} </p>
                <p>{Internship3Description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showForm && (
        <div className="modal-overlay">
          <div className="modal-box" ref={modalRef}>
            <div className="Cancel_and_form_head">
              <h2>Apply Here</h2>
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
              {/* <label className="Label">
                Message:
                <textarea
                  type="text"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="Input"
                />
              </label> */}

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
      <div className="Pre_Footer_Hr_learning_Container">
        <PreFooter
          sourcepages={imgTitle}
          Head="Let’s Build Your People Strategy – Together"
          Content="Your startup deserves more than just reactive HR. Whether you need structure, compliance, or a culture strategy, let’s have a conversation that moves your business forward. Book a discovery call or fill out the form and let’s shape a smarter, people-powered future for your company."
        />
      </div>
    </>
  );
};
