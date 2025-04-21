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

function Carrier() {
  const navigate = useNavigate();
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

  const Blogs = [
    {
      id: 1,
      bannerheading:
        "The Importance of Workforce Upskilling and Reskilling in Today’s Economy",
      subname: "Human Resources",
      bannertext: `In today’s rapidly evolving economy, workforce upskilling and reskilling have become crucial for organizations aiming to stay competitive.`,
      explore: "Explore More",
      path: "/blog",
      img: blog1,
      toptext: "By Babitha on April 24, 2025 - 5 min read",

      firstheading: "Introduction to Workforce Upskilling and Reskilling",
      secondheading: "The Benefits of Upskilling",
      thirdheading: "The Need for Reskilling",
      fourthheading:
        "Implementing Effective Upskilling and Reskilling Programs",

      firstpara:
        "In today’s rapidly evolving economy, workforce upskilling and reskilling have become crucial for organizations aiming to stay competitive. As technology advances and market demands shift, employees need to acquire new skills or enhance existing ones to meet these changes effectively.",
      secondpara:
        "Upskilling refers to providing current employees with additional training to learn new skills relevant to their current job roles. This practice not only helps employees stay updated with the latest industry trends but also boosts their confidence and productivity. For organizations, upskilling can lead to increased innovation, higher employee retention rates, and a more agile workforce.",
      thirdpara:
        "Reskilling, on the other hand, involves training employees to take on entirely new roles within the organization. This is particularly important when certain job functions become obsolete due to technological advancements or shifts in market needs. Reskilling ensures that valuable employees can transition to new positions, thereby retaining institutional knowledge and reducing turnover costs.",
      fourthpara:
        "To implement effective upskilling and reskilling programs, organizations should first conduct a skills gap analysis to identify areas where training is needed. Collaborating with educational institutions and leveraging online learning platforms can provide employees with access to high-quality training resources. Additionally, fostering a culture of continuous learning within the organization can encourage employees to take charge of their professional development.",

      listitems1: "Non magni quisquam",
      listitems2: "Eum aperiam facilis",
      listitems3: "Id quibusdam corporis et voluptate minus",
      listitems4: "Qui internos impedit vel unde",
    },
    {
      id: 2,
      bannerheading: "The Role of HR Analytics in Data-Driven Decision Making",
      subname: "Human Resources",
      bannertext: `Human Resources (HR) analytics, also known as people analytics, involves gathering, analyzing, and interpreting data related to human resources. `,
      explore: "Explore More",
      path: "/blog",
      img: blog2,
      toptext: "By Babitha on April 25, 2025 - 4 min read",

      firstheading: "Introduction to HR Analytics",
      secondheading: "Benefits of Data-Driven Decision Making",
      thirdheading: "Implementing HR Analytics",
      fourthheading: "Challenges and Considerations",

      firstpara:
        "Human Resources (HR) analytics, also known as people analytics, involves gathering, analyzing, and interpreting data related to human resources. It helps organizations make informed decisions based on data rather than intuition or experience alone. In today’s competitive business environment, leveraging HR analytics has become crucial for effective workforce planning and management.",
      secondpara:
        "Data-driven decision making in HR offers numerous benefits. It enhances the ability to predict future trends, improve employee performance, and increase overall organizational efficiency. By analyzing data, HR professionals can identify patterns and trends that may not be visible at first glance. This leads to more strategic decisions that align with long-term business goals.",
      thirdpara:
        "Implementing HR analytics involves collecting data from various sources such as employee performance reviews, attendance records, and engagement surveys. Advanced analytical tools and software can then process this data to provide actionable insights. It is essential to ensure data accuracy and integrity for reliable analysis. Organizations should also invest in training HR professionals to effectively interpret and utilize the data.",
      fourthpara:
        "While HR analytics offers substantial benefits, it also comes with challenges. Data privacy and security are critical concerns, as handling sensitive employee information requires strict compliance with regulations. Additionally, integrating data from disparate sources can be complex and time-consuming. Organizations must address these challenges to fully realize the potential of HR analytics in data-driven decision making.",

      listitems1: "Non magni quisquam",
      listitems2: "Eum aperiam facilis",
      listitems3: "Id quibusdam corporis et voluptate minus",
      listitems4: "Qui internos impedit vel unde",
    },
    {
      id: 3,
      bannerheading:
        "The Vital Role of Leadership Development and Succession Planning",
      subname: "Business Management",
      bannertext: `In today’s fast-paced business environment, leadership development is more crucial than ever. Companies need to invest in nurturing their future leaders .`,
      explore: "Explore More",
      path: "/blog",
      img: blog3,
      toptext: "By Babitha on April 26, 2025 - 6 min read",

      firstheading: "Understanding Leadership Development",
      secondheading: "The Importance of Succession Planning",
      thirdheading:
        "Integrating Leadership Development with Succession Planning",
      fourthheading: "",

      firstpara:
        "In today’s fast-paced business environment, leadership development is more crucial than ever. Companies need to invest in nurturing their future leaders to ensure they are prepared to tackle challenges and drive the organization forward. Leadership development encompasses a range of activities such as mentoring, training programs, and hands-on experience that help individuals enhance their leadership skills and competencies.",
      secondpara:
        "Succession planning is a strategic approach to ensure that businesses have the right leaders ready to step into key roles when needed. It involves identifying and developing potential leaders within the organization who can fill critical positions as they become available. This proactive approach minimizes disruptions and ensures continuity in leadership, which is vital for maintaining organizational stability and achieving long-term goals.",
      thirdpara:
        "  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      fourthpara:
        "Combining leadership development with succession planning creates a robust framework for building a strong leadership pipeline. Organizations should identify high-potential employees early on and provide them with targeted development opportunities. By aligning leadership development initiatives with succession planning, companies can ensure that their future leaders are well-equipped to take on greater responsibilities and lead the organization to success.In conclusion, leadership development and succession planning are interconnected processes that play a vital role in the sustained success of any organization. By focusing on these areas, companies can build a resilient leadership team capable of navigating future challenges and driving growth.",

      listitems1: "Non magni quisquam",
      listitems2: "Eum aperiam facilis",
      listitems3: "Id quibusdam corporis et voluptate minus",
      listitems4: "Qui internos impedit vel unde",
    },
    // {
    //   id: 4,
    //   Name: "Transforming Ambition Into Achievement",
    //   subname: "Lorem Ipsum",
    //   para: `   Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    //             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
    //   explore: "Explore More",
    //   path: "/blog",
    // },
  ];

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
        handleCloseForm();
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error submitting the form. Please check your connection.");
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
            Join a purpose-driven HR consulting firm where innovation, growth, and people-first values shape every career. At Sapience Minds, your expertise finds meaningful impact.
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
                  Sharpen your HR expertise with hands-on learning from industry leaders and real-world projects.
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
                  Get rewarded for results with performance-based incentives that recognize your contributions.
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
                  We care for your well-being comprehensive health and insurance coverage is part of our promise.
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
                  Access resources, tools, and mentorship that encourage constant growth and career development.
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
                  Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat hendrerit lacus. 
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
                  Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat hendrerit lacus. 
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
            At Sapience Minds, Driven by purpose, powered by people where HR innovation meets meaningful careers.
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
                  <Accordion
                    // data-aos="zoom-out"
                    expanded={expanded === "panel1"}
                    onChange={handleChange("panel1")}
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
                        <ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />
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
                        <p className="accordian_top_text" style={{ margin: 0 }}>
                          Marketing
                        </p>
                        <p className="accordia_header">Head of Product</p>
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
                              Type Pellentesque ullamcorper alique ultrices.
                              Aenean facilias vitea purus facilitias
                              semper.Supendisse eleifind nunc non virus
                              rhoncus.Nam posuere accumsan porta.
                            </p>
                            <div className="accordian_left_layer2">
                              <h1 className="accordian_layer2_heading">
                                Job Description
                              </h1>
                              <div className="accordian_list_items_outer">
                                <li className="accordian_layer2_list_items">
                                  Type Pellentesque ullamscoper aliquet
                                  ultrices.Aenean facilisis vitae purus
                                  facilisis semper.
                                </li>
                                <li className="accordian_layer2_list_items">
                                  Type Pellentesque ullamscoper aliquet
                                  ultrices.Aenean facilisis vitae purus
                                  facilisis semper.
                                </li>
                                <li className="accordian_layer2_list_items">
                                  Type Pellentesque ullamscoper aliquet
                                  ultrices.Aenean facilisis vitae purus
                                  facilisis semper.
                                </li>
                              </div>
                            </div>
                            <div className="accordian_left_layer3">
                              <h1 className="accordian_layer3_heading">
                                Requirements
                              </h1>
                              <div className="accordian_layer3_list_items_oueter">
                                <li className="accordian_layer3_list_items">
                                  Type Pellentesque ullamscoper aliquet
                                  ultrices.Aenean facilisis vitae purus
                                  facilisis semper.
                                </li>
                                <li className="accordian_layer3_list_items">
                                  Type Pellentesque ullamscoper aliquet
                                  ultrices.Aenean facilisis vitae purus
                                  facilisis semper.
                                </li>
                                <li className="accordian_layer3_list_items">
                                  Type Pellentesque ullamscoper aliquet
                                  ultrices.Aenean facilisis vitae purus
                                  facilisis semper.
                                </li>
                              </div>
                            </div>
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
                              <button>Apply Now</button>
                            </div>
                            <div className="accordian_right_details_outer">
                              <div className="detalis_items">
                                <p className="lef_item">Location</p>
                                <p className="right_item">Bandung</p>
                              </div>
                              <div className="detalis_items">
                                <p className="lef_item">Type</p>
                                <p className="right_item">Full Time</p>
                              </div>
                              <div className="detalis_items">
                                <p className="lef_item">Qualification</p>
                                <p className="right_item">Fresh Graduation</p>
                              </div>
                              <div className="detalis_items">
                                <p className="lef_item">Posted</p>
                                <p className="right_item">22 jan 2023</p>
                              </div>
                            </div>

                            <div className="right_buttons">
                              <div className="right_help_button_outer">
                                <button
                                  onClick={() =>
                                    handleOpenForm("Career-All-Head of Product")
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

                  <Accordion
                    // data-aos="zoom-out"
                    expanded={expanded === "panel2"}
                    onChange={handleChange("panel2")}
                    disableGutters
                    elevation={0}
                    square
                    sx={{
                      width: "100%",
                      // height: expanded ? 'auto' : '6vw',
                      transition: "all 0.3s ease",
                      marginTop: "3vw",
                      backgroundColor: "white",
                      //   border:"none"
                      border: "2px solid white",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={
                        <ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />
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
                      >
                        <p className="accordian_top_text" style={{ margin: 0 }}>
                          Design
                        </p>
                        <p className="accordia_header">
                          Staff Product Designer
                        </p>
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
                              Type Pellentesque ullamcorper alique ultrices.
                              Aenean facilias vitea purus facilitias
                              semper.Supendisse eleifind nunc non virus
                              rhoncus.Nam posuere accumsan porta.
                            </p>
                            <div className="accordian_left_layer2">
                              <h1 className="accordian_layer2_heading">
                                Job Description
                              </h1>
                              <div className="accordian_list_items_outer">
                                <li className="accordian_layer2_list_items">
                                  Type Pellentesque ullamscoper aliquet
                                  ultrices.Aenean facilisis vitae purus
                                  facilisis semper.
                                </li>
                                <li className="accordian_layer2_list_items">
                                  Type Pellentesque ullamscoper aliquet
                                  ultrices.Aenean facilisis vitae purus
                                  facilisis semper.
                                </li>
                                <li className="accordian_layer2_list_items">
                                  Type Pellentesque ullamscoper aliquet
                                  ultrices.Aenean facilisis vitae purus
                                  facilisis semper.
                                </li>
                              </div>
                            </div>
                            <div className="accordian_left_layer3">
                              <h1 className="accordian_layer3_heading">
                                Requirements
                              </h1>
                              <div className="accordian_layer3_list_items_oueter">
                                <li className="accordian_layer3_list_items">
                                  Type Pellentesque ullamscoper aliquet
                                  ultrices.Aenean facilisis vitae purus
                                  facilisis semper.
                                </li>
                                <li className="accordian_layer3_list_items">
                                  Type Pellentesque ullamscoper aliquet
                                  ultrices.Aenean facilisis vitae purus
                                  facilisis semper.
                                </li>
                                <li className="accordian_layer3_list_items">
                                  Type Pellentesque ullamscoper aliquet
                                  ultrices.Aenean facilisis vitae purus
                                  facilisis semper.
                                </li>
                              </div>
                            </div>
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
                              <button>Apply Now</button>
                            </div>
                            <div className="accordian_right_details_outer">
                              <div className="detalis_items">
                                <p className="lef_item">Location</p>
                                <p className="right_item">Bandung</p>
                              </div>
                              <div className="detalis_items">
                                <p className="lef_item">Type</p>
                                <p className="right_item">Full Time</p>
                              </div>
                              <div className="detalis_items">
                                <p className="lef_item">Quealification</p>
                                <p className="right_item">Fresh Graduation</p>
                              </div>
                              <div className="detalis_items">
                                <p className="lef_item">Posted</p>
                                <p className="right_item">22 jan 2023</p>
                              </div>
                            </div>

                            <div className="right_buttons">
                              <div className="right_help_button_outer">
                                <button
                                  onClick={() =>
                                    handleOpenForm(
                                      "Career-All- Staff Product Designer"
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

                  <Accordion
                    // data-aos="zoom-out"
                    expanded={expanded === "panel3"}
                    onChange={handleChange("panel3")}
                    disableGutters
                    elevation={0}
                    square
                    sx={{
                      width: "100%",
                      // height: expanded ? 'auto' : '6vw',
                      transition: "all 0.3s ease",
                      marginTop: "3vw",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={
                        <ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />
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
                      >
                        <p className="accordian_top_text" style={{ margin: 0 }}>
                          Product
                        </p>
                        <p className="accordia_header">
                          Senior Product Manager, Asset
                        </p>
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
                              Type Pellentesque ullamcorper alique ultrices.
                              Aenean facilias vitea purus facilitias
                              semper.Supendisse eleifind nunc non virus
                              rhoncus.Nam posuere accumsan porta.
                            </p>
                            <div className="accordian_left_layer2">
                              <h1 className="accordian_layer2_heading">
                                Job Description
                              </h1>
                              <div className="accordian_list_items_outer">
                                <li className="accordian_layer2_list_items">
                                  Type Pellentesque ullamscoper aliquet
                                  ultrices.Aenean facilisis vitae purus
                                  facilisis semper.
                                </li>
                                <li className="accordian_layer2_list_items">
                                  Type Pellentesque ullamscoper aliquet
                                  ultrices.Aenean facilisis vitae purus
                                  facilisis semper.
                                </li>
                                <li className="accordian_layer2_list_items">
                                  Type Pellentesque ullamscoper aliquet
                                  ultrices.Aenean facilisis vitae purus
                                  facilisis semper.
                                </li>
                              </div>
                            </div>
                            <div className="accordian_left_layer3">
                              <h1 className="accordian_layer3_heading">
                                Requirements
                              </h1>
                              <div className="accordian_layer3_list_items_oueter">
                                <li className="accordian_layer3_list_items">
                                  Type Pellentesque ullamscoper aliquet
                                  ultrices.Aenean facilisis vitae purus
                                  facilisis semper.
                                </li>
                                <li className="accordian_layer3_list_items">
                                  Type Pellentesque ullamscoper aliquet
                                  ultrices.Aenean facilisis vitae purus
                                  facilisis semper.
                                </li>
                                <li className="accordian_layer3_list_items">
                                  Type Pellentesque ullamscoper aliquet
                                  ultrices.Aenean facilisis vitae purus
                                  facilisis semper.
                                </li>
                              </div>
                            </div>
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
                              <button>Apply Now</button>
                            </div>
                            <div className="accordian_right_details_outer">
                              <div className="detalis_items">
                                <p className="lef_item">Location</p>
                                <p className="right_item">Bandung</p>
                              </div>
                              <div className="detalis_items">
                                <p className="lef_item">Type</p>
                                <p className="right_item">Full Time</p>
                              </div>
                              <div className="detalis_items">
                                <p className="lef_item">Quealification</p>
                                <p className="right_item">Fresh Graduation</p>
                              </div>
                              <div className="detalis_items">
                                <p className="lef_item">Posted</p>
                                <p className="right_item">22 jan 2023</p>
                              </div>
                            </div>

                            <div className="right_buttons">
                              <div className="right_help_button_outer">
                                <button
                                  onClick={() =>
                                    handleOpenForm(
                                      "Career-All-Senior Product Manager, Asset"
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

                  <Accordion
                    // data-aos="zoom-out"
                    expanded={expanded === "panel4"}
                    onChange={handleChange("panel4")}
                    disableGutters
                    elevation={0}
                    square
                    sx={{
                      width: "100%",
                      // height: expanded ? 'auto' : '6vw',
                      transition: "all 0.3s ease",
                      marginTop: "3vw",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={
                        <ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />
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
                      >
                        <p className="accordian_top_text" style={{ margin: 0 }}>
                          Engineering
                        </p>
                        <p className="accordia_header">Backend Engineer</p>
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
                              Type Pellentesque ullamcorper alique ultrices.
                              Aenean facilias vitea purus facilitias
                              semper.Supendisse eleifind nunc non virus
                              rhoncus.Nam posuere accumsan porta.
                            </p>
                            <div className="accordian_left_layer2">
                              <h1 className="accordian_layer2_heading">
                                Job Description
                              </h1>
                              <div className="accordian_list_items_outer">
                                <li className="accordian_layer2_list_items">
                                  Type Pellentesque ullamscoper aliquet
                                  ultrices.Aenean facilisis vitae purus
                                  facilisis semper.
                                </li>
                                <li className="accordian_layer2_list_items">
                                  Type Pellentesque ullamscoper aliquet
                                  ultrices.Aenean facilisis vitae purus
                                  facilisis semper.
                                </li>
                                <li className="accordian_layer2_list_items">
                                  Type Pellentesque ullamscoper aliquet
                                  ultrices.Aenean facilisis vitae purus
                                  facilisis semper.
                                </li>
                              </div>
                            </div>
                            <div className="accordian_left_layer3">
                              <h1 className="accordian_layer3_heading">
                                Requirements
                              </h1>
                              <div className="accordian_layer3_list_items_oueter">
                                <li className="accordian_layer3_list_items">
                                  Type Pellentesque ullamscoper aliquet
                                  ultrices.Aenean facilisis vitae purus
                                  facilisis semper.
                                </li>
                                <li className="accordian_layer3_list_items">
                                  Type Pellentesque ullamscoper aliquet
                                  ultrices.Aenean facilisis vitae purus
                                  facilisis semper.
                                </li>
                                <li className="accordian_layer3_list_items">
                                  Type Pellentesque ullamscoper aliquet
                                  ultrices.Aenean facilisis vitae purus
                                  facilisis semper.
                                </li>
                              </div>
                            </div>
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
                              <button>Apply Now</button>
                            </div>
                            <div className="accordian_right_details_outer">
                              <div className="detalis_items">
                                <p className="lef_item">Location</p>
                                <p className="right_item">Bandung</p>
                              </div>
                              <div className="detalis_items">
                                <p className="lef_item">Type</p>
                                <p className="right_item">Full Time</p>
                              </div>
                              <div className="detalis_items">
                                <p className="lef_item">Quealification</p>
                                <p className="right_item">Fresh Graduation</p>
                              </div>
                              <div className="detalis_items">
                                <p className="lef_item">Posted</p>
                                <p className="right_item">22 jan 2023</p>
                              </div>
                            </div>

                            <div className="right_buttons">
                              <div className="right_help_button_outer">
                                <button
                                  onClick={() =>
                                    handleOpenForm(
                                      "Career-All-Backend Engineer"
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

                  <Accordion
                    // data-aos="zoom-out"
                    expanded={expanded === "panel5"}
                    onChange={handleChange("panel5")}
                    disableGutters
                    elevation={0}
                    square
                    sx={{
                      width: "100%",
                      // height: expanded ? 'auto' : '6vw',
                      transition: "all 0.3s ease",
                      marginTop: "3vw",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={
                        <ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />
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
                      >
                        <p className="accordian_top_text" style={{ margin: 0 }}>
                          Engineering
                        </p>
                        <p className="accordia_header">
                          Senior Backend Engineer
                        </p>
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
                              Type Pellentesque ullamcorper alique ultrices.
                              Aenean facilias vitea purus facilitias
                              semper.Supendisse eleifind nunc non virus
                              rhoncus.Nam posuere accumsan porta.
                            </p>
                            <div className="accordian_left_layer2">
                              <h1 className="accordian_layer2_heading">
                                Job Description
                              </h1>
                              <div className="accordian_list_items_outer">
                                <li className="accordian_layer2_list_items">
                                  Type Pellentesque ullamscoper aliquet
                                  ultrices.Aenean facilisis vitae purus
                                  facilisis semper.
                                </li>
                                <li className="accordian_layer2_list_items">
                                  Type Pellentesque ullamscoper aliquet
                                  ultrices.Aenean facilisis vitae purus
                                  facilisis semper.
                                </li>
                                <li className="accordian_layer2_list_items">
                                  Type Pellentesque ullamscoper aliquet
                                  ultrices.Aenean facilisis vitae purus
                                  facilisis semper.
                                </li>
                              </div>
                            </div>
                            <div className="accordian_left_layer3">
                              <h1 className="accordian_layer3_heading">
                                Requirements
                              </h1>
                              <div className="accordian_layer3_list_items_oueter">
                                <li className="accordian_layer3_list_items">
                                  Type Pellentesque ullamscoper aliquet
                                  ultrices.Aenean facilisis vitae purus
                                  facilisis semper.
                                </li>
                                <li className="accordian_layer3_list_items">
                                  Type Pellentesque ullamscoper aliquet
                                  ultrices.Aenean facilisis vitae purus
                                  facilisis semper.
                                </li>
                                <li className="accordian_layer3_list_items">
                                  Type Pellentesque ullamscoper aliquet
                                  ultrices.Aenean facilisis vitae purus
                                  facilisis semper.
                                </li>
                              </div>
                            </div>
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
                              <button>Apply Now</button>
                            </div>
                            <div className="accordian_right_details_outer">
                              <div className="detalis_items">
                                <p className="lef_item">Location</p>
                                <p className="right_item">Bandung</p>
                              </div>
                              <div className="detalis_items">
                                <p className="lef_item">Type</p>
                                <p className="right_item">Full Time</p>
                              </div>
                              <div className="detalis_items">
                                <p className="lef_item">Quealification</p>
                                <p className="right_item">Fresh Graduation</p>
                              </div>
                              <div className="detalis_items">
                                <p className="lef_item">Posted</p>
                                <p className="right_item">22 jan 2023</p>
                              </div>
                            </div>

                            <div className="right_buttons">
                              <div className="right_help_button_outer">
                                <button
                                  onClick={() =>
                                    handleOpenForm(
                                      "Career-All-Senior Backend Engineer"
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

                  <Accordion
                    // data-aos="zoom-out"
                    expanded={expanded === "panel6"}
                    onChange={handleChange("panel6")}
                    disableGutters
                    elevation={0}
                    square
                    sx={{
                      width: "100%",
                      // height: expanded ? 'auto' : '6vw',
                      transition: "all 0.3s ease",
                      marginTop: "3vw",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={
                        <ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />
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
                      >
                        <p className="accordian_top_text" style={{ margin: 0 }}>
                          Engineering
                        </p>
                        <p className="accordia_header">
                          Senior Frontend Engineer
                        </p>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails
                      sx={{
                        padding: 2,
                        backgroundColor: "none",
                      }}
                    >
                      <Typography>
                        <div className="accoridian_content_outer">
                          <div className="accordain_left">
                            <p className="accordian_left_para">
                              Type Pellentesque ullamcorper alique ultrices.
                              Aenean facilias vitea purus facilitias
                              semper.Supendisse eleifind nunc non virus
                              rhoncus.Nam posuere accumsan porta.
                            </p>
                            <div className="accordian_left_layer2">
                              <h1 className="accordian_layer2_heading">
                                Job Description
                              </h1>
                              <div className="accordian_list_items_outer">
                                <li className="accordian_layer2_list_items">
                                  Type Pellentesque ullamscoper aliquet
                                  ultrices.Aenean facilisis vitae purus
                                  facilisis semper.
                                </li>
                                <li className="accordian_layer2_list_items">
                                  Type Pellentesque ullamscoper aliquet
                                  ultrices.Aenean facilisis vitae purus
                                  facilisis semper.
                                </li>
                                <li className="accordian_layer2_list_items">
                                  Type Pellentesque ullamscoper aliquet
                                  ultrices.Aenean facilisis vitae purus
                                  facilisis semper.
                                </li>
                              </div>
                            </div>
                            <div className="accordian_left_layer3">
                              <h1 className="accordian_layer3_heading">
                                Requirements
                              </h1>
                              <div className="accordian_layer3_list_items_oueter">
                                <li className="accordian_layer3_list_items">
                                  Type Pellentesque ullamscoper aliquet
                                  ultrices.Aenean facilisis vitae purus
                                  facilisis semper.
                                </li>
                                <li className="accordian_layer3_list_items">
                                  Type Pellentesque ullamscoper aliquet
                                  ultrices.Aenean facilisis vitae purus
                                  facilisis semper.
                                </li>
                                <li className="accordian_layer3_list_items">
                                  Type Pellentesque ullamscoper aliquet
                                  ultrices.Aenean facilisis vitae purus
                                  facilisis semper.
                                </li>
                              </div>
                            </div>
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
                              <button>Apply Now</button>
                            </div>
                            <div className="accordian_right_details_outer">
                              <div className="detalis_items">
                                <p className="lef_item">Location</p>
                                <p className="right_item">Bandung</p>
                              </div>
                              <div className="detalis_items">
                                <p className="lef_item">Type</p>
                                <p className="right_item">Full Time</p>
                              </div>
                              <div className="detalis_items">
                                <p className="lef_item">Quealification</p>
                                <p className="right_item">Fresh Graduation</p>
                              </div>
                              <div className="detalis_items">
                                <p className="lef_item">Posted</p>
                                <p className="right_item">22 jan 2023</p>
                              </div>
                            </div>

                            <div className="right_buttons">
                              <div className="right_help_button_outer">
                                <button
                                  onClick={() =>
                                    handleOpenForm(
                                      "Career-All-Senior Frontend Engineer"
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
                </>
              )}

              {activeNav === "Our" && (
                <>
                  <Accordion
                    data-aos="zoom-out"
                    expanded={expanded === "panel1"}
                    onChange={handleChange("panel1")}
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
                        <ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />
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
                        <p className="accordian_top_text" style={{ margin: 0 }}>
                          Marketing
                        </p>
                        <p className="accordia_header">Head of Product</p>
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
                              Type Pellentesque ullamcorper alique ultrices.
                              Aenean facilias vitea purus facilitias
                              semper.Supendisse eleifind nunc non virus
                              rhoncus.Nam posuere accumsan porta.
                            </p>
                            <div className="accordian_left_layer2">
                              <h1 className="accordian_layer2_heading">
                                Job Description
                              </h1>
                              <div className="accordian_list_items_outer">
                                <li className="accordian_layer2_list_items">
                                  Type Pellentesque ullamscoper aliquet
                                  ultrices.Aenean facilisis vitae purus
                                  facilisis semper.
                                </li>
                                <li className="accordian_layer2_list_items">
                                  Type Pellentesque ullamscoper aliquet
                                  ultrices.Aenean facilisis vitae purus
                                  facilisis semper.
                                </li>
                                <li className="accordian_layer2_list_items">
                                  Type Pellentesque ullamscoper aliquet
                                  ultrices.Aenean facilisis vitae purus
                                  facilisis semper.
                                </li>
                              </div>
                            </div>
                            <div className="accordian_left_layer3">
                              <h1 className="accordian_layer3_heading">
                                Requirements
                              </h1>
                              <div className="accordian_layer3_list_items_oueter">
                                <li className="accordian_layer3_list_items">
                                  Type Pellentesque ullamscoper aliquet
                                  ultrices.Aenean facilisis vitae purus
                                  facilisis semper.
                                </li>
                                <li className="accordian_layer3_list_items">
                                  Type Pellentesque ullamscoper aliquet
                                  ultrices.Aenean facilisis vitae purus
                                  facilisis semper.
                                </li>
                                <li className="accordian_layer3_list_items">
                                  Type Pellentesque ullamscoper aliquet
                                  ultrices.Aenean facilisis vitae purus
                                  facilisis semper.
                                </li>
                              </div>
                            </div>
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
                              <button>Apply Now</button>
                            </div>
                            <div className="accordian_right_details_outer">
                              <div className="detalis_items">
                                <p className="lef_item">Location</p>
                                <p className="right_item">Bandung</p>
                              </div>
                              <div className="detalis_items">
                                <p className="lef_item">Type</p>
                                <p className="right_item">Full Time</p>
                              </div>
                              <div className="detalis_items">
                                <p className="lef_item">Quealification</p>
                                <p className="right_item">Fresh Graduation</p>
                              </div>
                              <div className="detalis_items">
                                <p className="lef_item">Posted</p>
                                <p className="right_item">22 jan 2023</p>
                              </div>
                            </div>

                            <div className="right_buttons">
                              <div className="right_help_button_outer">
                                <button
                                  onClick={() =>
                                    handleOpenForm("Career-Our-Head of Product")
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

                  <Accordion
                    data-aos="zoom-out"
                    expanded={expanded === "panel2"}
                    onChange={handleChange("panel2")}
                    disableGutters
                    elevation={0}
                    square
                    sx={{
                      width: "100%",
                      // height: expanded ? 'auto' : '6vw',
                      transition: "all 0.3s ease",
                      marginTop: "3vw",
                      backgroundColor: "white",
                      //   border:"none"
                      border: "2px solid white",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={
                        <ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />
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
                      >
                        <p className="accordian_top_text" style={{ margin: 0 }}>
                          Design
                        </p>
                        <p className="accordia_header">
                          Staff Product Designer
                        </p>
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
                              Type Pellentesque ullamcorper alique ultrices.
                              Aenean facilias vitea purus facilitias
                              semper.Supendisse eleifind nunc non virus
                              rhoncus.Nam posuere accumsan porta.
                            </p>
                            <div className="accordian_left_layer2">
                              <h1 className="accordian_layer2_heading">
                                Job Description
                              </h1>
                              <div className="accordian_list_items_outer">
                                <li className="accordian_layer2_list_items">
                                  Type Pellentesque ullamscoper aliquet
                                  ultrices.Aenean facilisis vitae purus
                                  facilisis semper.
                                </li>
                                <li className="accordian_layer2_list_items">
                                  Type Pellentesque ullamscoper aliquet
                                  ultrices.Aenean facilisis vitae purus
                                  facilisis semper.
                                </li>
                                <li className="accordian_layer2_list_items">
                                  Type Pellentesque ullamscoper aliquet
                                  ultrices.Aenean facilisis vitae purus
                                  facilisis semper.
                                </li>
                              </div>
                            </div>
                            <div className="accordian_left_layer3">
                              <h1 className="accordian_layer3_heading">
                                Requirements
                              </h1>
                              <div className="accordian_layer3_list_items_oueter">
                                <li className="accordian_layer3_list_items">
                                  Type Pellentesque ullamscoper aliquet
                                  ultrices.Aenean facilisis vitae purus
                                  facilisis semper.
                                </li>
                                <li className="accordian_layer3_list_items">
                                  Type Pellentesque ullamscoper aliquet
                                  ultrices.Aenean facilisis vitae purus
                                  facilisis semper.
                                </li>
                                <li className="accordian_layer3_list_items">
                                  Type Pellentesque ullamscoper aliquet
                                  ultrices.Aenean facilisis vitae purus
                                  facilisis semper.
                                </li>
                              </div>
                            </div>
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
                              <button>Apply Now</button>
                            </div>
                            <div className="accordian_right_details_outer">
                              <div className="detalis_items">
                                <p className="lef_item">Location</p>
                                <p className="right_item">Bandung</p>
                              </div>
                              <div className="detalis_items">
                                <p className="lef_item">Type</p>
                                <p className="right_item">Full Time</p>
                              </div>
                              <div className="detalis_items">
                                <p className="lef_item">Quealification</p>
                                <p className="right_item">Fresh Graduation</p>
                              </div>
                              <div className="detalis_items">
                                <p className="lef_item">Posted</p>
                                <p className="right_item">22 jan 2023</p>
                              </div>
                            </div>

                            <div className="right_buttons">
                              <div className="right_help_button_outer">
                                <button
                                  onClick={() =>
                                    handleOpenForm(
                                      "Career-Our-Staff Product Designer"
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

                  <Accordion
                    data-aos="zoom-out"
                    expanded={expanded === "panel3"}
                    onChange={handleChange("panel3")}
                    disableGutters
                    elevation={0}
                    square
                    sx={{
                      width: "100%",
                      // height: expanded ? 'auto' : '6vw',
                      transition: "all 0.3s ease",
                      marginTop: "3vw",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={
                        <ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />
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
                      >
                        <p className="accordian_top_text" style={{ margin: 0 }}>
                          Product
                        </p>
                        <p className="accordia_header">
                          Senior Product Manager, Asset
                        </p>
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
                              Type Pellentesque ullamcorper alique ultrices.
                              Aenean facilias vitea purus facilitias
                              semper.Supendisse eleifind nunc non virus
                              rhoncus.Nam posuere accumsan porta.
                            </p>
                            <div className="accordian_left_layer2">
                              <h1 className="accordian_layer2_heading">
                                Job Description
                              </h1>
                              <div className="accordian_list_items_outer">
                                <li className="accordian_layer2_list_items">
                                  Type Pellentesque ullamscoper aliquet
                                  ultrices.Aenean facilisis vitae purus
                                  facilisis semper.
                                </li>
                                <li className="accordian_layer2_list_items">
                                  Type Pellentesque ullamscoper aliquet
                                  ultrices.Aenean facilisis vitae purus
                                  facilisis semper.
                                </li>
                                <li className="accordian_layer2_list_items">
                                  Type Pellentesque ullamscoper aliquet
                                  ultrices.Aenean facilisis vitae purus
                                  facilisis semper.
                                </li>
                              </div>
                            </div>
                            <div className="accordian_left_layer3">
                              <h1 className="accordian_layer3_heading">
                                Requirements
                              </h1>
                              <div className="accordian_layer3_list_items_oueter">
                                <li className="accordian_layer3_list_items">
                                  Type Pellentesque ullamscoper aliquet
                                  ultrices.Aenean facilisis vitae purus
                                  facilisis semper.
                                </li>
                                <li className="accordian_layer3_list_items">
                                  Type Pellentesque ullamscoper aliquet
                                  ultrices.Aenean facilisis vitae purus
                                  facilisis semper.
                                </li>
                                <li className="accordian_layer3_list_items">
                                  Type Pellentesque ullamscoper aliquet
                                  ultrices.Aenean facilisis vitae purus
                                  facilisis semper.
                                </li>
                              </div>
                            </div>
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
                              <button>Apply Now</button>
                            </div>
                            <div className="accordian_right_details_outer">
                              <div className="detalis_items">
                                <p className="lef_item">Location</p>
                                <p className="right_item">Bandung</p>
                              </div>
                              <div className="detalis_items">
                                <p className="lef_item">Type</p>
                                <p className="right_item">Full Time</p>
                              </div>
                              <div className="detalis_items">
                                <p className="lef_item">Quealification</p>
                                <p className="right_item">Fresh Graduation</p>
                              </div>
                              <div className="detalis_items">
                                <p className="lef_item">Posted</p>
                                <p className="right_item">22 jan 2023</p>
                              </div>
                            </div>

                            <div className="right_buttons">
                              <div className="right_help_button_outer">
                                <button
                                  onClick={() =>
                                    handleOpenForm(
                                      "Career-Our-Senior Product Manager, Asset"
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
                </>
              )}

              {activeNav === "Clients" && (
                <>
                  <Accordion
                    // data-aos="zoom-out"
                    expanded={expanded === "panel4"}
                    onChange={handleChange("panel4")}
                    disableGutters
                    elevation={0}
                    square
                    sx={{
                      width: "100%",
                      // height: expanded ? 'auto' : '6vw',
                      transition: "all 0.3s ease",
                      marginTop: "3vw",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={
                        <ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />
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
                      >
                        <p className="accordian_top_text" style={{ margin: 0 }}>
                          Engineering
                        </p>
                        <p className="accordia_header">Backend Engineer</p>
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
                              Type Pellentesque ullamcorper alique ultrices.
                              Aenean facilias vitea purus facilitias
                              semper.Supendisse eleifind nunc non virus
                              rhoncus.Nam posuere accumsan porta.
                            </p>
                            <div className="accordian_left_layer2">
                              <h1 className="accordian_layer2_heading">
                                Job Description
                              </h1>
                              <div className="accordian_list_items_outer">
                                <li className="accordian_layer2_list_items">
                                  Type Pellentesque ullamscoper aliquet
                                  ultrices.Aenean facilisis vitae purus
                                  facilisis semper.
                                </li>
                                <li className="accordian_layer2_list_items">
                                  Type Pellentesque ullamscoper aliquet
                                  ultrices.Aenean facilisis vitae purus
                                  facilisis semper.
                                </li>
                                <li className="accordian_layer2_list_items">
                                  Type Pellentesque ullamscoper aliquet
                                  ultrices.Aenean facilisis vitae purus
                                  facilisis semper.
                                </li>
                              </div>
                            </div>
                            <div className="accordian_left_layer3">
                              <h1 className="accordian_layer3_heading">
                                Requirements
                              </h1>
                              <div className="accordian_layer3_list_items_oueter">
                                <li className="accordian_layer3_list_items">
                                  Type Pellentesque ullamscoper aliquet
                                  ultrices.Aenean facilisis vitae purus
                                  facilisis semper.
                                </li>
                                <li className="accordian_layer3_list_items">
                                  Type Pellentesque ullamscoper aliquet
                                  ultrices.Aenean facilisis vitae purus
                                  facilisis semper.
                                </li>
                                <li className="accordian_layer3_list_items">
                                  Type Pellentesque ullamscoper aliquet
                                  ultrices.Aenean facilisis vitae purus
                                  facilisis semper.
                                </li>
                              </div>
                            </div>
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
                              <button>Apply Now</button>
                            </div>
                            <div className="accordian_right_details_outer">
                              <div className="detalis_items">
                                <p className="lef_item">Location</p>
                                <p className="right_item">Bandung</p>
                              </div>
                              <div className="detalis_items">
                                <p className="lef_item">Type</p>
                                <p className="right_item">Full Time</p>
                              </div>
                              <div className="detalis_items">
                                <p className="lef_item">Quealification</p>
                                <p className="right_item">Fresh Graduation</p>
                              </div>
                              <div className="detalis_items">
                                <p className="lef_item">Posted</p>
                                <p className="right_item">22 jan 2023</p>
                              </div>
                            </div>

                            <div className="right_buttons">
                              <div className="right_help_button_outer">
                                <button
                                  onClick={() =>
                                    handleOpenForm(
                                      " Career-Clients Backend Engineer"
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

                  <Accordion
                    data-aos="zoom-out"
                    expanded={expanded === "panel5"}
                    onChange={handleChange("panel5")}
                    disableGutters
                    elevation={0}
                    square
                    sx={{
                      width: "100%",
                      // height: expanded ? 'auto' : '6vw',
                      transition: "all 0.3s ease",
                      marginTop: "3vw",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={
                        <ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />
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
                      >
                        <p className="accordian_top_text" style={{ margin: 0 }}>
                          Engineering
                        </p>
                        <p className="accordia_header">
                          Senior Backend Engineer
                        </p>
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
                              Type Pellentesque ullamcorper alique ultrices.
                              Aenean facilias vitea purus facilitias
                              semper.Supendisse eleifind nunc non virus
                              rhoncus.Nam posuere accumsan porta.
                            </p>
                            <div className="accordian_left_layer2">
                              <h1 className="accordian_layer2_heading">
                                Job Description
                              </h1>
                              <div className="accordian_list_items_outer">
                                <li className="accordian_layer2_list_items">
                                  Type Pellentesque ullamscoper aliquet
                                  ultrices.Aenean facilisis vitae purus
                                  facilisis semper.
                                </li>
                                <li className="accordian_layer2_list_items">
                                  Type Pellentesque ullamscoper aliquet
                                  ultrices.Aenean facilisis vitae purus
                                  facilisis semper.
                                </li>
                                <li className="accordian_layer2_list_items">
                                  Type Pellentesque ullamscoper aliquet
                                  ultrices.Aenean facilisis vitae purus
                                  facilisis semper.
                                </li>
                              </div>
                            </div>
                            <div className="accordian_left_layer3">
                              <h1 className="accordian_layer3_heading">
                                Requirements
                              </h1>
                              <div className="accordian_layer3_list_items_oueter">
                                <li className="accordian_layer3_list_items">
                                  Type Pellentesque ullamscoper aliquet
                                  ultrices.Aenean facilisis vitae purus
                                  facilisis semper.
                                </li>
                                <li className="accordian_layer3_list_items">
                                  Type Pellentesque ullamscoper aliquet
                                  ultrices.Aenean facilisis vitae purus
                                  facilisis semper.
                                </li>
                                <li className="accordian_layer3_list_items">
                                  Type Pellentesque ullamscoper aliquet
                                  ultrices.Aenean facilisis vitae purus
                                  facilisis semper.
                                </li>
                              </div>
                            </div>
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
                              <button>Apply Now</button>
                            </div>
                            <div className="accordian_right_details_outer">
                              <div className="detalis_items">
                                <p className="lef_item">Location</p>
                                <p className="right_item">Bandung</p>
                              </div>
                              <div className="detalis_items">
                                <p className="lef_item">Type</p>
                                <p className="right_item">Full Time</p>
                              </div>
                              <div className="detalis_items">
                                <p className="lef_item">Quealification</p>
                                <p className="right_item">Fresh Graduation</p>
                              </div>
                              <div className="detalis_items">
                                <p className="lef_item">Posted</p>
                                <p className="right_item">22 jan 2023</p>
                              </div>
                            </div>

                            <div className="right_buttons">
                              <div className="right_help_button_outer">
                                <button
                                  onClick={() =>
                                    handleOpenForm(
                                      " Career-Clients Senior Backend Engineer"
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

                  <Accordion
                    data-aos="zoom-out"
                    expanded={expanded === "panel6"}
                    onChange={handleChange("panel6")}
                    disableGutters
                    elevation={0}
                    square
                    sx={{
                      width: "100%",
                      // height: expanded ? 'auto' : '6vw',
                      transition: "all 0.3s ease",
                      marginTop: "3vw",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={
                        <ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />
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
                      >
                        <p className="accordian_top_text" style={{ margin: 0 }}>
                          Engineering
                        </p>
                        <p className="accordia_header">
                          Senior Frontend Engineer
                        </p>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails
                      sx={{
                        padding: 2,
                        backgroundColor: "none",
                      }}
                    >
                      <Typography>
                        <div className="accoridian_content_outer">
                          <div className="accordain_left">
                            <p className="accordian_left_para">
                              Type Pellentesque ullamcorper alique ultrices.
                              Aenean facilias vitea purus facilitias
                              semper.Supendisse eleifind nunc non virus
                              rhoncus.Nam posuere accumsan porta.
                            </p>
                            <div className="accordian_left_layer2">
                              <h1 className="accordian_layer2_heading">
                                Job Description
                              </h1>
                              <div className="accordian_list_items_outer">
                                <li className="accordian_layer2_list_items">
                                  Type Pellentesque ullamscoper aliquet
                                  ultrices.Aenean facilisis vitae purus
                                  facilisis semper.
                                </li>
                                <li className="accordian_layer2_list_items">
                                  Type Pellentesque ullamscoper aliquet
                                  ultrices.Aenean facilisis vitae purus
                                  facilisis semper.
                                </li>
                                <li className="accordian_layer2_list_items">
                                  Type Pellentesque ullamscoper aliquet
                                  ultrices.Aenean facilisis vitae purus
                                  facilisis semper.
                                </li>
                              </div>
                            </div>
                            <div className="accordian_left_layer3">
                              <h1 className="accordian_layer3_heading">
                                Requirements
                              </h1>
                              <div className="accordian_layer3_list_items_oueter">
                                <li className="accordian_layer3_list_items">
                                  Type Pellentesque ullamscoper aliquet
                                  ultrices.Aenean facilisis vitae purus
                                  facilisis semper.
                                </li>
                                <li className="accordian_layer3_list_items">
                                  Type Pellentesque ullamscoper aliquet
                                  ultrices.Aenean facilisis vitae purus
                                  facilisis semper.
                                </li>
                                <li className="accordian_layer3_list_items">
                                  Type Pellentesque ullamscoper aliquet
                                  ultrices.Aenean facilisis vitae purus
                                  facilisis semper.
                                </li>
                              </div>
                            </div>
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
                              <button>Apply Now</button>
                            </div>
                            <div className="accordian_right_details_outer">
                              <div className="detalis_items">
                                <p className="lef_item">Location</p>
                                <p className="right_item">Bandung</p>
                              </div>
                              <div className="detalis_items">
                                <p className="lef_item">Type</p>
                                <p className="right_item">Full Time</p>
                              </div>
                              <div className="detalis_items">
                                <p className="lef_item">Quealification</p>
                                <p className="right_item">Fresh Graduation</p>
                              </div>
                              <div className="detalis_items">
                                <p className="lef_item">Posted</p>
                                <p className="right_item">22 jan 2023</p>
                              </div>
                            </div>

                            <div className="right_buttons">
                              <div className="right_help_button_outer">
                                <button
                                  onClick={() =>
                                    handleOpenForm(
                                      " Career-Clients-Senior Frontend Engineer"
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
                    src={data.img}
                    alt="card1"
                    className="carrier_card_img"
                  />
                </div>
                <div className="card_text_heading">
                  <h6 className="card_hading_one">{data?.bannerheading}</h6>
                  <p className="card_para">{data?.bannertext}</p>
                  <p
                    className="card_readmore"
                    onClick={() => handleSignleBlog(data, data.bannerheading)}
                  >
                    {data?.explore}
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
    </div>
  );
}

export default Carrier;
