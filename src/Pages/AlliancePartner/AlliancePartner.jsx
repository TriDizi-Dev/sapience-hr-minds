import React, { useEffect } from "react";
import "./AlliancePartner.css";
import HeroImage from "../../assets/AlliancePartner/HeroImage.svg";
import BlueLayer from "../../assets/AboutPage/blushade.svg";
import orangeLayer from "../../assets/AboutPage/orangeshade.svg";
import SquareIcons from "../../assets/AlliancePartner/LayerContainer.svg";
import PersonImage from "../../assets/AlliancePartner/education.avif";
import Smallicon1 from "../../assets/AboutPage/Smallicon1.svg";
import Smallicon2 from "../../assets/AboutPage/Smallicon2.svg";
import Smallicon3 from "../../assets/AboutPage/Smallicon3.svg";
import Smallicon4 from "../../assets/AboutPage/Smallicon4.svg";
import man from "../../assets/HomePage/man.svg";
import { PreFooter } from "../../Components/PreFooter/PreFooter";
import AOS from "aos";
import "aos/dist/aos.css";

export const AlliancePartner = () => {

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
    {
      id: 5,
      Logo: Smallicon1,
      Head: "Learn More",
      subHead: "Powerful Dashboard",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 6,
      Logo: Smallicon2,
      Head: "Learn More",
      subHead: "Powerful Dashboard",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 7,
      Logo: Smallicon3,
      Head: "Learn More",
      subHead: "Powerful Dashboard",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 8,
      Logo: Smallicon4,
      Head: "Learn More",
      subHead: "Powerful Dashboard",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];
  return (
    <>
      <div className="AlliancePartner_Main_Container">
        <p className="BlueLayer_HeroBanner">
          <img src={BlueLayer} alt="BlueLayer"></img>
        </p>
        <p className="Image_Conatiner">
          <img src={HeroImage} alt="HeroImage"></img>
        </p>
        <div className="Image_Upper_Text_Container" data-aos="zoom-in">
          <p className="Header_Text">Lorem ipsum dolor</p>
          <p className="Header_Sub_Text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
      <div className="Section2_Layer_AlliancePartner">
        <div className="Left_Container_AlliancePartner" data-aos="fade-right" >
          <p className="Heading_text_AlliancePartner">Lorem ipsum dolor </p>
          <p className="para1_text_AlliancePartner">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum is
            simply dummy text of the printing and typesetting industry
          </p>
          <p className="para2_text_AlliancePartner">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum is
            simply dummy text of the printing and typesetting industry.
          </p>
        </div>
        <div className="Right_Container_AlliancePartner" >
          <p className="right_Header_Text">Lorem ipsum dolor</p>
          {/* <p className="SquareIcons_Cont_img">
            <img src={SquareIcons} alt="SquareIcons"></img>
          </p> */}
          <p className="Person_Cont_img">
            <img src={PersonImage} alt="PersonImage" data-aos="zoom-in"></img>
          </p>
        </div>
      </div>
      <div className="Section3_Alliance_Main_Container">
        <p className="Section3_Alliance_Heading1" data-aos="fade-right">
          Our Core Functions
        </p>
        <p className="Section3_Alliance_Heading2" data-aos="zoom-in">
          Lorem Ipsum is simply dummy text
        </p>
        <p className="Section3_Alliance_Heading_para" data-aos="fade-right">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book
        </p>
        <div className="Section3_Alliance_Container_Icons_Container">
          {Content.map((item, i) => (
            <div
              className="Single_Alliance_container_Icon"
              data-aos="flip-left"
             >
              <p className="Image_Alliance_container_image">
                <img src={item.Logo} alt={item.Logo} />
              </p>
              <p className="Horizontal_Alliance_row"></p>
              <p className="Cards_Alliance_Sub_head">{item.subHead}</p>
              <p className="Cards_Alliance_Name">{item.para}</p>
              {/* <p className="Cards_Alliance_Heading">{item.Head}</p> */}
            </div>
          ))}
          <p className="orangeLayer_Contaner">
            <img src={orangeLayer} alt="orangeLayer" />
          </p>
        </div>
      </div>
      <div className="Alliance_layer4_outer_main">
        <div className="Alliance_layer4_outer">
          <div className="Alliance_layer4_part1" data-aos="fade-down">
            <h6 className="Alliance_layer4_part1_heading">Testimonials</h6>
            <h1 className="Alliance_layer4_part1_heading2">
              See Why Our Clients Love Us
            </h1>
          </div>

          <div className="Alliance_layer4_cards_outer">
            <div
              className="Alliance_layer4_card"
              data-aos="zoom-in"
              
            >
              <p className="Alliance_layer4_card_logo">Logo</p>
              <p className="Alliance_layer4_card_para">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever.
              </p>
              <div className="Alliance_layer4_card_bottom">
                <div className="Alliance_layer4_bottom_logo_outer">
                  <img src={man} alt="man" className="card_bottom_logo" />
                </div>
                <div className="Alliance_card_bottom_right_text">
                  <h6 className="Alliance_card_bottom_heading">Name</h6>
                  <p className="Alliance_card_bottom_para">Lorem Ipsum</p>
                </div>
              </div>
            </div>
            <div
              className="Alliance_layer4_card"
              data-aos="zoom-in"
              
            >
              <p className="Alliance_layer4_card_logo">Logo</p>
              <p className="Alliance_layer4_card_para">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever.
              </p>
              <div className="Alliance_layer4_card_bottom">
                <div className="Alliance_layer4_bottom_logo_outer">
                  <img
                    src={man}
                    alt="man"
                    className="Alliance_card_bottom_logo"
                  />
                </div>
                <div className="Alliance_card_bottom_right_text">
                  <h6 className="Alliance_card_bottom_heading">Name</h6>
                  <p className="Alliance_card_bottom_para">Lorem Ipsum</p>
                </div>
              </div>
            </div>
            <div
              className="Alliance_layer4_card"
              data-aos="zoom-in"
              
            >
              <p className="Alliance_layer4_card_logo">Logo</p>
              <p className="Alliance_layer4_card_para">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever.
              </p>
              <div className="Alliance_layer4_card_bottom">
                <div className="Alliance_layer4_bottom_logo_outer">
                  <img
                    src={man}
                    alt="man"
                    className="Alliance_card_bottom_logo"
                  />
                </div>
                <div className="Alliance_card_bottom_right_text">
                  <h6 className="Alliance_card_bottom_heading">Name</h6>
                  <p className="Alliance_card_bottom_para">Lorem Ipsum</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="Alliance_Pre_Footer_Container">
          <PreFooter
            Head="Unlock The Power Of Cloud HR Solutions"
            Content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
          />
        </div>
      </div>
    </>
  );
};
