import React from "react";
import "./AlliancePartner.css";
import HeroImage from "../../assets/AlliancePartner/HeroImage.svg";
import BlueLayer from "../../assets/AboutPage/blushade.svg";
import SquareIcons from "../../assets/AlliancePartner/LayerContainer.svg";
import PersonImage from "../../assets/AlliancePartner/PersonImg.svg";

export const AlliancePartner = () => {
  return (
    <>
      <div className="AlliancePartner_Main_Container">
        <p className="BlueLayer_HeroBanner">
          <img src={BlueLayer} alt="BlueLayer"></img>
        </p>
        <p className="Image_Conatiner">
          <img src={HeroImage} alt="HeroImage"></img>
        </p>
        <div className="Image_Upper_Text_Container">
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
        <div className="Left_Container_AlliancePartner">
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
        <div className="Right_Container_AlliancePartner">
          <p className="SquareIcons_Cont_img">
            <img src={SquareIcons} alt="SquareIcons"></img>
          </p>
          <p className="Person_Cont_img">
            <img src={PersonImage} alt="PersonImage"></img>
          </p>
        </div>
      </div>
    </>
  );
};
