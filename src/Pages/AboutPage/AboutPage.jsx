import React, { useEffect, useRef, useState } from "react";
import "./AboutPage.css";
import AboutMain1 from "../../assets/AboutPage/AboutMain1.svg";
import Orangelayer from "../../assets/AboutPage/orangeshade.svg";
import Bluelayer from "../../assets/AboutPage/blushade.svg";
import Person from "../../assets/AboutPage/personImage.svg";
import TringleGroup from "../../assets/AboutPage/TriangleImages.svg";
import TradeMark from "../../assets/AboutPage/trademark.svg";
import CircleGroup from "../../assets/AboutPage/CircleGroup.png";
import SquareGroup from "../../assets/AboutPage/SquareGroup.png";
import plusIcon from "../../assets/AboutPage/PlusIcon.svg";
import Smallicon1 from "../../assets/AboutPage/Smallicon1.svg";
import Smallicon2 from "../../assets/AboutPage/Smallicon2.svg";
import Smallicon3 from "../../assets/AboutPage/Smallicon3.svg";
import Smallicon4 from "../../assets/AboutPage/Smallicon4.svg";
import { IoIosArrowDown } from "react-icons/io";
import { PreFooter } from "../../Components/PreFooter/PreFooter";
import AOS from "aos";
import "aos/dist/aos.css";

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
  const targetClientRating = 4.9;
  const durationClientRating = 2000;

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
      subHead: "Powerful Dashboard",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 2,
      Logo: Smallicon2,
      Head: "Learn More",
      subHead: "Powerful Dashboard",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 3,
      Logo: Smallicon3,
      Head: "Learn More",
      subHead: "Powerful Dashboard",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 4,
      Logo: Smallicon4,
      Head: "Learn More",
      subHead: "Powerful Dashboard",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];
  const questions = [
    "How can I stay informed about new job openings?",
    "How can I stay informed about new job openings?",
    "How can I stay informed about new job openings?",
    "How can I stay informed about new job openings?",
    "How can I stay informed about new job openings?",
    "How can I stay informed about new job openings?",
  ];
  return (
    <>
      <div className="About_Main_Container">
        <p className="About_Heading">About Us</p>
        <p className="About_Sub_Heading">About Our Company</p>
        <div className="Image_Text_Container">
          <div className="Image_About" data-aos="zoom-out">
            <img src={AboutMain1} alt="AboutMain1"></img>
          </div>
          <div className="Text_Container" data-aos="zoom-out">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen bookLorem Ipsum is
              simply dummy text of the printing and typesetting industry.{" "}
            </p>
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen bookLorem Ipsum is simply
              dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to
              make a type specimen book
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
            <h1 className="Head_Section2">About Us</h1>
            <div className="Text_container_layer2">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen bookLorem
                Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </p>
              <p>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen bookLorem Ipsum is
                simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book
              </p>
            </div>
          </div>
          <div className="Right_side_Images_container">
            <h1 className="Head_Section3">About Us</h1>
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
              data-aos="fade-up-right"
            ></img>
            <img
              src={TradeMark}
              alt="TradeMark_image"
              className="TradeMark_image"
              data-aos="fade-right"
            ></img>
            <img
              src={CircleGroup}
              alt="Circle_image"
              className="Circle_image"
              data-aos="fade-left"
            ></img>
            <img
              src={plusIcon}
              alt="plusIcon"
              className="plusIcon"
              data-aos="fade-up"
              data-aos-duration="1000"
            ></img>
          </div>
        </div>
      </div>

      <div className="Section3_Main_Container">
        <p className="Section3_Heading1" data-aos="fade-right">
          Our Core Functions
        </p>
        <p className="Section3_Heading2" data-aos="zoom-in">
          Lorem Ipsum is simply dummy text
        </p>
        <p className="Section3_Heading_para" data-aos="fade-left">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book
        </p>
        <div className="Section3_Container_Icons_Container">
          {Content.map((item, i) => (
            <div
              key={i}
              className="Single_container_Icon"
              data-aos="zoom-in-up"
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
            <h1>{count}+</h1>
            <p>Years of Experience</p>
          </div>
          <div className="Sub_Missions">
            <h1>{AwardsCount}+</h1>
            <p>Industry Awards</p>
          </div>
          <div className="Sub_Missions">
            <h1>{ClientCount}%</h1>
            <p>Client Satisfaction</p>
          </div>
          <div className="Sub_Missions">
            <h1>{ClientRatingCount}</h1>
            <p>Client Rating</p>
          </div>
        </div>
      </div>

      <div className="Section5_Main_Container">
        <p
          className="Faq_Main_head"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          Frequently Asked Questions
        </p>
        <p
          className="Faq_Sub_head"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book
        </p>
        <div className="Faq_Container">
          {questions.map((ques, id) => (
            <div
              className="Single_Faq"
              key={id}
              data-aos="fade-right"
              data-aos-offset={`${300 + 5 + id}`}
              data-aos-easing="ease-in-sine"
            >
              <div className="Content_Questions">
                <span className="Question">{ques}</span>
                <span className="Icons_class">
                  <IoIosArrowDown />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="Pre_Footer_Container">
        <PreFooter
          Head="Unlock The Power Of Cloud HR Solutions"
          Content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
        />
      </div>
    </>
  );
};
