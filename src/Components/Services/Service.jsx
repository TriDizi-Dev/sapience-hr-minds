import React, { useEffect, useRef, useState } from "react";
import "./Service.css";
import Image1 from "../../assets/Service/Image1.svg";
import BlueLayer from "../../assets/Service/BlueBackground.svg";
import OrangeLayer from "../../assets/Service/OrangeBackground.svg";
import Rocket from "../../assets/Service/first_img.svg";
import Goal from "../../assets/Service/fourth_img.svg";
import Cup from "../../assets/Service/second_img.svg";
import Medal from "../../assets/Service/fiveth_img.svg";
import Setting from "../../assets/Service/thrird_img.svg";
import CircleGroup from "../../assets/AboutPage/CircleGroup.png";
import TradeMark from "../../assets/AboutPage/trademark.svg";
import TringleGroup from "../../assets/AboutPage/TriangleImages.svg";
import Instagram from "../../assets/Service/Insta.svg";
import Message from "../../assets/Service/Message.svg";
import Target from "../../assets/Service/Target.svg";
import Speaker from "../../assets/Service/Speaker.svg";
import Cursur from "../../assets/Service/Cursur.svg";
import Play from "../../assets/Service/Play.svg";
import Monitor from "../../assets/Service/Monitor.svg";
import LastImge from "../../assets/Service/LastImage.svg";
import { PreFooter } from "../PreFooter/PreFooter";
import AOS from "aos";
import "aos/dist/aos.css";

export const Service = ({
  ServiceHeadName,
  ServiceHeadContent,
  ImageLeft,
  ImageRight,
  Para1Head,
  Para1Content1,
  Para1Content2,
  Para2Head,
  Para2Content2,
  List1,
  List2,
  List3,
  List4,
  Para3Head,
  Para3Content1,
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const target = 208;
  const duration = 2000;
  const ref = useRef(null);

  const [AwardsCount, setAwardsCount] = useState(0);
  const [AwardsIsVisible, setAwardsIsVisible] = useState(false);
  const targetAwards = 76;
  const durationAwards = 2000;

  const [ClientCount, setClientCount] = useState(0);
  const [ClientIsVisible, setClientIsVisible] = useState(false);
  const targetClient = 43;
  const durationClient = 2000;

  const [ClientRatingCount, setClientRatingCount] = useState(0);
  const [ClientRatingIsVisible, setClientRatingIsVisible] = useState(false);
  const targetClientRating = 23;
  const durationClientRating = 2000;

  const [GoalCount, setGoalCount] = useState(0);
  const [GoalIsVisible, setGoalIsVisible] = useState(false);
  const targetGoal = 49;
  const durationGoal = 2000;

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
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setGoalIsVisible(true);
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
    const increment = Math.ceil(targetGoal / (durationGoal / 50));
    const interval = setInterval(() => {
      start += increment;
      if (start >= targetGoal) {
        start = targetGoal;
        clearInterval(interval);
      }
      setGoalCount(start);
    }, 50);

    return () => clearInterval(interval);
  }, [GoalIsVisible]);

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

  return (
    <div className="Service_MAin_Container">
      <div className="Service_head_Container">
        <p
          className="Service_head_name"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          {ServiceHeadName}
        </p>
        <p
          className="Service_content_name"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
        >
          {ServiceHeadContent}
        </p>
      </div>
      <div className="Service_Page_Section2_Hero">
        <div className="Image_Container_service_Left"  data-aos="fade-right">
          <p>01</p>
          <img src={Image1} alt="Image1"></img>
        </div>
        <div className="Middle_Content_Container"  >
          <p className="Middle_Secound_Head" data-aos="fade-right">{Para1Head}</p>
          <p className="Niddle_sub_content" data-aos="fade-right">{Para1Content1} </p>
          <p className="Niddle_sub_content" data-aos="fade-right">{Para1Content2} </p>

          <p className="Middle_Secound_Head" data-aos="zoom-in">{Para2Head}</p>
          <p className="Niddle_sub_content" data-aos="zoom-in">{Para2Content2} </p>

          <ul className="List_Items_Middle">
            <li data-aos="fade-right">{List1}</li>
            <li data-aos="fade-right"> {List2}</li>
            <li data-aos="fade-right">{List3}</li>
            <li data-aos="fade-right">{List4}</li>
          </ul>
          <p className="Middle_Secound_Head" data-aos="zoom-in">{Para3Head}</p>
          <p className="Niddle_sub_content" data-aos="zoom-in">{Para3Content1} </p>
        </div>

        <div className="Image_Container_service_right"  data-aos="fade-left" >
          <p>02</p>
          <img src={Image1} alt="Image1" />
        </div>
      </div>
      <img
        src={BlueLayer}
        alt="Layer"
        className="Background_Image_Container"
      ></img>

      <div className="Service_Page_Section3">
        <div className="Images_Container_Background">
          <img
            src={TradeMark}
            alt="TradeMark"
            className="Service_Page_Section3_image1"
     
          ></img>
          <img
            src={CircleGroup}
            alt="CircleGroup"
            className="Service_Page_Section3_image2"
  
          ></img>
          <img
            src={OrangeLayer}
            alt="OrangeLayer"
            className="Service_Page_Section3_OrangeLayer"
          ></img>

          <div className="Image_Container_Section3_Main_Images">
            <div className="Image_Container_Section3_imge_Cont1" ref={ref}>
              <img src={Rocket} alt="Rocket"></img>
              <span className="Rocket_count">{count}+</span>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div className="Image_Container_Section3_imge_Cont2">
              <img src={Cup} alt="Cup"></img>
              <span className="Cup_count">{AwardsCount}+</span>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div className="Image_Container_Section3_imge_Cont3">
              <img src={Medal} alt="Medal"></img>
              <span className="Cup_count">{ClientCount}+</span>

              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div className="Image_Container_Section3_imge_Cont4">
              <img src={Goal} alt="Goal"></img>
              <span className="Goal_count">{GoalCount}+</span>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div className="Image_Container_Section3_imge_Cont5">
              <img src={Setting} alt="Setting"></img>
              <span className="Setting_count">{ClientRatingCount}+</span>

              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <img
              src={TringleGroup}
              alt="Triangle"
              className="Service_Page_Section3_Triangle"
            ></img>
          </div>
        </div>
      </div>

      <div className="Service_age_section4">
        <p className="Our_service_Head_title">Our Services</p>
        <div className="Service_Cards">
          <div
            className="Service_Icon_Container"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <p className="Service_Img">
              <img src={Instagram} alt="Instagram" />
            </p>
            <p className="SerViceImage_text_head">Lorem Ipsum</p>
            <p className="SerViceImage_text">
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the
            </p>
          </div>
          <div
            className="Service_Icon_Container"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <p className="Service_Img">
              <img src={Message} alt="Instagram" />
            </p>
            <p className="SerViceImage_text_head">Lorem Ipsum</p>
            <p className="SerViceImage_text">
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the
            </p>
          </div>
          <div
            className="Service_Icon_Container marginChnage"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <p className="Service_Img">
              <img src={Target} alt="Instagram" />
            </p>
            <p className="SerViceImage_text_head">Lorem Ipsum</p>
            <p className="SerViceImage_text">
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the
            </p>
          </div>
          <div
            className="Service_Icon_Container Middle_service"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <p className="Service_Img">
              <img src={Speaker} alt="Instagram" />
            </p>
            <p className="SerViceImage_text_head">Lorem Ipsum</p>
            <p className="SerViceImage_text first_services">
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the
            </p>
          </div>
          <div
            className="Service_Icon_Container marginChnage second_marginChanges"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <p className="Service_Img">
              <img src={Cursur} alt="Instagram" />
            </p>
            <p className="SerViceImage_text_head">Lorem Ipsum</p>
            <p className="SerViceImage_text">
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the
            </p>
          </div>
          <div
            className="Service_Icon_Container third_marginChanges"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <p className="Service_Img">
              <img src={Play} alt="Instagram" />
            </p>
            <p className="SerViceImage_text_head">Lorem Ipsum</p>
            <p className="SerViceImage_text">
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the
            </p>
          </div>
          <div
            className="Service_Icon_Container"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <p className="Service_Img">
              <img src={Monitor} alt="Instagram" />
            </p>
            <p className="SerViceImage_text_head">Lorem Ipsum</p>
            <p className="SerViceImage_text">
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the
            </p>
          </div>
        </div>
      </div>

      <div className="Service_last_secound_layer">
        <p
          className="Service_last_secound_layer_Img"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <img src={LastImge} alt="LastImge" />
        </p>
        <div
          className="Service_last_secound_layer_Right"
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="1000"
        >
          <p className="Service_last_secound_layer_Head">
            Transforming Ambition Into Achievement
          </p>
          <p className="Service_last_secound_layer_text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className="Service_last_secound_layer_text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className="Service_last_secound_layer_text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </div>

      <div className="Pre_Footer_Service_Container">
        <PreFooter
          Head="Lorem Ipsum is simply dummy text of the"
          Content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
        />
      </div>
    </div>
  );
};
