import React, { useEffect, useRef, useState } from "react";
import "./AboutPage.css";
// import AboutMain1 from "../../assets/AboutPage/above_top_img.svg";
// import AboutMain1 from "../../assets/AboutPage/above_top_img.svg";
// import AboutMain1 from "../../assets/AboutPage/aboutUsHrImage.jpg";
import AboutMain1 from "../../assets/AboutPage/AboutOur.jpg";

import Orangelayer from "../../assets/AboutPage/orangeshade.svg";
import Bluelayer from "../../assets/AboutPage/blushade.svg";
import Person from "../../assets/AboutPage/personImage.svg";
// import TringleGroup from "../../assets/AboutPage/TriangleImages.svg";
import TringleGroup from "../../assets/AboutPage/grp_triangle.svg";
import TradeMark from "../../assets/AboutPage/trademark.svg";
// import CircleGroup from "../../assets/AboutPage/CircleGroup.png";
import CircleGroup from "../../assets/AboutPage/grp_circle.svg";
// import SquareGroup from "../../assets/AboutPage/SquareGroup.png";
import SquareGroup from "../../assets/AboutPage/babith_square.svg"
// import SquareGroup from "../../assets/AboutPage/rectangleimg.svg"
import plusIcon from "../../assets/AboutPage/Icon.svg";
import Smallicon1 from "../../assets/AboutPage/Smallicon1.svg";
import Smallicon2 from "../../assets/AboutPage/Smallicon2.svg";
import Smallicon3 from "../../assets/AboutPage/Smallicon3.svg";
import Smallicon4 from "../../assets/AboutPage/Smallicon4.svg";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { PreFooter } from "../../Components/PreFooter/PreFooter";
import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer } from "react-toastify";

export const AboutPage = () => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const target = 23;
  const duration = 2000;
  const ref = useRef(null);

  const [AwardsCount, setAwardsCount] = useState(0);
  const [AwardsIsVisible, setAwardsIsVisible] = useState(false);
  const targetAwards = 10;
  const durationAwards = 2000;

  const [ClientCount, setClientCount] = useState(0);
  const [ClientIsVisible, setClientIsVisible] = useState(false);
  const targetClient = 99;
  const durationClient = 2000;

  const [ClientRatingCount, setClientRatingCount] = useState(0);
  const [ClientRatingIsVisible, setClientRatingIsVisible] = useState(false);
  const [showdata, setshowdata] = useState(false);
  const [clickedid, setclickedid] = useState("");
  const targetClientRating = 4.9;
  const durationClientRating = 2000;

  const changebool = (id) => {
    setshowdata(!showdata);
    setclickedid(id);
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const increment = Math.ceil(target / (duration / 50));
    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(interval);
      }
      setCount(start);
    }, 50);

    return () => clearInterval(interval);
  }, [isVisible]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAwardsIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 } // Lowered threshold for easier triggering
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!AwardsIsVisible) return;

    let start = 0;
    const increment = Math.ceil(targetAwards / (durationAwards / 50));
    const interval = setInterval(() => {
      start += increment;
      if (start >= targetAwards) {
        start = targetAwards;
        clearInterval(interval);
      }
      setAwardsCount(start);
    }, 50);

    return () => clearInterval(interval);
  }, [AwardsIsVisible]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setClientIsVisible(true); // Updated to ClientIsVisible
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!ClientIsVisible) return; // Updated to ClientIsVisible

    let start = 0;
    const increment = Math.ceil(targetClient / (durationClient / 50));
    const interval = setInterval(() => {
      start += increment;
      if (start >= targetClient) {
        start = targetClient;
        clearInterval(interval);
      }
      setClientCount(start); // Updated to setClientCount
    }, 50);

    return () => clearInterval(interval);
  }, [ClientIsVisible]); // Updated dependency to ClientIsVisible

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setClientRatingIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!ClientRatingIsVisible) return;

    let start = 0;
    const increment = Math.ceil(
      targetClientRating / (durationClientRating / 50)
    );
    const interval = setInterval(() => {
      start += increment;
      if (start >= targetClientRating) {
        start = targetClientRating;
        clearInterval(interval);
      }
      setClientRatingCount(start);
    }, 50);

    return () => clearInterval(interval);
  }, [ClientRatingIsVisible]);

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

  const Content = [
    {
      id: 1,
      Logo: Smallicon1,
      Head: "Learn More",
      subHead: "People-Centric Approach",
      para: "We believe that employees are an organization’s greatest asset. Every strategy we craft puts people at the center, driving culture, engagement, and long-term success.",
    },
    {
      id: 2,
      Logo: Smallicon2,
      Head: "Learn More",
      subHead: "Integrity in Every Interaction",
      para: "From policy design to leadership consulting, we uphold transparency and ethical standards - building trust with both clients and their teams.",
    },
    {
      id: 3,
      Logo: Smallicon3,
      Head: "Learn More",
      subHead: "Strategic Simplicity",
      para: "HR doesn’t have to be complex. We turn intricate processes into clear, actionable strategies that align with your business goals and stage.",
    },
    {
      id: 4,
      Logo: Smallicon4,
      Head: "Learn More",
      subHead: "Commitment to Continuous Growth",
      para: "We empower organizations to evolve by staying ahead of HR trends and helping teams grow through structured development and smart succession planning.",
    },
  ];
  const questions = [
    {
      id: 1,
      question: "What is a Fractional CHRO?",
      answer:
        "A senior HR expert who works part-time to guide your HR strategy without full-time costs.",
    },
    {
      id: 2,
      question: "Do you help with hiring too?",
      answer:
        "Yes, we assist in leadership, mid-level, and strategic hiring processes.",
    },
    {
      id: 3,
      question: "Can you handle HR compliance and audits?",
      answer:
        "Absolutely. We set up policies and systems that keep you fully compliant.",
    },
    {
      id: 4,
      question: "What makes Sapience Minds different?",
      answer:
        "You get deep HR expertise + startup understanding, all with a personal touch.",
    },
    {
      id: 5,
      question: "When should I consider professional HR services?",
      answer:
        "When you're hiring, scaling, or facing people/process challenges.",
    },
    {
      id: 6,
      question: "What kind of companies do you work with?",
      answer:
        "We work with startups, small businesses, and scaling teams across industries.",
    },
  ];
  return (
    <>
         <Helmet>
        <title>
        Sapience Minds-About Our Company
        </title>
        <meta
          name="description"
          content="Sapience Minds was founded with a clear mission to help startups and growing businesses establish strong HR foundations without the cost of a full-time CHRO. By offering Fractional CHRO services, we empower companies to access senior HR leadership on-demand, driving strategic decisions in talent acquisition, culture building, compliance, and performance. Our services are agile, scalable, and deeply aligned with each client’s business goals, ensuring people and performance work hand in hand."
        />

        {/* Open Graph Meta Tags (for WhatsApp, Facebook, LinkedIn) */}
        <meta
          property="og:title"
          content="About Our Company"
        />
        <meta
          property="og:description"
          content="Sapience Minds was founded with a clear mission to help startups and growing businesses establish strong HR foundations without the cost of a full-time CHRO. By offering Fractional CHRO services, we empower companies to access senior HR leadership on-demand, driving strategic decisions in talent acquisition, culture building, compliance, and performance. Our services are agile, scalable, and deeply aligned with each client’s business goals, ensuring people and performance work hand in hand."
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
          content="About Our Company"
        />
        <meta
          name="twitter:description"
          content="Sapience Minds was founded with a clear mission to help startups and growing businesses establish strong HR foundations without the cost of a full-time CHRO. By offering Fractional CHRO services, we empower companies to access senior HR leadership on-demand, driving strategic decisions in talent acquisition, culture building, compliance, and performance. Our services are agile, scalable, and deeply aligned with each client’s business goals, ensuring people and performance work hand in hand."
        />
        <meta
          name="twitter:image"
          content="https://tridizi.com/assets/10782741_19197279%201-DKNLt4HA.svg"
        />
      </Helmet>
      <div className="About_Main_Container">
        {/* <p className="About_Heading">About Us</p> */}
        <p className="About_Sub_Heading">About Our Company</p>
        <div className="Image_Text_Container">
          <div className="Image_About" data-aos="zoom-out">
            <img src={AboutMain1} alt="AboutMain1"></img>
          </div>
          <div className="Text_Container" data-aos="fade-right">
            <p>
            Sapience Minds was founded with a clear mission to help startups and growing businesses establish strong HR foundations without the cost of a full-time CHRO. By offering Fractional CHRO services, we empower companies to access senior HR leadership on-demand, driving strategic decisions in talent acquisition, culture building, compliance, and performance. Our services are agile, scalable, and deeply aligned with each client’s business goals, ensuring people and performance work hand in hand.
            </p>
            <p> 
            Backed by over two decades of leadership experience, Sapience Minds delivers end-to-end HR services with precision and purpose. We go beyond traditional consulting by becoming embedded strategic partners offering frameworks, policies, and people solutions that are not only compliant and structured but also future-ready. Whether you're hiring your first employee or scaling a 100-member team, we bring the expertise and vision to help your organization thrive.
            </p>
          </div>
        </div>
      </div>

      <div className="Section_main_Container">
        <div className="Images_Background">
          <img src={Bluelayer} alt="blueLayer" className="blueLayer"></img>
          <img
            src={Orangelayer}
            alt="orangeLayer"
            className="orangeLayer"
          ></img>
        </div>
        <div className="About_page_section2">
          <div className="Left_side_container">
            <h1 className="Head_Section2">About Babitha Remith</h1>
            <p className="babitha_dgnatn">Founder & Director | Fractional CHRO | HR Transformation Expert</p>

            <div className="Text_container_layer2">
              <p data-aos="fade-right">
              With over 23 years of HR leadership experience in the technology sector, Babitha Remith brings deep expertise in building people-first organizations. Having held senior roles in global firms like IBM, Micro Focus, and ESI Group, she has led high-impact initiatives in talent management, performance improvement, and employee engagement.
              </p>
              <p data-aos="fade-right">
              A certified Talent Management Professional and Organizational Development expert, Babitha combines strategic thinking with a people-centered mindset. Her passion lies in helping businesses scale smartly with the right HR frameworks. Now, through Sapience Minds, she offers Fractional CHRO leadership to startups and SMBs-ensuring HR isn’t just a function, but a strategic driver of business success.
              </p>
            </div>
          </div>
          <div className="Right_side_Images_container">
            <p className="Head_Section3">About Babitha Remith</p>
            <img
              src={Person}
              alt="PersonImage"
              data-aos="zoom-out-up"
              className="PersonImage"
            ></img>
            <img
              src={SquareGroup}
              alt="SquareGroup"
              className="SquareGroup"
              data-aos="zoom-in"
            ></img>
            <img
              src={TringleGroup}
              alt="Tringle_Group"
              className="Tringle_Group"
              data-aos="zoom-in"
            ></img>
            <img
              src={TradeMark}
              alt="TradeMark_image"
              className="TradeMark_image"
              data-aos="zoom-in"
            ></img>
            <img
              src={CircleGroup}
              alt="Circle_image"
              className="Circle_image"
              data-aos="zoom-in"
            ></img>
            <img
              src={plusIcon}
              alt="plusIcon"
              className="plusIcon"
              data-aos="zoom-in"
              data-aos-duration="1000"
            ></img>
            
          </div>
        </div>
        {/* <p className="babitha_name">Babitha Remith</p> */}
        {/* <p className="babitha_designation">Founder & Director | Fractional CHRO | HR Transformation Expert</p> */}
      </div>

      <div className="Section3_Main_Container">
        <p className="Section3_Heading1" data-aos="fade-right">
          Our Core Values
        </p>
        <p className="Section3_Heading2" data-aos="zoom-in">
        Rooted in Values, Driven by People
        </p>
        <p className="Section3_Heading_para" data-aos="fade-right">
        At Sapience Minds, our work is guided by principles that reflect the very heart of Human Resources trust, empathy, impact, and growth. These values shape every solution we provide, ensuring that our clients receive not only expert guidance but also a people-first approach that scales with their vision.
        </p>
        <div className="Section3_Container_Icons_Container">
          {Content.map((item, i) => (
            <div
              key={i}
              className="Single_container_Icon"
              data-aos="flip-right"
            >
              <p className="Image_container_image">
                <img src={item.Logo} alt={item.Logo} />
              </p>
              <p className="Cards_Heading">{item.Head}</p>
              <p className="Horizontal_row"></p>
              <p className="Cards_Sub_head">{item.subHead}</p>
              <p className="Cards_Name">{item.para}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="Section4_Main_Container">
        <p className="Section4_Main_Heading">
          Our Mission is To Help Easy Organize Your Employee
        </p>
        <div className="Missions_container" ref={ref}>
          <div className="Sub_Missions">
            <p id="sub_count">{count}+</p>
            <p>Years of Experience</p>
          </div>
          <div className="Sub_Missions">
            <p id="sub_count">{AwardsCount}+</p>
            <p>HR’s Trained</p>
          </div>
          <div className="Sub_Missions">
            <p id="sub_count">{ClientCount}%</p>
            <p>Client Satisfaction</p>
          </div>
          <div className="Sub_Missions">
            <p id="sub_count">{ClientRatingCount}</p>
            <p>Client Rating</p>
          </div>
        </div>
      </div>

      <div className="Section5_Main_Container">
        <p
          className="Faq_Main_head"
          data-aos="fade-down"
          // data-aos-easing="linear"
          // data-aos-duration="1500"
        >
          Frequently Asked Questions
        </p>
        <p
          className="Faq_Sub_head"
          data-aos="fade-up"
          // data-aos-easing="linear"
          // data-aos-duration="1500"
        >
         Explore answers to common queries about our HR services, Fractional CHRO solutions, and how Sapience Minds can support your business growth. Whether you're curious about compliance, talent strategies, or customized HR plans we’re here to simplify the complex.
        </p>
        <div className="Faq_Container">
          {questions.map((ques, id) => (
            <div
              className="Single_Faq"
              key={id}
              onClick={() => changebool(ques?.id)}
              data-aos="fade-right"
            >
              <div className="Content_Questions" >
                <span className="Question">{ques.question}</span>
                <span className="Icons_class">
                  {showdata && ques.id === clickedid ? (
                    <IoIosArrowUp className="Icons_class_size"/>
                  ) : (
                    <IoIosArrowDown className="Icons_class_size"/>
                  )}
                </span>
              </div>
              {showdata && ques.id === clickedid && (
                <div className="FaqAnswers" >
                  <p>{ques.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="Pre_Footer_Container">
        <PreFooter
          sourcepages="AboutUs"
          Head="Let’s Build Your People Strategy – Together"
          Content="Your startup deserves more than just reactive HR. Whether you need structure, compliance, or a culture strategy, let’s have a conversation that moves your business forward. Book a discovery call or fill out the form and let’s shape a smarter, people-powered future for your company."
        />
      </div>
      <ToastContainer />
    </>
  )
}
