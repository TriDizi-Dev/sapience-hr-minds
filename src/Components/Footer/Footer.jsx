import React from "react";
import "./Footer.css";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import Logo from "../../assets/Logo.svg";

export const Footer = () => {
  const navigate = useNavigate();
  const handleOpenTab = (link) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  const hadleHome = () => {
    navigate("/");
  };
  return (
    <div className="footer_main">
      <div className="footer_outer">
        <div className="footer_logo_outer">
          <div className="footer_logo" onClick={hadleHome}>
            <img src={Logo} alt="Logo" />
          </div>
          <p className="Contact_heading">Head Office</p>
          <p className="Contact_sub_headings">Bengaluru, Karnataka, India</p>

          <p className="Contact_heading">Call Us</p>
          <p className="Contact_sub_headings">
            <a href="tel:+919036062378">+91 9036062378</a>
          </p>

          <p className="Contact_heading">Email us</p>
          <p className="Contact_sub_headings">
            <a href="mailto:reachus@sapienceminds.com">
              reachus@sapienceminds.com
            </a>
          </p>
        </div>
        <div className="footer_right_outer_main_1">
          <div className="footer_center_outer">
            <div className="services_outer">
              <h4 className="services_headeing">StartUp Consulting</h4>
              <Link to="/hr-compliance" className="nav_link">
                <p className="footer_services_items">
                  HR Compliance and Policy Development
                </p>
              </Link>
              <Link to="/hr-consulting" className="nav_link">
                <p className="footer_services_items">
                  Customized HR Consulting and Advisory Services
                </p>
              </Link>
              <Link to="/virtual-chro-and-outsourcing" className="nav_link">
                <p className="footer_services_items">
                  Virtual CHRO and Outsourcing of HR Operations
                </p>
              </Link>
            </div>

            <div className="services_outer">
              <h4 className="services_headeing">Talent Management</h4>
              <Link to="/talent-acquisition-solutions" className="nav_link">
                <p className="footer_services_items">
                  Talent Acquisition Solutions
                </p>
              </Link>
              <Link to="/talent-management" className="nav_link">
                <p className="footer_services_items">
                  Talent Management Solutions
                </p>
              </Link>
              <Link to="/talent-engagement" className="nav_link">
                <p className="footer_services_items">
                  Talent Engagement & Retention
                </p>
              </Link>
              <Link to="/recruitment-of-leadership" className="nav_link">
                <p className="footer_services_items">
                  Recruitment of Leadership & Mid-Level Team
                </p>
              </Link>
              <Link
                to="/employee-benfits-and-insurance-consulting"
                className="nav_link"
              >
                <p className="footer_services_items">
                  Employee Benfits & Insurance consulting
                </p>
              </Link>
            </div>

            <div className="services_outer">
              <h4 className="services_headeing">Education & Learning</h4>
              <Link to="/alliance-partner" className="nav_link">
                <p className="footer_services_items">Alliance-Partner</p>
              </Link>
              <Link to="/internship-hr-learning" className="nav_link">
                <p className="footer_services_items">Internships</p>
              </Link>
              <Link to="/workshop-hr-learning" className="nav_link">
                <p className="footer_services_items">Workshops</p>
              </Link>
              <Link to="/webinar-hr-learning" className="nav_link">
                <p className="footer_services_items">Webinars</p>
              </Link>
            </div>

            <div className="services_outer">
              <h4 className="services_headeing">Company</h4>
              <Link to="/contactus" className="nav_link">
                <p className="footer_services_items">Contact Us </p>
              </Link>
              <Link to="/about" className="nav_link">
                <p className="footer_services_items">About Us </p>
              </Link>
              <Link to="/careers" className="nav_link">
                <p className="footer_services_items">Careers</p>
              </Link>
              <Link to="/blogs" className="nav_link">
                <p className="footer_services_items">Blogs</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_teems_policy_container">
        <div className="footer_teems_policy_container_sub">
          <Link to="/termsandconditions" className="nav_link">
            <h1 className="terms">Terms & Conditions</h1>
          </Link>
          <Link to="/privacypolicy" className="nav_link">
            <h1 className="terms policy">Privacy Policy</h1>
          </Link>
        </div>
        <div className="footer_right_bottom_icons">
          <div className="footer_icons_outer">
            <FaFacebook
              className="footer_icons"
              onClick={() =>
                handleOpenTab(
                  "https://www.facebook.com/people/Sapience-Minds/61564911584088/"
                )
              }
            />{" "}
          </div>
          <div className="footer_icons_outer">
            <FaInstagram
              className="footer_icons"
              onClick={() =>
                handleOpenTab(
                  "https://www.instagram.com/sapience_minds?igsh=eHhpYm4ydnhnMGZh"
                )
              }
            />{" "}
          </div>
          <div className="footer_icons_outer">
            <FaLinkedin
              className="footer_icons"
              onClick={() =>
                handleOpenTab(
                  "https://www.linkedin.com/company/sapience-minds/"
                )
              }
            />{" "}
          </div>
        </div>
      </div>
      <div className="footer_bottom">
        <div className="footer_bottom_line"></div>
        <p className="footer_bottom_text">
          Copyright © 2025 Sapience Minds, All Rights Reserved.
        </p>
      </div>
    </div>
  );
};
