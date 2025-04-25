import React, { useEffect, useRef, useState } from "react";
import "./AlliancePartner.css";
import HeroImage from "../../assets/AlliancePartner/hero_1.svg";
import BlueLayer from "../../assets/AboutPage/blushade.svg";
import orangeLayer from "../../assets/AboutPage/orangeshade.svg";
import SquareIcons from "../../assets/AlliancePartner/LayerContainer.svg";
import PersonImage from "../../assets/AlliancePartner/man_img.svg";
import Smallicon1 from "../../assets/AboutPage/Smallicon1.svg";
import Smallicon2 from "../../assets/AboutPage/icon_3.svg";

import Smallicon3 from "../../assets/AboutPage/icon_4.svg";
import Smallicon4 from "../../assets/AboutPage/icon_5.svg";
import Smallicon5 from "../../assets/AboutPage/icon_6.svg";
import Smallicon6 from "../../assets/AboutPage/icon_7.svg";
import Smallicon7 from "../../assets/AboutPage/icon_8.svg";
import Smallicon8 from "../../assets/AboutPage/icon_9.svg";
import man from "../../assets/HomePage/man.svg";
import { PreFooter } from "../../Components/PreFooter/PreFooter";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

import man_1 from "../../assets/HomePage/Testimony_1.png";
import man_2 from "../../assets/HomePage/man_2.png";
import man_3 from "../../assets/HomePage/man_3.png";
import man_4 from "../../assets/HomePage/man_4.png";
import man_5 from "../../assets/HomePage/man_5.png";
import man_6 from "../../assets/HomePage/man_6.png";
import woman_1 from "../../assets/HomePage/woman_1.png";
import icon_1 from "../../assets/AboutPage/icon_1.svg";
import icon_2 from "../../assets/AboutPage/icon_2.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Helmet } from "react-helmet-async";

export const AlliancePartner = () => {
  const swiperRef = useRef(null);
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

  const readMoreHandeler = (targeted) => {
    setReadMore(true);
    setSingleTestimonial(targeted);
    if (swiperRef.current) {
      swiperRef.current.autoplay?.stop();
    }
  };

  const [readMore, setReadMore] = useState(false);
  const [singleTestimonial, setSingleTestimonial] = useState(null);

  const Content = [
    {
      id: 1,
      Logo: Smallicon1,
      Head: "Learn More",
      subHead: "HR Compliance and Policy Development",
      para: "Stay compliant and confident. We design clear, startup-ready HR policies that protect your business and people alike.",
    },
    {
      id: 2,
      Logo: Smallicon2,
      Head: "Learn More",
      subHead: "Customized HR Consulting and Advisory Services",
      para: "Whether you're scaling fast or setting up HR from scratch, our strategic insights align people decisions with business goals.",
    },
    {
      id: 3,
      Logo: Smallicon3,
      Head: "Learn More",
      subHead: "Virtual CHRO and Outsourcing of HR Operations",
      para: "Get executive-level HR expertise without the full-time cost. We lead your HR function remotely with efficiency and care.",
    },
    {
      id: 4,
      Logo: Smallicon4,
      Head: "Learn More",
      subHead: "Talent Acquisition Solutions",
      para: "Hiring shouldn’t be a hassle. From job role design to final offer, we craft a seamless talent journey for your team.",
    },
    {
      id: 5,
      Logo: Smallicon5,
      Head: "Learn More",
      subHead: "Talent Management",
      para: "Fuel performance and growth with development plans, reviews, and leadership pipelines built to scale with your startup.",
    },
    {
      id: 6,
      Logo: Smallicon6,
      Head: "Learn More",
      subHead: "Talent Engagement & Retention",
      para: "Create a culture employees love. We craft engagement strategies that foster loyalty, purpose, and long-term retention.",
    },
    {
      id: 7,
      Logo: Smallicon7,
      Head: "Learn More",
      subHead: "Recruitment of Leadership & Mid-Level Team",
      para: "Finding the right leaders is critical. We connect you with proven professionals who match your mission and mindset.",
    },
    {
      id: 8,
      Logo: Smallicon8,
      Head: "Learn More",
      subHead: "Employee Insurance & Benefits",
      para: "Boost employee satisfaction with thoughtfully designed insurance and perks that support health, security, and morale.",
    },
  ];

  const testmonials = [
    {
      id: 1,
      logo: "Logo",
      para: `I am happy to recommend Babitha for her exceptional contributions to our organization as a Human Resources professional. During her tenure, Babitha showcased an impressive array of skills that truly set her apart. Babitha's proficiency in communication and follow-up was unparalleled. She effectively liaised between departments, ensuring smooth communication channels and prompt responses. Her dedication to follow through on tasks ensured that things progressed seamlessly. Moreover, Babitha introduced invaluable processes to our recruitment procedures, streamlining operations and enhancing efficiency. Her comprehensive understanding of HR processes and regulations made her an invaluable resource for our organization. Babitha's knowledge and expertise not only optimized our recruitment efforts but also fostered a positive work environment conducive to growth and development. In summary, after a considerable time, I am delighted to have witnessed such an exceptional HR professional within our organization. Babitha's dedication, expertise, and ability to implement positive change make her a standout colleague and asset to any team fortunate enough to have her.`,
      img: man_1,
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
      id: 6,
      logo: "Logo",
      para: `We recently had the pleasure of working with Sapience Minds on our critical hiring needs. From the initial consultation to the final placement, their team exhibited professionalism, dedication, and a genuine commitment to finding the perfect fit for both the candidate and the employer. Sapience Minds took the time to understand our company's unique needs and culture, ensuring they matched us with candidates who not only had the required skills but also aligned with our values. Their meticulous screening process saved us countless hours and resulted in a shortlist of highly qualified individuals. One of the standout aspects of Sapience is their exceptional communication. They kept us informed at every stage of the recruitment process, providing regular updates and valuable insights. Their responsiveness and attention to detail made the entire experience seamless and stress-free. Thanks to Sapience Minds, we have successfully hired talented individuals. Their expertise and personalized approach have made a significant impact on our hiring process, and we look forward to continuing our partnership with them in the future. Are you stuck with critical hiring??? - You have Sapience Minds that goes above and beyond to deliver outstanding results!!`,
      img: woman_1,
      bottomname: "Seema S Rao",
      bottomtext: " Sr. VP - HR & Finance,  Wolken Software Pvt Ltd",
    },
  ];
  return (
    <>
      <Helmet>
        <title>Expert Who Elevate Our Mission</title>
        <meta
          name="description"
          content="At Sapience Minds, we collaborate with handpicked industry leaders who bring specialized knowledge and proven excellence to the table. These trusted partners expand our capabilities and ensure that every solution we offer is backed by expertise, innovation, and impact—giving your business access to the very best in HR, leadership, compliance, and beyond."
        />

        {/* Open Graph Meta Tags (for WhatsApp, Facebook, LinkedIn) */}
        <meta property="og:title" content="Expert Who Elevate Our Mission" />
        <meta
          property="og:description"
          content="At Sapience Minds, we collaborate with handpicked industry leaders who bring specialized knowledge and proven excellence to the table. These trusted partners expand our capabilities and ensure that every solution we offer is backed by expertise, innovation, and impact—giving your business access to the very best in HR, leadership, compliance, and beyond."
        />
        <meta
          property="og:image"
          content="https://tridizi.com/assets/10782741_19197279%201-DKNLt4HA.svg"
        />
        <meta property="og:url" content="https://tridizi.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Expert Who Elevate Our Mission" />
        <meta
          name="twitter:description"
          content="At Sapience Minds, we collaborate with handpicked industry leaders who bring specialized knowledge and proven excellence to the table. These trusted partners expand our capabilities and ensure that every solution we offer is backed by expertise, innovation, and impact—giving your business access to the very best in HR, leadership, compliance, and beyond."
        />
        <meta
          name="twitter:image"
          content="https://tridizi.com/assets/10782741_19197279%201-DKNLt4HA.svg"
        />
      </Helmet>
      <div className="AlliancePartner_Main_Container">
        <p className="BlueLayer_HeroBanner">
          <img src={BlueLayer} alt="BlueLayer"></img>
        </p>
        <p className="Image_Conatiner">
          <img src={HeroImage} alt="HeroImage"></img>
        </p>
        <div className="Image_Upper_Text_Container" data-aos="zoom-in">
          <p className="Header_Text">Expert Who Elevate Our Mission</p>
          <p className="Header_Sub_Text">
            At Sapience Minds, we collaborate with handpicked industry leaders
            who bring specialized knowledge and proven excellence to the table.
            These trusted partners expand our capabilities and ensure that every
            solution we offer is backed by expertise, innovation, and
            impact—giving your business access to the very best in HR,
            leadership, compliance, and beyond.
          </p>
        </div>
      </div>
      <div className="Section2_Layer_AlliancePartner">
        <div className="Left_Container_AlliancePartner" data-aos="fade-right">
          <p className="Heading_text_AlliancePartner">Alliance Partner</p>
          <p className="para1_text_AlliancePartner">
            At Sapience Minds, we proudly collaborate with Krishnan Ravishankar,
            our Alliance Partner and Principal Architect – Behavior &
            Performance Optimization (Solutions Partner – Harrison Assessments,
            India).
          </p>
          <p className="para2_text_AlliancePartner">
            With over 40 years of global expertise across core HR services,
            organizational development, training, and industrial relations,
            Krishnan has empowered clients across India, the USA, Africa,
            Singapore, Malaysia, and the Middle East. His experience with top
            corporate and multinational environments brings exceptional depth to
            our Fractional CHRO offerings helping startups and growing
            businesses enhance their people performance and unlock measurable
            growth.
          </p>
          <p className="para2_text_AlliancePartner">
            His extensive background working with prominent corporate groups and
            multinational companies uniquely positions him to drive impactful
            change for our clients.
          </p>
        </div>
        <div className="Right_Container_AlliancePartner">
          <p className="right_Header_Text">Alliance Partner</p>
          {/* <p className="SquareIcons_Cont_img">
            <img src={SquareIcons} alt="SquareIcons"></img>
          </p> */}
          <p className="Person_Cont_img">
            <img src={PersonImage} alt="PersonImage" data-aos="zoom-in"></img>
          </p>
          <div className="alliance_right_said content" data-aos="zoom-in">
            <h3>Krishnan Ravishankar</h3>
            <p>Principal Architect| Behavior</p>
            <p> & Performance Optimisation</p>
          </div>
        </div>
      </div>
      {/* <div className="Section3_Alliance_Main_Container">
        <p className="Section3_Alliance_Heading1" data-aos="fade-right">
        Our Core Services
        </p>
        <p className="Section3_Alliance_Heading2" data-aos="zoom-in">
        Fractional CHRO Services Tailored for Startup Success
        </p>
        <p className="Section3_Alliance_Heading_para" data-aos="fade-right">
        At Sapience Minds, we offer a full suite of HR services on a flexible, fractional basis, giving you access to strategic leadership without the full-time cost. From HR policy setup to talent acquisition, compliance, performance management, and culture building. We align your people strategy with your business goals, every step of the way.
        </p>
        <div className="Section3_Alliance_Container_Icons_Container">
          {Content.map((item, i) => (
            <div
              className="Single_Alliance_container_Icon"
              data-aos="flip-left"
              key={i}
            >
              <p className="Image_Alliance_container_image">
                <img src={item.Logo} alt={item.Logo} />
              </p>
              <p className="Horizontal_Alliance_row"></p>
              <p className="Cards_Alliance_Sub_head">{item.subHead}</p>
              <p className="Cards_Alliance_Name">{item.para}</p>
            </div>
          ))}
          <p className="orangeLayer_Contaner">
            <img src={orangeLayer} alt="orangeLayer" />
          </p>
        </div>
      </div> */}
      {/* <div className="Alliance_layer4_outer_main">
        <div className="Alliance_layer4_outer">
          <div className="Alliance_layer4_part1" data-aos="fade-down">
            <p className="Alliance_layer4_part1_heading">Testimonials</p>
            <h1 className="Alliance_layer4_part1_heading2">
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
                delay: 2000,
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
                swiperRef.current = swiper; 
              }}
            >
              {testmonials?.map((data, index) => (
                <SwiperSlide key={index}>
                  <div className="layer6_card">

                    <div className="layer6_card_bottom">
                      <div className="layer6_bottom_logo_outer">
                        <img
                          src={data.img}
                          alt="man"
                          className="card_bottom_logo"
                        />
                      </div>
                      <div className="card_bottom_right_text">
                        <p className="card_bottom_heading">
                          {data.bottomname}
                        </p>
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

          {readMore === true && (
            <div
              className="home_page_modal"
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
                        <p className="card_bottom_heading">
                          {singleTestimonial.bottomname}
                        </p>
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
      </div> */}

      <div className="Alianceparter_layer4_outer_main">
        <div className="Aliancceparter_layer4_outer" data-aos="fade-right">
          <div className="">
            <p className="aliancepartner_layer4_heading2">
              Collaboration Key Service Areas of our Alliance Partner
            </p>
            <h1 className="aliancepartner_layer4_heading">
              Our Alliance Partner’s commitment to trusted client support and
              personalized, data-driven solutions makes him an invaluable part
              of our team, contributing to our mission to elevate HR practices
              for lasting organizational success.
            </h1>
            {/* <p className="Alianceparter_layer4_para">
                At Sapience Minds, our values are the foundation of every
                partnership. We believe in integrity, collaboration, and a
                relentless commitment to empowering startups with people-first
                HR strategies that deliver real impact. Our approach is
                empathetic, strategic, and always aligned with your business
                goals.
              </p> */}

            <div className="Aliancepartenr_layer4_cards_outer">
              <div className="Alliancepartner_layer4_card">
                <div className="Alliancepartner_layer4_card_logo">
                  <img
                    src={icon_1}
                    alt="Smallicon1"
                    className="Alliancepartner_layer4_logo"
                  />
                </div>
                <p className="Alliancepartner_layer4_card_heading">
                  Solutions for the EDU segment
                </p>
                <ul className="List_main_aliancepartener">
                  <li className="Aliancepartner_card_para">
                    Scientific Career Planning (Guiding students with
                    scientifically-backed assessment tools to make informed
                    career choices){" "}
                  </li>
                  <li className="Aliancepartner_card_para">
                    Competency Enhancement for Teaching Staff (Developing
                    customized programs to elevate teaching staff
                    capabilities/competencies, ensuring alignment with
                    institutional goals)
                  </li>
                  <li className="Aliancepartner_card_para">
                    Employability skills training workshop for students taking a
                    leap into the corporate world
                  </li>
                  <li className="Aliancepartner_card_para">
                    Training the Career Counsellors workshop (Meant for Career
                    planning & Placement staff to become world class Career
                    Coaches)
                  </li>
                  <li className="Aliancepartner_card_para">
                    Effective Campus placements (Assessment based training
                    workshop, meant for final year students).
                  </li>
                </ul>
              </div>
              <div className="Alliancepartner_layer4_card">
                <div className="Alliancepartner_layer4_card_logo">
                  <img
                    src={icon_2}
                    alt="Smallicon2"
                    className="Alliancepartner_layer4_logo"
                  />
                </div>
                <p className="Alliancepartner_layer4_card_heading">
                  Talent Management and Development Solutions for corporate/SME
                  companies
                </p>
                <ul className="List_main_aliancepartener">
                  <li className="Aliancepartner_card_para">
                    Offering specialized assessments, coaching, mentoring and
                    training solutions designed to optimize talent across
                    various organizational levels.
                  </li>
                  <li className="Aliancepartner_card_para">
                    Leveraging AI-driven, global research-based assessment
                    tools, our approach delivers precise insights for students,
                    educators, and corporate working professionals alike.
                  </li>
                  <li className="Aliancepartner_card_para">
                    This scientifically- grounded process supports all stages of
                    the HR cycle and career journey, helping organizations and
                    educational institutions foster productivity, efficiency,
                    and profitability through well-informed talent strategies.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="Alliance_Pre_Footer_Container">
          <PreFooter
            sourcepages="AlliancePartner"
            Head="Let’s Build Your People Strategy – Together"
            Content="Your startup deserves more than just reactive HR. Whether you need structure, compliance, or a culture strategy, let’s have a conversation that moves your business forward. Book a discovery call or fill out the form and let’s shape a smarter, people-powered future for your company."
          />
        </div>
      </div>
    </>
  );
};
