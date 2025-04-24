import React, { useEffect } from "react";
import "./PrivacyAndTerms.css";
import circleframe from "../../assets/PrivacyandTerms/Frame.svg";
import banner from "../../assets/PrivacyandTerms/privacy.svg";
import bgeffect from "../../assets/PrivacyandTerms/bgeffect.svg";
import { PreFooter } from "../PreFooter/PreFooter";

import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet-async";

function TermsAndConditions({
  BannerHeading,
  BannerText,
  subheading1,
  subheading2,
  subheading3,
  subheading4,
  subheading5,
  subheading6,
  subheading7,
  subheading8,
  text1,
  text2,
  text3,
  text4,
  text5,
  text6,
  text7,
  text8,
  img,
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
      <Helmet>
        <title>Terms And Conditions
        </title>
        <meta
          name="description"
          content="Understand the rules for using our website and services. These terms outline your rights, responsibilities, and how we deliver professional HR solutions."
        />

        {/* Open Graph Meta Tags (for WhatsApp, Facebook, LinkedIn) */}
        <meta property="og:title" content="Terms And Conditions" />
        <meta
          property="og:description"
          content="Understand the rules for using our website and services. These terms outline your rights, responsibilities, and how we deliver professional HR solutions."
        />
        <meta
          property="og:image"
          content="https://tridizi.com/assets/10782741_19197279%201-DKNLt4HA.svg"
        />
        <meta property="og:url" content="https://tridizi.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Terms And Conditions" />
        <meta
          name="twitter:description"
          content="Understand the rules for using our website and services. These terms outline your rights, responsibilities, and how we deliver professional HR solutions."
        />
        <meta
          name="twitter:image"
          content="https://tridizi.com/assets/10782741_19197279%201-DKNLt4HA.svg"
        />
      </Helmet>
      <div className="privacy_terms_banner_outer">
        <img src={bgeffect} alt="bgeffect" className="bg_effect" />
        <h1 className="privacy_terms_heading">{BannerHeading}</h1>
        <p className="privacy_terms_para">{BannerText}</p>
        <img src={img} alt="banner" className="privacy_terms_img" />
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
          {/* <p className="privacy_terms_content_para" data-aos="fade-right">
            {text2}
          </p> */}

          <h2 className="privacy_terms_content_heading" data-aos="zoom-in">
            {subheading2}
          </h2>
          <p className="privacy_terms_content_para" data-aos="fade-right">
            {text2}
          </p>

          <h2 className="privacy_terms_content_heading" data-aos="zoom-in">
            {subheading3}
          </h2>
          <p className="privacy_terms_content_para" data-aos="fade-right">
            {text3}
          </p>

          <h2 className="privacy_terms_content_heading" data-aos="zoom-in">
            {subheading4}
          </h2>
          <p className="privacy_terms_content_para" data-aos="fade-right">
            {text4}
          </p>

          <h2 className="privacy_terms_content_heading" data-aos="zoom-in">
            {subheading5}
          </h2>
          <p className="privacy_terms_content_para" data-aos="fade-right">
            {text5}
          </p>

          <h2 className="privacy_terms_content_heading" data-aos="zoom-in">
            {subheading6}
          </h2>
          <p className="privacy_terms_content_para" data-aos="fade-right">
            {text6}
          </p>

          <h2 className="privacy_terms_content_heading" data-aos="zoom-in">
            {subheading7}
          </h2>
          <p className="privacy_terms_content_para" data-aos="fade-right">
            {text7}
          </p>
          <h2 className="privacy_terms_content_heading" data-aos="zoom-in">
            {subheading8}
          </h2>
          <p className="privacy_terms_content_para" data-aos="fade-right">
            {text8}
          </p>

          <div className="privacy_terms_content_para">
            <h4 className="privacy_terms_content_heading" data-aos="zoom-in">
              Contact
            </h4>
            <div
              data-aos="fade-right"
              className="privacy_terms_content_para_inner"
            >
              <p>For any privacy-related queries, reach out to us at:</p>
              {/* <p>Email: reachus@sapienceminds.com</p>
              <p>Phone: +91 90360 62378</p> */}
              <p>
                <a href="mailto:reachus@sapienceminds.com">
                  reachus@sapienceminds.com
                </a>
              </p>
              <p>
                <a href="tel:+919036062378">+91 90360 62378</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="privacy_terms_prefooter">
        <PreFooter
          sourcepages={BannerHeading}
          Head="Let’s Build Your People Strategy – Together"
          Content="Your startup deserves more than just reactive HR. Whether you need structure, compliance, or a culture strategy, let’s have a conversation that moves your business forward. Book a discovery call or fill out the form and let’s shape a smarter, people-powered future for your company."
        />
      </div>
    </div>
  );
}

export default TermsAndConditions;
