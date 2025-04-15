import React from "react";
import "./HrLearning.css";
import HrBanner from "../../assets/HrLearning/HrLearnHero.svg";

export const HrLearning = () => {
  return (
    <>
      <div className="Hr_Hero_container">
        <img src={HrBanner} alt="HrBanner"></img>
        <p>Internships</p>
      </div>
      <div className="Section2_Main_container">
        <p className="Section2_Heading_text">What you learn in Internship?</p>
        <div className="Section2_Cards_Container">
          <div className="Left_Side_Container_Section2">
            <div className="Left_Single_Side_Cards_Container">
              <p className="Single_Cards_head">HR Operations</p>
              <div className="Single_Cards_Sub_heads_text">
                <p>Duration</p>
                <p>Lorem</p>
                <p>Lorem</p>
              </div>
              <p className="Single_Cards_Sub_text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took....</p>
            </div>
          </div>
          <div className="Right_Side_Container_Section2"></div>
        </div>
      </div>
    </>
  );
};
