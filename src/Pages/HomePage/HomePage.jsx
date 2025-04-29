import React, { useEffect, useRef, useState } from "react";
import "./HomePage.css";
import homeimg from "../../assets/HomePage/homeimg.svg";
import dots from "../../assets/HomePage/homedots.svg";
import leftvector from "../../assets/HomePage/leftvector.svg";
import rightvector from "../../assets/HomePage/rightvector.svg";
import { FaPeopleGroup } from "react-icons/fa6";
import dummylogo from "../../assets/HomePage/logo_1_1.svg";
import dummylogo_2 from "../../assets/HomePage/logo_2_2.png";
import dummylogo_3 from "../../assets/HomePage/logo_3_3.png";
import dummylogo_4 from "../../assets/HomePage/logo_4_4.png";
import layer4 from "../../assets/HomePage/home_img.svg";
import Smallicon1 from "../../assets/AboutPage/Smallicon1.svg";
import Smallicon2 from "../../assets/AboutPage/icon_3.svg";
import Smallicon3 from "../../assets/AboutPage/icon_4.svg";
import Smallicon4 from "../../assets/AboutPage/icon_5.svg";
import Smallicon5 from "../../assets/AboutPage/icon_6.svg";
import Smallicon6 from "../../assets/AboutPage/icon_7.svg";
import Smallicon7 from "../../assets/AboutPage/icon_8.svg";
import Smallicon8 from "../../assets/AboutPage/icon_9.svg";
import icon_1 from "../../assets/AboutPage/icon_1.svg";
import icon_2 from "../../assets/AboutPage/icon_2.svg";
import bg1 from "../../assets/HomePage/bg1.svg";
import bg2 from "../../assets/HomePage/bg2.svg";
import homevideo from "../../assets/HomePage/hmv.mp4";
import man from "../../assets/HomePage/Testimony_1.png";
import man_2 from "../../assets/HomePage/man_2.png";
import man_3 from "../../assets/HomePage/man_3.png";
import man_4 from "../../assets/HomePage/man_4.png";
import man_5 from "../../assets/HomePage/man_5.png";
import man_6 from "../../assets/HomePage/man_6.png";
import woman_1 from "../../assets/HomePage/woman_1.png";
import { PreFooter } from "../../Components/PreFooter/PreFooter";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, useNavigate } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { database, ref, get } from "../../Firebase/firebase";
import { Helmet } from "react-helmet-async";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import client1 from "../../assets/HomePage/image1.png"
import client2 from "../../assets/HomePage/image2.png"
import client3 from "../../assets/HomePage/image3.png"
import client4 from "../../assets/HomePage/image4.png"
import client5 from "../../assets/HomePage/image5.png"
import client6 from "../../assets/HomePage/image6.png"
import client7 from "../../assets/HomePage/image7.png"
import client8 from "../../assets/HomePage/image8.png"
import client9 from "../../assets/HomePage/image9.png"
import client10 from "../../assets/HomePage/image10.png"
import client11 from "../../assets/HomePage/image11.png"
import client12 from "../../assets/HomePage/image12.png"
import client13 from "../../assets/HomePage/image13.png"
import client14 from "../../assets/HomePage/image14.png"
import client15 from "../../assets/HomePage/image15.png"
import client16 from "../../assets/HomePage/image16.png"
import client17 from "../../assets/HomePage/image17.png"
import client18 from "../../assets/HomePage/image18.png"
import client19 from "../../assets/HomePage/image19.jpg"
import client20 from "../../assets/HomePage/image20.png"
import client21 from "../../assets/HomePage/image21.png"
import client22 from "../../assets/HomePage/image22.png"
import client23 from "../../assets/HomePage/image23.png"
import client24 from "../../assets/HomePage/image24.png"
import client25 from "../../assets/HomePage/image25.png"



export const HomePage = () => {
  const navigate = useNavigate();
  const [readMore, setReadMore] = useState(false);
  const [singleTestimonial, setSingleTestimonial] = useState(null);
  const swiperRef = useRef(null);
  const [Blogs, setBlogs] = useState([]);
  console.log(Blogs, "BlogsBlogs");

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

  const modalRef = useRef(null);

  const cardscontent = [
    {
      id: 1,
      Logo: Smallicon1,
      Head: "Learn More",
      subHead: "HR Compliance and Policy Development",
      para: "Stay compliant and confident. We design clear, startup-ready HR policies that protect your business and people alike.",
      path: "/hr-compliance",
    },
    {
      id: 2,
      Logo: Smallicon2,
      Head: "Learn More",
      subHead: "Customized HR Consulting and Advisory Services",
      para: "Whether you're scaling fast or setting up HR from scratch, our strategic insights align people decisions with business goals.",
      path: "/hr-consulting",
    },
    {
      id: 3,
      Logo: Smallicon3,
      Head: "Learn More",
      subHead: "Virtual CHRO and Outsourcing of HR Operations",
      para: "Get executive-level HR expertise without the full-time cost. We lead your HR function remotely with efficiency and care.",
      path: "/virtual-chro-and-outsourcing",
    },
    {
      id: 4,
      Logo: Smallicon4,
      Head: "Learn More",
      subHead: "Talent Acquisition Solutions",
      para: "Hiring shouldn’t be a hassle. From job role design to final offer, we craft a seamless talent journey for your team.",
      path: "/talent-acquisition-solutions",
    },
    {
      id: 4,
      Logo: Smallicon5,
      Head: "Learn More",
      subHead: "Talent Management Solutions",
      para: "Fuel performance and growth with development plans, reviews, and leadership pipelines built to scale with your startup.",
      path: "/talent-management",
    },
    {
      id: 6,
      Logo: Smallicon6,
      Head: "Learn More",
      subHead: "Talent Engagement & Retention",
      para: "Create a culture employees love. We craft engagement strategies that foster loyalty, purpose, and long-term retention.",
      path: "/talent-engagement",
    },
    {
      id: 7,
      Logo: Smallicon7,
      Head: "Learn More",
      subHead: "Recruitment of Leadership & Mid-Level Team",
      para: "Finding the right leaders is critical. We connect you with proven professionals who match your mission and mindset.",
      path: "/recruitment-of-leadership",
    },
    {
      id: 8,
      Logo: Smallicon8,
      Head: "Learn More",
      subHead: "Employee Insurance & Benefits",
      para: "Boost employee satisfaction with thoughtfully designed insurance and perks that support health, security, and morale.",
      path: "/employee-insurance-and-benefits",
    },
  ];

  const testmonials = [
    {
      id: 1,
      logo: "Logo",
      para: `I am happy to recommend Babitha for her exceptional contributions to our organization as a Human Resources professional. During her tenure, Babitha showcased an impressive array of skills that truly set her apart. Babitha's proficiency in communication and follow-up was unparalleled. She effectively liaised between departments, ensuring smooth communication channels and prompt responses. Her dedication to follow through on tasks ensured that things progressed seamlessly. Moreover, Babitha introduced invaluable processes to our recruitment procedures, streamlining operations and enhancing efficiency. Her comprehensive understanding of HR processes and regulations made her an invaluable resource for our organization. Babitha's knowledge and expertise not only optimized our recruitment efforts but also fostered a positive work environment conducive to growth and development. In summary, after a considerable time, I am delighted to have witnessed such an exceptional HR professional within our organization. Babitha's dedication, expertise, and ability to implement positive change make her a standout colleague and asset to any team fortunate enough to have her.`,
      img: man,
      bottomname: "Achutha Herur",
      bottomtext: "Technical Director, ESI Group",
    },
    {
      id: 2,
      logo: "Logo",
      para: `Babitha is a very strong HR Director I was lucky to work with for several years. I've hired Babitha to reinforce and to restructure the HR org in India (more than 300 people) and to take the lead on the different topics and to cover both sites (Bangalore and Pune). As Babitha was really capable and shown great aptitudes to the change management and the HR structuring, we've asked her to take part of Global and international HR projects to sustain the HR development all over the Group. If i would have the opportunity to work again with Babitha, I won't hesitate one sec as she is easy to work with, cooperative, problem solver and always very positive and smiling.`,
      img: man_2,
      bottomname: "Sylvain Cotin",
      bottomtext: "Senior Human Resources Director, OpenText",
    },
    {
      id: 3,
      logo: "Logo",
      para: `Babitha is a perfect example of an excellent Global HR director. She is focused, dependable & objectives-oriented. We worked with Babitha on various topics viz. Global & Local transformation, Talent management, CSR activities, campus hiring etc. She has exceptional skills in the HR field, besides being a helpful human with a sympathetic attitude. Her knowledge about tools, its impact on transition and mass demonstration/adoption skills are exceptional. Apart from the above, the collaboration with business leaders and leadership team was remarkable. Babitha has proven leadership skills in building and structuring the HR team to drive excellence and efficiency.`,
      img: man_3,
      bottomname: "Venugopal Alambady Balappa",
      bottomtext: "Manager, ESI Group",
    },
    {
      id: 4,
      logo: "Logo",
      para: `During our collaboration, I've come to appreciate her exceptional skills, her unfailing commitment and her ability to manage complex issues. In addition to her technical expertise, Babitha has demonstrated great communication skills. She is able to convey complex ideas clearly and concisely, making her a valuable asset to any team. Beyond her professional skills, Babitha is a reliable and collaborative colleague. Her positive attitude and ability to work with others makes a significant contribution to the team's dynamics. Integrating Babitha into your team means offer it a dynamic, efficient and creative collaborator`,
      img: man_4,
      bottomname: "Eugenie Bocquet Appel",
      bottomtext: "Corporate HR Director, ESI Group ",
    },
    {
      id: 5,
      logo: "Logo",
      para: `If you are looking for, a People First person, to upgrade the culture of your organization, look no further than Babitha. Her well curated Programmes and HR best practices have helped navigate departments through a journey of Organizational Transformation, both at Local and Global levels. Gifted with an exceptionally high EQ coupled with great listening and oratory skills, Babitha has consistently demonstrated Walk The Talk. With her Onboard, any organization can figure out novel ways of the managing its greatest asset of Human Resources and unleashing them as Self Driven Armies that can conquer the toughest of challenges`,
      img: man_5,
      bottomname: "Roshan Nataraj",
      bottomtext: "Technical Experts Leader, ESI Group",
    },
    {
      id: 6,
      logo: "Logo",
      para: `Babitha has a pleasing personality and extremely focussed, systematic approach. Great control on work life balance too. Possesses immense persuasive leadership skills and highly talented in all areas of`,
      img: man_6,
      bottomname: "Anup Nair",
      bottomtext: "Managing Director- India & South Asia, Martin Engineering",
    },
    {
      id: 7,
      logo: "Logo",
      para: `We recently had the pleasure of working with Sapience Minds on our critical hiring needs. From the initial consultation to the final placement, their team exhibited professionalism, dedication, and a genuine commitment to finding the perfect fit for both the candidate and the employer. Sapience Minds took the time to understand our company's unique needs and culture, ensuring they matched us with candidates who not only had the required skills but also aligned with our values. Their meticulous screening process saved us countless hours and resulted in a shortlist of highly qualified individuals. One of the standout aspects of Sapience is their exceptional communication. They kept us informed at every stage of the recruitment process, providing regular updates and valuable insights. Their responsiveness and attention to detail made the entire experience seamless and stress-free. Thanks to Sapience Minds, we have successfully hired talented individuals. Their expertise and personalized approach have made a significant impact on our hiring process, and we look forward to continuing our partnership with them in the future. Are you stuck with critical hiring??? - You have Sapience Minds that goes above and beyond to deliver outstanding results!!`,
      img: woman_1,
      bottomname: "Seema S Rao",
      bottomtext: " Sr. VP - HR & Finance,  Wolken Software Pvt Ltd",
    },
  ];


  const handleSignleBlog = (ev, id) => {
    const cleanPath = id.replaceAll(" ", "-");
    navigate(`/blog/${cleanPath}`, { state: ev });
  };

  const hadleNavigate = () => {
    window.open(
      "https://calendly.com/babitha-sapienceminds-pfmn/45min",
      "_blank"
    );
  };

  const [showForm, setShowForm] = useState(false);

  const handleOpenForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    PhoneNumber: "",
    Message: "",
    Sourcepage: "Home",
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
      console.log(response, "resssssss");

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

  const readMoreHandeler = (targeted) => {
    setReadMore(true);
    setSingleTestimonial(targeted);
    if (swiperRef.current) {
      swiperRef.current.autoplay?.stop();
    }
  };

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

  return (
    <div className="home_main">
      <Helmet>
        <title>
        Sapience Minds-Sapience Minds-Your Trusted Fractional CHRO Partner for Scalable HR Growth
        </title>
        <meta
          name="description"
          content="At Sapience Minds, we offer expert HR solutions as a Fractional CHRO, helping startups build strong foundations, align people with purpose, and scale confidently with compliant and agile HR strategies."
        />

        {/* Open Graph Meta Tags (for WhatsApp, Facebook, LinkedIn) */}
        <meta
          property="og:title"
          content="Your Trusted Fractional CHRO Partner for Scalable HR Growth"
        />
        <meta
          property="og:description"
          content="At Sapience Minds, we offer expert HR solutions as a Fractional CHRO, helping startups build strong foundations, align people with purpose, and scale confidently with compliant and agile HR strategies."
        />
        <meta
          property="og:image"
          content="https://tridizi.com/assets/10782741_19197279%201-DKNLt4HA.svg"
        />
        <meta property="og:url" content="https://tridizi.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content=" Your Trusted Fractional CHRO Partner for Scalable HR Growth"
        />
        <meta
          name="twitter:description"
          content="   At Sapience Minds, we offer expert HR solutions as a Fractional CHRO, helping startups build strong foundations, align people with purpose, and scale confidently with compliant and agile HR strategies."
        />
        <meta
          name="twitter:image"
          content="https://tridizi.com/assets/10782741_19197279%201-DKNLt4HA.svg"
        />
      </Helmet>

      <div className="home_page_outer">
        <div className="home_page_left">
          <p className="home_samll_text">Virtula HR - Recruit - Manage</p>
          <div className="homepage_headig_text">
            <h1 className="home_page_heading">
              Your Trusted Fractional CHRO Partner for Scalable HR Growth
            </h1>
            <p className="home_page_para">
              At Sapience Minds, we offer expert HR solutions as a Fractional
              CHRO, helping startups build strong foundations, align people with
              purpose, and scale confidently with compliant and agile HR
              strategies.
            </p>
          </div>
          <div className="homepage_button_outer">
            <button
              className="homepage_left_button "
              onClick={() => handleOpenForm()}
            >
              Get started
            </button>
            <button
              className="homepage_right_button liquid"
              onClick={() => hadleNavigate()}
            >
              {/* <AiOutlinePlayCircle className="button_icon" /> */}
              Book A Meeting
            </button>
          </div>

          {/* Prefooter Css Applied In this PopUp */}
          {showForm && (
            <div className="modal-overlay-homepage">
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
        </div>
        <div className="home_page_right">
          <div className="right_top_icon">
            <img
              src={rightvector}
              alt="rightvector"
              className="vector_right_icon"
            />
          </div>
          <div className="left_top_icon ">
            <img
              src={leftvector}
              alt="leftvector"
              className="home_vector_icon"
            />
          </div>
          <div className="orange_circle"> </div>
          <div className="violet_circle"> </div>

          <div className="home_top_left_notice">
            <p className="notice_heading">+ 200</p>
            <p className="notice_text">Company Trusted</p>
          </div>

          <div className="bottom_notice">
            <div className="notice_left_logo">
              <FaPeopleGroup className="bottom_notice_icon" />
            </div>
            <div className="notice_right">
              <p className="bottom_notice_heading">+ 300</p>
              <p className="bottom_notice_text">
                People have manage with organize
              </p>
            </div>
          </div>

          <div className="homepage_img_outer">
            <img src={dots} alt="dotsr" className="dots_right" />
            <img src={dots} alt="dotsl" className="dots_left" />
            <img src={homeimg} alt="homeimg" className="home_img" />
          </div>
        </div>
      </div>

      <div className="homepage_layer2_outer">
        <div className="layer2_outer">
          <p className="layer2_top_text">
            Trusted Companies to scale their Business through HR domain{" "}
          </p>
          <div className="layer2_logos_outer">
            <div className="layer2_logos_inner">
              <img src={client1} alt="dummylogo" className="layer2_logos_1" />
              <img src={client2} alt="dummylogo" className="layer2_logos_2" />
              <img src={client3} alt="dummylogo" className="layer2_logos_3" />
              <img src={client4} alt="dummylogo" className="layer2_logos_4" />
              <img src={client5} alt="dummylogo" className="layer2_logos_5" />
              <img src={client6} alt="dummylogo" className="layer2_logos_6" />
              <img src={client8} alt="dummylogo" className="layer2_logos_8" />
              <img src={client7} alt="dummylogo" className="layer2_logos_7" />
              <img src={client9} alt="dummylogo" className="layer2_logos_9" />
              <img src={client10} alt="dummylogo" className="layer2_logos_10" />
              <img src={client11} alt="dummylogo" className="layer2_logos_11" />
              <img src={client12} alt="dummylogo" className="layer2_logos_12" />
              <img src={client13} alt="dummylogo" className="layer2_logos_13" />
              <img src={client14} alt="dummylogo" className="layer2_logos_14" />
              <img src={client15} alt="dummylogo" className="layer2_logos_15" />
              <img src={client16} alt="dummylogo" className="layer2_logos_16" />
              <img src={client17} alt="dummylogo" className="layer2_logos_17" />
              <img src={client18} alt="dummylogo" className="layer2_logos_18" />
              <img src={client19} alt="dummylogo" className="layer2_logos_19" />
              <img src={client20} alt="dummylogo" className="layer2_logos_20" />
              <img src={client21} alt="dummylogo" className="layer2_logos_21" />
              <img src={client22} alt="dummylogo" className="layer2_logos_22" />
              <img src={client23} alt="dummylogo" className="layer2_logos_23" />
              <img src={client24} alt="dummylogo" className="layer2_logos_24" />
              <img src={client25} alt="dummylogo" className="layer2_logos_25" />
            </div>
          </div>
        </div>
      </div>

      <div className="homepage_layer3_outer_main">
        <div className="homepage_layer3_outer">
          <div className="homepage_layer3_part1">
            <h6 className="layer3_part1_heading" data-aos="fade-left">
              About Me
            </h6>
            <p className="layer3_part1_heading2" data-aos="zoom-in">
              Meet Babitha – Your Fractional CHRO and Growth Enabler
            </p>
            <p className="layer3_part1_para" data-aos="fade-right">
              With 23+ years of HR leadership, I specialize in helping startups
              and SMBs design people-first, performance-driven cultures. As a
              Fractional CHRO, I bring executive-level HR expertise without the
              full-time cost — offering structure, compliance, and strategy
              tailored for fast-growing teams.
            </p>
          </div>
          <div className="homepage_layer3_part2">
            <video
              src={homevideo}
              autoPlay
              muted
              loop
              playsInline
              className="about_video"
            />
          </div>
        </div>
      </div>

      <div className="homepage_layer4_outer_main">
        <div className="homepage_layer4_outer">
          <img src={bg1} alt="bg1" className="backgroud_img1" />

          <div className="homepage_layer4_left" data-aos="fade-right">
            <p className="homepage_layer4_heading">Our Core Values</p>
            <p className="homepage_layer4_heading2">
              Guided by Purpose, Driven by People
            </p>
            <p className="homepage_layer4_para">
              At Sapience Minds, our values are the foundation of every
              partnership. We believe in integrity, collaboration, and a
              relentless commitment to empowering startups with people-first HR
              strategies that deliver real impact. Our approach is empathetic,
              strategic, and always aligned with your business goals.
            </p>

            <div className="homepage_layer4_cards_outer">
              <div className="homepage_layer4_card">
                <div className="layer4_card_logo">
                  <img src={icon_1} alt="Smallicon1" className="layer4_logo" />
                </div>
                <p className="layer4_card_heading">
                  {/* Powerful Dashboard */}
                  Our Vision
                </p>
                <p className="layer4_card_para">
                  To be the most trusted HR partner for startups and emerging
                  businesses, enabling sustainable growth through strategic
                  people practices.
                </p>
              </div>
              <div className="homepage_layer4_card">
                <div className="layer4_card_logo">
                  <img src={icon_2} alt="Smallicon1" className="layer4_logo" />
                </div>
                <p className="layer4_card_heading">Our Mission </p>
                <p className="layer4_card_para">
                  To deliver flexible, executive-level HR solutions that empower
                  founders, nurture culture, and scale teams, one smart decision
                  at a time.
                </p>
              </div>
            </div>
          </div>
          <div className="homepage_layer4_right" data-aos="fade-up">
            <img src={layer4} alt="layer4" className="homepage_layer4_img" />
          </div>
        </div>
      </div>

      <div className="homepage_layer5_outer_main">
        <div className="homepage_layer5_outer">
          <div className="layer5_part1">
            <p className="layer5_part1_heading" data-aos="fade-right">
              Our Core Services
            </p>
            <p className="layer5_part1_heading2" data-aos="zoom-in">
              Fractional CHRO Services Tailored for Startup Success
            </p>
            <p className="layer5_part1_para" data-aos="fade-right">
              At Sapience Minds, we offer a full suite of HR services on a
              flexible, fractional basis, giving you access to strategic
              leadership without the full-time cost. From HR policy setup to
              talent acquisition, compliance, performance management, and
              culture building. We align your people strategy with your business
              goals, every step of the way.
            </p>
          </div>
          <div className="layer5_cards_outer">
            {cardscontent.map((data, ind) => (
              <div className="layer5_card" key={ind} >
                <div className="layer5_card_logo_outer">
                  <img
                    src={data.Logo}
                    alt="logo"
                    className="layer5_card_logo"
                  />
                </div>
                <div className="card_bottom_line"></div>
                <h6 className="layer5_card_heading">{data.subHead}</h6>
                <p className="layer5_card_text">{data.para}</p>
                <Link
                  to={data?.path}
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <p className="layer5_card_lernmore">{data.Head}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="homepage_layer6_outer_main">
        <div className="layer6_outer">
          <div className="layer6_part1">
            <h6 className="layer6_part1_heading">Testimonials</h6>
            <p className="layer6_part1_heading2">See Why Our Clients Love Us</p>
          </div>

          <div className="layer6_cards_outer">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={0}
              slidesPerView={3}
              slidesPerGroup={1}
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
              className="home_gallery_cardswiper1"
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 12,
                },
                721: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
              onSwiper={(swiper) => {
                swiperRef.current = swiper; // Assign Swiper instance to swiperRef
              }}
            >
              {testmonials?.map((data, index) => (
                <SwiperSlide key={index}>
                  <div className="layer6_card">
                    {/* <p className="layer6_card_logo">{data.logo}</p> */}

                    <div className="layer6_card_bottom">
                      <div className="layer6_bottom_logo_outer">
                        <img
                          src={data.img}
                          alt="man"
                          className="card_bottom_logo"
                        />
                      </div>
                      <div className="card_bottom_right_text">
                        <h6 className="card_bottom_heading">
                          {data.bottomname}
                        </h6>
                        <p className="card_bottom_para">{data.bottomtext}</p>
                      </div>
                    </div>
                    <p className="layer6_card_para">{data.para}</p>
                    <div>
                      <button
                        className="read_more_btn"
                        onClick={() => readMoreHandeler(data)}
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <div className="homepage_layer7_outer_main">
        <img src={bg2} alt="bg2" className="bg2" />

        <div className="layer7_outer">
          <div className="layer7_part1">
            <p className="layer7_part_heading">Blogs</p>
            <p className="layer7_part_heading2">
              Discover How We Make HR Better
            </p>
          </div>
          <div className="layer7_cards_outer">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={0}
              slidesPerView={3}
              slidesPerGroup={1}
              slidesOffsetBefore={12}
              navigation={{
                prevEl: ".custom-prev-button",
                nextEl: ".custom-next-button",
              }}
              // pagination={{ clickable: true }}
              pagination={Blogs.length > 3 ? { clickable: true } : false}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              speed={1000}
              // loop={true}
              loop={Blogs.length > 3}
              className="home_gallery_cardswiper2"
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 12,
                },
                721: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
            >
              {Blogs?.map((data, index) => (
                <SwiperSlide key={index}>
                  <div className="layer7_card">
                    <p className="layer7_card_name">{data?.title}</p>
                    <p className="layer7_card_sub_name">
                      {data?.DepartmentOfblog}
                    </p>
                    <div className="layer7_card_line"></div>
                    <div className="layer7_card_para_outer">
                      <p className="layer7_card_para">{data?.content}</p>
                    </div>

                    <h6
                      className="layer7_card_explore"
                      onClick={() => handleSignleBlog(data, data.title)}
                    >
                      Explore More
                    </h6>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        {readMore === true && (
          <div
            className="home_page_modal"
            data-aos="zoom-in"
            onClick={() => {
              setReadMore(false);
              if (swiperRef.current) {
                swiperRef.current.autoplay?.start();
              }
            }}
          >
            {readMore === true && (
              <div className="read_more_modal">
                <div className="read_more_content">
                  <div className="layer6_card_bottom">
                    <div className="layer6_bottom_logo_outer">
                      <img
                        src={singleTestimonial.img}
                        alt="man"
                        className="singleTestimonial_bottom_logo"
                      />
                    </div>
                    <div className="card_bottom_right_text">
                      <h6 className="card_bottom_heading">
                        {singleTestimonial.bottomname}
                      </h6>
                      <p className="singleTestimonial_bottom_para">
                        {singleTestimonial.bottomtext}
                      </p>
                    </div>
                  </div>
                  <p>{singleTestimonial.para}</p>
                  <button
                    className="read_more_close_btn"
                    onClick={() => {
                      setReadMore(false);
                      if (swiperRef.current) {
                        swiperRef.current.autoplay?.start();
                      }
                    }}
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <ToastContainer />
      <div className="home_page_prefooter" data-aos="zoom-in">
        <PreFooter
          sourcepages="HomePage"
          Head="Let’s Build Your People Strategy – Together"
          Content="Your startup deserves more than just reactive HR. Whether you need structure, compliance, or a culture strategy, let’s have a conversation that moves your business forward. Book a discovery call or fill out the form and let’s shape a smarter, people-powered future for your company."
        />
      </div>
   
    </div>
  );
};
