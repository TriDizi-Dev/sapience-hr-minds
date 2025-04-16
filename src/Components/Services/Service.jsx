import React, { useEffect } from "react";
import "./Service.css";
import Image1 from "../../assets/Service/Image1.svg";
import BlueLayer from "../../assets/Service/BlueBackground.svg";
import OrangeLayer from "../../assets/Service/OrangeBackground.svg";
import Rocket from "../../assets/Service/Rocket.svg";
import Goal from "../../assets/Service/Goal.svg";
import Cup from "../../assets/Service/Cup.svg";
import Medal from "../../assets/Service/Medal.svg";
import Setting from "../../assets/Service/Setting.svg";
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

export const Service = () => {
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
          Service 1
        </p>
        <p
          className="Service_content_name"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book
        </p>
      </div>
      <div className="Service_Page_Section2_Hero">
        <div className="Image_Container_service_Left" data-aos="fade-right">
          <p>01</p>
          <img src={Image1} alt="Image1"></img>
        </div>
        <div className="Middle_Content_Container" data-aos="zoom-in">
          <p className="Middle_Secound_Head">Lorem ipsum dolor</p>
          <p className="Niddle_sub_content">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book Lorem Ipsum is simply
            dummy text of the printing and typesetting industry.{" "}
          </p>
          <p className="Niddle_sub_content">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book Lorem Ipsum is simply
            dummy text of the printing and typesetting industry.{" "}
          </p>

          <p className="Middle_Secound_Head">Lorem ipsum dolor</p>
          <p className="Niddle_sub_content">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book Lorem Ipsum is simply
            dummy text of the printing and typesetting industry.{" "}
          </p>

          <ul className="List_Items_Middle">
            <li>Non magni quisquam</li>
            <li>Eum aperiam facilis</li>
            <li>Id quibusdam corporis et voluptate minus</li>
            <li>Qui internos impedit vel unde</li>
          </ul>
          <p className="Middle_Secound_Head">Lorem ipsum dolor</p>
          <p className="Niddle_sub_content">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book Lorem Ipsum is simply
            dummy text of the printing and typesetting industry.{" "}
          </p>
        </div>

        <div className="Image_Container_service_right" data-aos="fade-left">
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
            data-aos="fade-right"
          ></img>
          <img
            src={CircleGroup}
            alt="CircleGroup"
            className="Service_Page_Section3_image2"
            data-aos="fade-left"
          ></img>
          <img
            src={OrangeLayer}
            alt="OrangeLayer"
            className="Service_Page_Section3_OrangeLayer"
          ></img>

          <div className="Image_Container_Section3_Main_Images">
            <div className="Image_Container_Section3_imge_Cont1">
              <img src={Rocket} alt="Rocket" data-aos="zoom-in"></img>
              <p
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div className="Image_Container_Section3_imge_Cont2">
              <img src={Cup} alt="Cup" data-aos="zoom-in"></img>
              <p
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div className="Image_Container_Section3_imge_Cont3">
              <img src={Medal} alt="Medal" data-aos="zoom-in"></img>
              <p
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div className="Image_Container_Section3_imge_Cont4">
              <img src={Goal} alt="Goal" data-aos="zoom-in"></img>
              <p
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div className="Image_Container_Section3_imge_Cont5">
              <img src={Setting} alt="Setting" data-aos="zoom-in"></img>
              <p
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <img
              src={TringleGroup}
              alt="Triangle"
              className="Service_Page_Section3_Triangle"
              data-aos="zoom-in"
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
