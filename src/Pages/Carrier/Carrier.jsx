import React, { useEffect, useRef, useState } from "react";
import "./Carrier.css";
import lefticon from "../../assets/Carrier/lefticon.svg";
import righticon from "../../assets/Carrier/righticon.svg";
import logo1 from "../../assets/Carrier/logo1.svg";
import logo2 from "../../assets/Carrier/logo2.svg";
import logo3 from "../../assets/Carrier/logo3.svg";
import logo4 from "../../assets/Carrier/logo4.svg";
import logo5 from "../../assets/Carrier/logo5.svg";
import logo6 from "../../assets/Carrier/logo6.svg";
import card1 from "../../assets/Carrier/card1.jpg";
import card2 from "../../assets/Carrier/card2.jpg";
import card3 from "../../assets/Carrier/card3.jpg";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import { HiLink } from "react-icons/hi";
import { BsLinkedin } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import AOS from "aos";
import "aos/dist/aos.css";
import { ImCross } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";
import blog1 from "../../assets/Blogs/image1.png";
import blog2 from "../../assets/Blogs/image2.png";
import blog3 from "../../assets/Blogs/image3.png";
import { database, ref, get } from "../../Firebase/firebase";
import parse, { domToReact } from "html-react-parser";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Carrier() {
  const navigate = useNavigate();
  const [careers, setCareers] = useState([]);
  console.log(careers, "careerscareers");
  const [Blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const blogRef = ref(database, "blogs/hr-minds");

      try {
        const snapshot = await get(blogRef);
        if (snapshot.exists()) {
          const data = snapshot.val();
          console.log("Data fetched from Firebase:", data);

          const blogList = Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
            imageUrl: data[key].image_url || "", // Don't use ref() here!
          }));

          console.log("Parsed blog list:", blogList);
          setBlogs(blogList);
        } else {
          console.log("No blog data found.");
        }
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchBlogs();
  }, []);

  useEffect(() => {
    const fetchCareers = async () => {
      const careersRef = ref(database, "careers"); // Reference to the "careers" node in the database
      try {
        const snapshot = await get(careersRef); // Fetch data from Firebase
        if (snapshot.exists()) {
          const data = snapshot.val();
          const careerList = Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
          }));
          setCareers(careerList); // Set the state with fetched data
        } else {
          console.log("No data available");
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchCareers();
  }, []);
  const ClientsJobs = careers.filter((job) => job.Category === "Clients");
  const OurJobs = careers.filter((job) => job.Category === "Our");

  let currentSection = ""; // default section

  let sectionSwitchTriggered = false; // Flag to simulate "Requirements" section start if no heading

  const options = {
    replace: (domNode) => {
      if (domNode.name === "h1" || domNode.name === "strong") {
        const text = domToReact(domNode.children)
          .toString()
          .trim()
          .toLowerCase();
      }

      // Optional logic to auto-switch section if no heading but pattern matches (e.g., after first <ul>)
      if (domNode.name === "ul" && !sectionSwitchTriggered) {
        sectionSwitchTriggered = true;
        currentSection = "requirements";
      }

      if (domNode.name === "li") {
        const className =
          currentSection === "requirements"
            ? "accordian_layer3_list_items"
            : "accordian_layer2_list_items";

        return <li className={className}>{domToReact(domNode.children)}</li>;
      }

      if (domNode.name === "p" || domNode.name === "span") {
        const className =
          currentSection === "requirements"
            ? "accordian_layer3_paragraph"
            : "accordian_layer2_paragraph";

        return React.createElement(
          domNode.name,
          { className },
          domToReact(domNode.children)
        );
      }

      if (domNode.name === "strong" && !currentSection) {
        // fallback to default styles
        return (
          <strong className="accordian_fallback_bold">
            {domToReact(domNode.children)}
          </strong>
        );
      }

      return;
    },
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: "2-digit", month: "short", year: "numeric" };
    return date.toLocaleDateString("en-GB", options);
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
    window.scrollTo(0, 0);
  }, []);

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded((prev) => (prev === panel ? null : panel));
  };
  const [activeNav, setActiveNav] = useState("All");

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
    sourcepage: "",
  });


  const [applyJob, setApplyJob] = useState(false);
  const modalRef_1 = useRef(null);

  const [applyJobData, setApplyJobData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    category: "",
    job: "",
    sourcepage:"Careers"
  });
 
  const modalRef = useRef(null);
  const preFooterRef = useRef(null); // add this line
  const handleOpenForm = (value) => {
    if (preFooterRef.current) {
      preFooterRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
    setFormData((prevData) => ({
      ...prevData,
      sourcepage: value,
    }));

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

  const inputHandleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleNav = (ev) => {
    setActiveNav(ev);
  };

  const handleSignleBlog = (ev, id) => {
    navigate(`/blog/${id}`, { state: ev });
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
        body: formPayload, 
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
        handleCloseForm();
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error submitting the form. Please check your connection.");
    }
  };


  const openApplyJobForm = (TargetCategory, JobTitle) => {
    setApplyJobData((prev) => ({
      ...prev,
      category: TargetCategory,
      job: JobTitle,
    }));
    setApplyJob(true);
  };
  

  const closeApplyJobForm = () => {
    setApplyJob(false);
  };

  const handleApplyJobChange = (e) => {
    const { name, value } = e.target;
    setApplyJobData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleApplyJobSubmit = async (e) => {
    e.preventDefault();
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbxXgFjRfloUaeWB49YcK1iBraoxMuObtJrnu6EHALeQAxyuEaMFf70OMwbLWHQpV4Ru/exec";

    try {
      const formPayload = new FormData();
      formPayload.append("sheet", "Sheet2");
      for (let key in applyJobData) {
        formPayload.append(key, applyJobData[key]);
      }

      const response = await fetch(scriptURL, {
        method: "POST",
        body: formPayload,
      });

      if (response.ok) {
        toast.success("Form submitted successfully!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        setApplyJobData({
          name: "",
          email: "",
          phoneNumber: "",
          category: "",
          job: "",
        });
        closeApplyJobForm();
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
    <div className="carriers_outer_main">
      <div className="carrier_banner_outer">
        <div className="carriers_banner">
          <img
            src={lefticon}
            alt="lefticon"
            className="banner_left_icon"
            data-aos="fade-right"
          />
          <img
            src={righticon}
            alt="lefticon"
            className="banner_right_icon"
            data-aos="zoom-in"
          />
          <h1 className="carrier_bg_heading">CAREERS</h1>
          <div className="carrier_banner_heading_text">
            <h1
              className="carrier_heading"
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="300"
              data-aos-offset="0"
            >
              Be a Part of Our Journey
            </h1>
            <p className="carrier_banner_para">
              Join a purpose-driven HR consulting firm where innovation, growth,
              and people-first values shape every career. At Sapience Minds,
              your expertise finds meaningful impact.
            </p>
          </div>
          <div className="carriers_banner_buttons">
            <a href="#positions">
              <button className="banner_left_button">
                EXPLORE OPPORTUNITY
              </button>
            </a>
            <a href="#benefit">
              <button className="carrier_right_button">SEE THE BENEFIT</button>
            </a>
          </div>
        </div>
      </div>

      <div className="carrier_layer2_main_outer" id="benefit">
        <div className="carrier_layer2_outer">
          <div className="carrier_layer2_left">
            <h1 className="layer2_heading" data-aos="zoom-out-right">
              The Benefit Working Here
            </h1>
            <p className="layer2_left_para" data-aos="zoom-out-right">
              We recognize that compensation and benifits play a major part in
              making sure that you feel you can foucs on your work. We offer
              generous packages to make sure your feel respected and appreciated
              as an employee.
            </p>
          </div>
          <div className="carrier_layer2_right">
            <div className="carrier_right_cards_outer">
              <div className="carrier_layer2_right_card" data-aos="zoom-in">
                <div className="layer2_card_logo_outer">
                  <img src={logo1} alt="logo1" className="layer2_card_logo" />
                </div>
                <div className="layer2_card_text">
                  <h6 className="layer2_card_heding">Expert Training</h6>
                  <div className="layer2_card_para">
                    Sharpen your HR expertise with hands-on learning from
                    industry leaders and real-world projects.
                  </div>
                </div>
              </div>
              <div className="carrier_layer2_right_card" data-aos="zoom-in">
                <div className="layer2_card_logo_outer">
                  <img src={logo2} alt="logo2" className="layer2_card_logo" />
                </div>
                <div className="layer2_card_text">
                  <h6 className="layer2_card_heding">Performance Bonus</h6>
                  <div className="layer2_card_para">
                    Get rewarded for results with performance-based incentives
                    that recognize your contributions.
                  </div>
                </div>
              </div>
              <div className="carrier_layer2_right_card" data-aos="zoom-in">
                <div className="layer2_card_logo_outer">
                  <img src={logo3} alt="logo3" className="layer2_card_logo" />
                </div>
                <div className="layer2_card_text">
                  <h6 className="layer2_card_heding">Health & Insurance</h6>
                  <div className="layer2_card_para">
                    We care for your well-being comprehensive health and
                    insurance coverage is part of our promise.
                  </div>
                </div>
              </div>
              <div className="carrier_layer2_right_card" data-aos="zoom-in">
                <div className="layer2_card_logo_outer">
                  <img src={logo4} alt="logo4" className="layer2_card_logo" />
                </div>
                <div className="layer2_card_text">
                  <h6 className="layer2_card_heding">Continues Learning</h6>
                  <div className="layer2_card_para">
                    Access resources, tools, and mentorship that encourage
                    constant growth and career development.
                  </div>
                </div>
              </div>
              <div className="carrier_layer2_right_card" data-aos="zoom-in">
                <div className="layer2_card_logo_outer">
                  <img src={logo5} alt="logo5" className="layer2_card_logo" />
                </div>
                <div className="layer2_card_text">
                  <h6 className="layer2_card_heding">Parental Leave</h6>
                  <div className="layer2_card_para">
                    Ut sed eros finibus, placerat orci id, dapibus mauris.
                    Vestibulum consequat hendrerit lacus.
                  </div>
                </div>
              </div>
              <div className="carrier_layer2_right_card" data-aos="zoom-in">
                <div className="layer2_card_logo_outer">
                  <img src={logo6} alt="logo6" className="layer2_card_logo" />
                </div>
                <div className="layer2_card_text">
                  <h6 className="layer2_card_heding">Free Lunch</h6>
                  <div className="layer2_card_para">
                    Ut sed eros finibus, placerat orci id, dapibus mauris.
                    Vestibulum consequat hendrerit lacus.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="carrier_layer3_main">
        <div className="carrier_layer3_outer" data-aos="zoom-in-up">
          <div className="carrier_layer3_banner">
            <p className="layer3_banner_para">
              At Sapience Minds, Driven by purpose, powered by people where HR
              innovation meets meaningful careers.
            </p>
            <div className="layer3_banner_button_outer">
              <button>More About Us</button>
            </div>
          </div>
        </div>

        <div className="carrier_layer3_part1" id="positions">
          <h1 className="carrier_layer3_part1_heading">Opened Positions</h1>
        </div>
        <div className="carrier_layer3_part2_outer">
          <div className="layer3_part2_nav_bar">
            <p
              onClick={() => handleNav("All")}
              className={`part2_nav_items ${
                activeNav === "All" ? "layer3_active" : ""
              }`}
            >
              ALL
            </p>
            <p
              onClick={() => handleNav("Our")}
              className={`part2_nav_items ${
                activeNav === "Our" ? "layer3_active" : ""
              }`}
            >
              Our
            </p>
            <p
              onClick={() => handleNav("Clients")}
              className={`part2_nav_items ${
                activeNav === "Clients" ? "layer3_active" : ""
              }`}
            >
              Clients
            </p>
          </div>

          <div className="layer3_part3_outer_main">
            <div className="layer3_part3_outer">
              {activeNav === "All" && (
                <>
                  {careers.map((item, id) => (
                    <Accordion
                      // data-aos="zoom-out"
                      expanded={expanded === `panel${id}`}
                      onChange={handleChange(`panel${id}`)}
                      disableGutters
                      elevation={0}
                      square
                      sx={{
                        width: "100%",
                        // height: expanded ? 'auto' : '6vw',
                        transition: "all 0.3s ease",
                        marginTop: "3vw",
                        backgroundColor: "none",
                      }}
                    >
                      <AccordionSummary
                        expandIcon={
                          <ArrowForwardIosSharpIcon
                            sx={{ fontSize: "0.9rem" }}
                          />
                        }
                        aria-controls="panel-content"
                        id="panel-header"
                        sx={{
                          backgroundColor: "white",
                          flexDirection: "row-reverse",
                          height: "6vw",
                          borderRadius: "2.8vw",
                          boxShadow: "0px 6px 25px rgba(0, 0, 0, 0.15)",
                          "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded":
                            {
                              transform: "rotate(90deg)",
                            },
                          "& .MuiAccordionSummary-content": {
                            marginLeft: 1,
                          },
                        }}
                      >
                        <Typography
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start", // or 'center', 'space-between' etc.
                            width: "100%",
                            paddingLeft: "1vw",
                            gap: "1vw",
                          }}
                          className="carrier_accordian"
                        >
                          <p
                            className="accordian_top_text"
                            style={{ margin: 0 }}
                          >
                            {item.FieldOfJob}
                          </p>
                          <p className="accordia_header">{item.JobTitle}</p>
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails
                        sx={{
                          padding: 2,
                          // backgroundColor: 'red'
                        }}
                      >
                        <Typography>
                          <div className="accoridian_content_outer">
                            <div className="accordain_left">
                              <p className="accordian_left_para">
                                {parse(item.ShortDiscription, options)}
                              </p>
                              <div>
                                <h1 className="accordian_layer2_heading">
                                  Job Discription
                                </h1>
                                {parse(item.JobDiscription, options)}
                              </div>
                              <div>
                                <h1 className="accordian_layer2_heading">
                                  Requirements
                                </h1>
                                {parse(item.Requirements, options)}
                              </div>
                            </div>
                            <div className="accordian_right">
                              <div className="accordian_right_icons_button">
                                <button onClick={()=>openApplyJobForm(item?.Category,item?.JobTitle)}>Apply Now</button>
                              </div>
                              <div className="accordian_right_details_outer">
                                <div className="detalis_items">
                                  <p className="lef_item">Location</p>
                                  <p className="right_item">{item.Location}</p>
                                </div>
                                <div className="detalis_items">
                                  <p className="lef_item">Type</p>
                                  <p className="right_item">{item.Type}</p>
                                </div>
                                <div className="detalis_items">
                                  <p className="lef_item">Qualification</p>
                                  <p className="right_item">
                                    {item.Qualification}
                                  </p>
                                </div>
                                <div className="detalis_items">
                                  <p className="lef_item">Posted</p>
                                  <p className="right_item">
                                    {formatDate(item.PostDate)}
                                  </p>
                                </div>
                              </div>

                              <div className="right_buttons">
                                <div className="right_help_button_outer">
                                  <button
                                    onClick={() =>
                                      handleOpenForm(
                                        "Career-All-Head of Product"
                                      )
                                    }
                                  >
                                    Ask for more help
                                    <FaArrowRightLong className="help_button_icon" />
                                  </button>
                                </div>
                                <div className="right_about_company_button_outer">
                                  <Link to="/about" className="nav_link">
                                    <button>
                                      About Company
                                      <FaArrowRightLong className="help_button_icon" />
                                    </button>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </>
              )}

              {activeNav === "Our" && (
                <>
                  {OurJobs.map((item, id) => (
                    <Accordion
                      // data-aos="zoom-out"
                      expanded={expanded === `panel${id}`}
                      onChange={handleChange(`panel${id}`)}
                      disableGutters
                      elevation={0}
                      square
                      sx={{
                        width: "100%",
                        // height: expanded ? 'auto' : '6vw',
                        transition: "all 0.3s ease",
                        marginTop: "3vw",
                        backgroundColor: "none",
                      }}
                    >
                      <AccordionSummary
                        expandIcon={
                          <ArrowForwardIosSharpIcon
                            sx={{ fontSize: "0.9rem" }}
                          />
                        }
                        aria-controls="panel-content"
                        id="panel-header"
                        sx={{
                          backgroundColor: "white",
                          flexDirection: "row-reverse",
                          height: "6vw",
                          borderRadius: "2.8vw",
                          boxShadow: "0px 6px 25px rgba(0, 0, 0, 0.15)",
                          "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded":
                            {
                              transform: "rotate(90deg)",
                            },
                          "& .MuiAccordionSummary-content": {
                            marginLeft: 1,
                          },
                        }}
                      >
                        <Typography
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start", // or 'center', 'space-between' etc.
                            width: "100%",
                            paddingLeft: "1vw",
                            gap: "1vw",
                          }}
                          className="carrier_accordian"
                        >
                          <p
                            className="accordian_top_text"
                            style={{ margin: 0 }}
                          >
                            {item.FieldOfJob}
                          </p>
                          <p className="accordia_header">{item.JobTitle}</p>
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails
                        sx={{
                          padding: 2,
                          // backgroundColor: 'red'
                        }}
                      >
                        <Typography>
                          <div className="accoridian_content_outer">
                            <div className="accordain_left">
                              <p className="accordian_left_para">
                                {parse(item.ShortDiscription, options)}
                              </p>
                              <div>{parse(item.JobDiscription, options)}</div>
                              <div>{parse(item.Requirements, options)}</div>
                            </div>
                            <div className="accordian_right">
                              {/* <div className="right_top_icons_outer">
                                                           <p className="share">
                                                               Share
                                                           </p>
                                                           <div className="icons_outer">
                                                               <HiLink className='accordian_icons' />

                                                           </div>
                                                           <div className="icons_outer">
                                                               <BsLinkedin className='accordian_icons' />

                                                           </div>
                                                           <div className="icons_outer">
                                                               <FaTwitter className='accordian_icons' />

                                                           </div>
                                                           <div className="icons_outer">
                                                               <IoIosMail className='accordian_icons' />

                                                           </div>
                                                       </div> */}

                              <div className="accordian_right_icons_button">
                                <button onClick={()=>openApplyJobForm(item?.Category,item?.JobTitle)}>Apply Now</button>
                              </div>
                              <div className="accordian_right_details_outer">
                                <div className="detalis_items">
                                  <p className="lef_item">Location</p>
                                  <p className="right_item">{item.Location}</p>
                                </div>
                                <div className="detalis_items">
                                  <p className="lef_item">Type</p>
                                  <p className="right_item">{item.Type}</p>
                                </div>
                                <div className="detalis_items">
                                  <p className="lef_item">Qualification</p>
                                  <p className="right_item">
                                    {item.Qualification}
                                  </p>
                                </div>
                                <div className="detalis_items">
                                  <p className="lef_item">Posted</p>
                                  <p className="right_item">
                                    {formatDate(item.PostDate)}
                                  </p>
                                </div>
                              </div>

                              <div className="right_buttons">
                                <div className="right_help_button_outer">
                                  <button
                                    onClick={() =>
                                      handleOpenForm(
                                        "Career-All-Head of Product"
                                      )
                                    }
                                  >
                                    Ask for more help
                                    <FaArrowRightLong className="help_button_icon" />
                                  </button>
                                </div>
                                <div className="right_about_company_button_outer">
                                  <Link to="/about" className="nav_link">
                                    <button>
                                      About Company
                                      <FaArrowRightLong className="help_button_icon" />
                                    </button>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </>
              )}

              {activeNav === "Clients" && (
                <>
                  {ClientsJobs.map((item, id) => (
                    <Accordion
                      // data-aos="zoom-out"
                      expanded={expanded === `panel${id}`}
                      onChange={handleChange(`panel${id}`)}
                      disableGutters
                      elevation={0}
                      square
                      sx={{
                        width: "100%",
                        // height: expanded ? 'auto' : '6vw',
                        transition: "all 0.3s ease",
                        marginTop: "3vw",
                        backgroundColor: "none",
                      }}
                    >
                      <AccordionSummary
                        expandIcon={
                          <ArrowForwardIosSharpIcon
                            sx={{ fontSize: "0.9rem" }}
                          />
                        }
                        aria-controls="panel-content"
                        id="panel-header"
                        sx={{
                          backgroundColor: "white",
                          flexDirection: "row-reverse",
                          height: "6vw",
                          borderRadius: "2.8vw",
                          boxShadow: "0px 6px 25px rgba(0, 0, 0, 0.15)",
                          "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded":
                            {
                              transform: "rotate(90deg)",
                            },
                          "& .MuiAccordionSummary-content": {
                            marginLeft: 1,
                          },
                        }}
                      >
                        <Typography
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start", // or 'center', 'space-between' etc.
                            width: "100%",
                            paddingLeft: "1vw",
                            gap: "1vw",
                          }}
                          className="carrier_accordian"
                        >
                          <p
                            className="accordian_top_text"
                            style={{ margin: 0 }}
                          >
                            {item.FieldOfJob}
                          </p>
                          <p className="accordia_header">{item.JobTitle}</p>
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails
                        sx={{
                          padding: 2,
                          // backgroundColor: 'red'
                        }}
                      >
                        <Typography>
                          <div className="accoridian_content_outer">
                            <div className="accordain_left">
                              <p className="accordian_left_para">
                                {item.ShortDiscription}
                              </p>
                              <div>{parse(item.JobDiscription, options)}</div>
                              <div>{parse(item.Requirements, options)}</div>
                            </div>
                            <div className="accordian_right">
                              <div className="accordian_right_icons_button">
                                <button onClick={()=>openApplyJobForm(item?.Category,item?.JobTitle)}>Apply Now</button>
                              </div>
                              <div className="accordian_right_details_outer">
                                <div className="detalis_items">
                                  <p className="lef_item">Location</p>
                                  <p className="right_item">{item.Location}</p>
                                </div>
                                <div className="detalis_items">
                                  <p className="lef_item">Type</p>
                                  <p className="right_item">{item.Type}</p>
                                </div>
                                <div className="detalis_items">
                                  <p className="lef_item">Qualification</p>
                                  <p className="right_item">
                                    {item.Qualification}
                                  </p>
                                </div>
                                <div className="detalis_items">
                                  <p className="lef_item">Posted</p>
                                  <p className="right_item">
                                    {formatDate(item.PostDate)}
                                  </p>
                                </div>
                              </div>

                              <div className="right_buttons">
                                <div className="right_help_button_outer">
                                  <button
                                    onClick={() =>
                                      handleOpenForm(
                                        "Career-All-Head of Product"
                                      )
                                    }
                                  >
                                    Ask for more help
                                    <FaArrowRightLong className="help_button_icon" />
                                  </button>
                                </div>
                                <div className="right_about_company_button_outer">
                                  <Link to="/about" className="nav_link">
                                    <button>
                                      About Company
                                      <FaArrowRightLong className="help_button_icon" />
                                    </button>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </>
              )}
            </div>
          </div>

          <div className="layer3_part4_outer_main">
            <div className="layer3_part4_outer">
              <h1 className="part4_heading">News and Updated</h1>
              <div className="bottom_line_outer"></div>
              <p className="part4_para">
                Integrate once and never worry about scaling again. Never deal
                with fragmented Layer 2 systems.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="carrier_cards_outer">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={4}
          slidesPerGroup={1}
          slidesOffsetBefore={20}
          navigation={{
            prevEl: ".custom-prev-button",
            nextEl: ".custom-next-button",
          }}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          speed={1000}
          loop={true}
          className="carrier_last_Cards"
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 13,
            },
            721: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >
          {Blogs?.map((data, index) => (
            <SwiperSlide key={index}>
              <div className="carrier_card">
                <div className="carrier_img_outer">
                  <img
                    src={data.imageUrl}
                    alt="card1"
                    className="carrier_card_img"
                  />
                </div>
                <div className="card_text_heading">
                  <h6 className="card_hading_one">{data?.title}</h6>
                  <p className="card_para">{data?.content}</p>
                  <p
                    className="card_readmore"
                    onClick={() => handleSignleBlog(data, data.title)}
                  >
                    Explore More
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
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
                  name="name"
                  value={formData.name}
                  onChange={inputHandleChange}
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
                  onChange={inputHandleChange}
                  required
                  className="Input"
                />
              </label>
              <label className="Label">
                Phone Number:
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={inputHandleChange}
                  required
                  className="Input"
                />
              </label>
              <label className="Label">
                Message:
                <textarea
                  type="text"
                  name="message"
                  value={formData.message}
                  onChange={inputHandleChange}
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

{applyJob && (
        <div className="modal-overlay">
          <div className="modal-box" ref={modalRef_1}>
            <div className="Cancel_and_form_head">
              <h2>Apply Here</h2>
              <p>
                <ImCross className="Icons_X" onClick={closeApplyJobForm} />
              </p>
            </div>
            <form onSubmit={handleApplyJobSubmit} className="form">
              <label className="Label">
                Name:
                <input
                  type="text"
                  name="name"
                  value={applyJobData.name}
                  onChange={handleApplyJobChange}
                  required
                  className="Input"
                />
              </label>

              <label className="Label">
                Email:
                <input
                  type="email"
                  name="email"
                  value={applyJobData.email}
                  onChange={handleApplyJobChange}
                  required
                  className="Input"
                />
              </label>

              <label className="Label">
                Phone Number:
                <input
                  type="tel"
                  name="phoneNumber"
                  value={applyJobData.phoneNumber}
                  onChange={handleApplyJobChange}
                  required
                  className="Input"
                />
              </label>

              <div className="form-buttons">
                <button type="submit">Submit</button>
                <button type="button" onClick={closeApplyJobForm}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

         <ToastContainer />
    </div>
  );
}

export default Carrier;
