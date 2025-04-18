import React, { useEffect, useRef, useState } from "react";
import "./HomePage.css";
import { AiOutlinePlayCircle } from "react-icons/ai";
import homeimg from "../../assets/HomePage/homeimg.svg";
import dots from "../../assets/HomePage/homedots.svg";
import leftvector from "../../assets/HomePage/leftvector.svg";
import rightvector from "../../assets/HomePage/rightvector.svg";
import { FaPeopleGroup } from "react-icons/fa6";
import dummylogo from "../../assets/HomePage/dummylogo.svg";
import layer4 from "../../assets/HomePage/layer4.svg";

import Smallicon1 from "../../assets/AboutPage/Smallicon1.svg";
import Smallicon2 from "../../assets/AboutPage/Smallicon2.svg";
import Smallicon3 from "../../assets/AboutPage/Smallicon3.svg";
import Smallicon4 from "../../assets/AboutPage/Smallicon4.svg";

import bg1 from "../../assets/HomePage/bg1.svg";
import bg2 from "../../assets/HomePage/bg2.svg";

import blog1 from "../../assets/Blogs/image1.png";
import blog2 from "../../assets/Blogs/image2.png";
import blog3 from "../../assets/Blogs/image3.png";

import homevideo from "../../assets/HomePage/hmv.mp4";
import man from "../../assets/HomePage/man.svg";
import { PreFooter } from "../../Components/PreFooter/PreFooter";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import AOS from "aos";
import "aos/dist/aos.css";
import { Link, useNavigate } from "react-router-dom";

export const HomePage = () => {
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
  const modalRef = useRef(null);

  const cardscontent = [
    {
      id: 1,
      Logo: Smallicon1,
      Head: "Learn More",
      subHead: "HR Compliance and Policy Development",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      path: "/hr-compliance",
    },
    {
      id: 2,
      Logo: Smallicon2,
      Head: "Learn More",
      subHead: "Customized HR Consulting and Advisory Services",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      path: "/hr-consulting",
    },
    {
      id: 3,
      Logo: Smallicon3,
      Head: "Learn More",
      subHead: "Virtual CHRO and Outsourcing of HR Operations",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      path: "/virtual-chro-and-outsourcing",
    },
    {
      id: 4,
      Logo: Smallicon4,
      Head: "Learn More",
      subHead: "Talent Acquisition Solutions",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      path: "/talent-acquisition-solutions",
    },
    {
      id: 1,
      Logo: Smallicon1,
      Head: "Learn More",
      subHead: "Talent Management",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      path: "/talent-management",
    },
    {
      id: 2,
      Logo: Smallicon2,
      Head: "Learn More",
      subHead: "Talent Engagement & Retention",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      path: "/talent-engagement",
    },
    {
      id: 3,
      Logo: Smallicon3,
      Head: "Learn More",
      subHead: "Recruitment of Leadership & Mid-Level Team",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      path: "/recruitment-of-leadership",
    },
    {
      id: 4,
      Logo: Smallicon4,
      Head: "Learn More",
      subHead: "Employee Insurance & Benefits",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      path: "/employee-insurance-and-benefits",
    },
  ];

  const testmonials = [
    {
      id: 1,
      logo: "Logo",
      para: `Lorem Ipsum is simply dummy text of the printing and typesetting
                 industry. Lorem Ipsum has been the industry's standard dummy text ever.`,
      img: man,
      bottomname: "Name",
      bottomtext: "Lorem Ipsum",
    },
    {
      id: 2,
      logo: "Logo",
      para: `Lorem Ipsum is simply dummy text of the printing and typesetting
                 industry. Lorem Ipsum has been the industry's standard dummy text ever.`,
      img: man,
      bottomname: "Name",
      bottomtext: "Lorem Ipsum",
    },
    {
      id: 3,
      logo: "Logo",
      para: `Lorem Ipsum is simply dummy text of the printing and typesetting
                 industry. Lorem Ipsum has been the industry's standard dummy text ever.`,
      img: man,
      bottomname: "Name",
      bottomtext: "Lorem Ipsum",
    },
    {
      id: 4,
      logo: "Logo",
      para: `Lorem Ipsum is simply dummy text of the printing and typesetting
                 industry. Lorem Ipsum has been the industry's standard dummy text ever.`,
      img: man,
      bottomname: "Name",
      bottomtext: "Lorem Ipsum",
    },
  ];

  const Blogs = [
    {
      id: 1,
      bannerheading:
        "The Importance of Workforce Upskilling and Reskilling in Today’s Economy",
      subname: "Lorem Ipsum",
      bannertext: `   Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
      explore: "Explore More",
      path: "/singleBlog",
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
      subname: "Lorem Ipsum",
      bannertext: `   Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
      explore: "Explore More",
      path: "/singleBlog",
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
      subname: "Lorem Ipsum",
      bannertext: `   Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
      explore: "Explore More",
      path: "/singleBlog",
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

  const handleSignleBlog = (ev, id) => {
    navigate(`/singleBlog/${id}`, { state: ev });
  };

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
    phone: "",
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setShowForm(false);
    setFormData({
      name: "",
      email: "",
      message: "",
      phone: "",
    });
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
  return (
    <div className="home_main">
      <div className="home_page_outer">
        <div className="home_page_left">
          <p className="home_samll_text">Recruit - Onboard - Manage</p>
          <div className="homepage_headig_text">
            <h1 className="home_page_heading">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </h1>
            <p className="home_page_para">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui
              voluptates tenetur facilis ex, corrupti officiis ipsa! Dignissimos
              minima dolore nesciunt.
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
              <AiOutlinePlayCircle className="button_icon" />
              Book A Meeting
            </button>
          </div>

          {/* Prefooter Css Applied In this PopUp */}
          {showForm && (
            <div className="modal-overlay-homepage">
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
                    Phone Number:
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
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
            Trusted company over 1,000 business rely on humanet
          </p>
          <div className="layer2_logos_outer">
            <div className="layer2_logos_inner">
              <img src={dummylogo} alt="dummylogo" className="layer2_logos" />
              <img src={dummylogo} alt="dummylogo" className="layer2_logos" />
              <img src={dummylogo} alt="dummylogo" className="layer2_logos" />
              <img src={dummylogo} alt="dummylogo" className="layer2_logos" />
              <img src={dummylogo} alt="dummylogo" className="layer2_logos" />
              <img src={dummylogo} alt="dummylogo" className="layer2_logos" />
              <img src={dummylogo} alt="dummylogo" className="layer2_logos" />
            </div>
          </div>
        </div>
      </div>

      <div className="homepage_layer3_outer_main">
        <div className="homepage_layer3_outer">
          <div className="homepage_layer3_part1">
            <h6 className="layer3_part1_heading" data-aos="fade-left">
              About Us
            </h6>
            <h1 className="layer3_part1_heading2" data-aos="zoom-in">
              Lorem Ipsum is simply dummy text
            </h1>
            <p className="layer3_part1_para" data-aos="fade-right">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
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
            <h1 className="homepage_layer4_heading2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </h1>
            <p className="homepage_layer4_para">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
            </p>

            <div className="homepage_layer4_cards_outer">
              <div className="homepage_layer4_card">
                <div className="layer4_card_logo">
                  <img
                    src={Smallicon2}
                    alt="Smallicon1"
                    className="layer4_logo"
                  />
                </div>
                <h3 className="layer4_card_heading">
                  {/* Powerful Dashboard */}
                  Vision
                </h3>
                <p className="layer4_card_para">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
              <div className="homepage_layer4_card">
                <div className="layer4_card_logo">
                  <img
                    src={Smallicon1}
                    alt="Smallicon1"
                    className="layer4_logo"
                  />
                </div>
                <h3 className="layer4_card_heading">Mission</h3>
                <p className="layer4_card_para">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
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
              Our Core Values
            </p>
            <h1 className="layer5_part1_heading2" data-aos="zoom-in">
              Lorem Ipsum is simply dummy text
            </h1>
            <p className="layer5_part1_para" data-aos="fade-right">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
            </p>
          </div>
          <div className="layer5_cards_outer">
            {cardscontent.map((data, ind) => (
              <div className="layer5_card" key={ind} data-aos="flip-right">
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
            <h1 className="layer6_part1_heading2">
              See Why Our Clients Love Us
            </h1>
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
            >
              {testmonials?.map((data, index) => (
                <SwiperSlide key={index}>
                  <div className="layer6_card">
                    <p className="layer6_card_logo">{data.logo}</p>
                    <p className="layer6_card_para">{data.para}</p>
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
            <h1 className="layer7_part_heading2">
              Discover How We Make HR Better
            </h1>
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
              pagination={{ clickable: true }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              speed={1000}
              loop={true}
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
                    <p className="layer7_card_name">{data?.bannerheading}</p>
                    <p className="layer7_card_sub_name">{data?.subname}</p>
                    <div className="layer7_card_line"></div>
                    <div className="layer7_card_para_outer">
                      <p className="layer7_card_para">{data?.bannertext}</p>
                    </div>

                    <h6
                      className="layer7_card_explore"
                      onClick={() => handleSignleBlog(data, data.id)}
                    >
                      {data.explore}
                    </h6>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      <div className="home_page_prefooter" data-aos="zoom-in">
        <PreFooter
          Head="Lorem Ipsum is simply dummy text of the"
          Content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
        />
      </div>
    </div>
  );
};
