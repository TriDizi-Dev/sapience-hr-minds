import React, { useEffect } from "react";
import "./PrivacyAndTerms.css";
import circleframe from "../../assets/PrivacyandTerms/Frame.svg";
import banner from "../../assets/PrivacyandTerms/privacy.svg";
import bgeffect from "../../assets/PrivacyandTerms/bgeffect.svg";
import { PreFooter } from "../PreFooter/PreFooter";

import AOS from "aos";
import "aos/dist/aos.css";

function PrivacyAndTerms({
  BannerHeading,
  BannerText,
  subheading1,
  subheading2,
  text1,
  text2,
  list1,
  list2,
  list3,
  list4,
}) {
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
    <div className="privacy_terms_outer_main">
      <div className="privacy_terms_banner_outer">
        <img src={bgeffect} alt="bgeffect" className="bg_effect" />
        <h1 className="privacy_terms_heading">{BannerHeading}</h1>
        <p className="privacy_terms_para">{BannerText}</p>
        <img src={banner} alt="banner" className="privacy_terms_img" />
      </div>

      <div className="privacy_terms_content_outer">
        <div className="privacy_terms_content">
          <img
            src={circleframe}
            alt="circleframe"
            className="side_circle_frame"
          />

          <h2 className="privacy_terms_content_heading" data-aos="zoom-in">
            {subheading1}
          </h2>
          <p className="privacy_terms_content_para" data-aos="fade-right">
            {text1}
          </p>
          <p className="privacy_terms_content_para" data-aos="fade-right">
            {text2}
          </p>

          <h2 className="privacy_terms_content_heading" data-aos="zoom-in">
            {subheading1}
          </h2>
          <p className="privacy_terms_content_para" data-aos="fade-right">
            {text1}
          </p>

          <div className="content_list_items_outer">
            <li className="content_list_items" data-aos="fade-right">
              {list1}
            </li>
            <li className="content_list_items" data-aos="fade-right">
              {list2}
            </li>
            <li className="content_list_items" data-aos="fade-right">
              {list3}
            </li>
            <li className="content_list_items" data-aos="fade-right">
              {list4}
            </li>
          </div>
          <h2 className="privacy_terms_content_heading" data-aos="zoom-in">
            {subheading1}
          </h2>
          <p className="privacy_terms_content_para" data-aos="fade-right">
            {text1}
          </p>

          <h2 className="privacy_terms_content_heading" data-aos="zoom-in">
            {subheading2}
          </h2>
          <p className="privacy_terms_content_para" data-aos="fade-right">
            {text1}
          </p>
          <p className="privacy_terms_content_para" data-aos="fade-right">
            {text1}
          </p>

          <h2 className="privacy_terms_content_heading" data-aos="zoom-in">
            {subheading1}
          </h2>
          <p className="privacy_terms_content_para" data-aos="fade-right">
            {text1}
          </p>
        </div>
      </div>

      <div className="privacy_terms_prefooter">
        <PreFooter
          sourcepages={BannerHeading}
          Head="Lorem Ipsum is simply dummy text of the"
          Content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
        />
      </div>
    </div>
  );
}

export default PrivacyAndTerms;
