import React from "react";
import "./Footer.css";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

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
        {/* <div className="footer_left"> */}
        <div className="footer_logo_outer">
          <h1 className="footer_logo" onClick={hadleHome}>
            Logo
          </h1>
          <p className="Contact_heading">Head Office</p>
          <p className="Contact_sub_headings">Bengaluru, Karnataka, India</p>

          <p className="Contact_heading">Call Us</p>
          <p className="Contact_sub_headings">Phone :+91 90360 62378</p>

          <p className="Contact_heading">Email us</p>
          <p className="Contact_sub_headings">reachus@sapienceminds.com</p>
        </div>
        {/* </div> */}
        <div className="footer_right_outer_main_1">
          <div className="footer_center_outer">
            <div className="services_outer">
              <h4 className="services_headeing">StartUps Mentoring</h4>
              <Link to="/hr-compliance" className="nav_link">
                <li className="footer_services_items">
                  HR Compliance and Policy Development
                </li>
              </Link>
              <Link to="/hr-consulting" className="nav_link">
                <li className="footer_services_items">
                  Customized HR Consulting and Advisory Services
                </li>
              </Link>
              <Link to="/virtual-chro-and-outsourcing" className="nav_link">
                <li className="footer_services_items">
                  Virtual CHRO and Outsourcing of HR Operations
                </li>
              </Link>
            </div>

            <div className="services_outer">
              <h4 className="services_headeing">Talent Management</h4>
              <Link to="/talent-acquisition-solutions" className="nav_link">
                <li className="footer_services_items">
                  Talent Acquisition Solutions
                </li>
              </Link>
              <Link to="/talent-management" className="nav_link">
                <li className="footer_services_items">Talent Management</li>
              </Link>
              <Link to="/talent-engagement" className="nav_link">
                <li className="footer_services_items">
                  Talent Engagement & Retention
                </li>
              </Link>
              <Link to="/recruitment-of-leadership" className="nav_link">
                <li className="footer_services_items">
                  Recruitment of Leadership & Mid-Level Team
                </li>
              </Link>
              <Link to="/employee-insurance-and-benefits" className="nav_link">
                <li className="footer_services_items">
                  Employee Insurance & Benefits
                </li>
              </Link>
            </div>

            <div className="services_outer">
              <h4 className="services_headeing">Education & Learning</h4>
              <Link to="/alliance-partner" className="nav_link">
                <li className="footer_services_items">Alliance-Partner</li>
              </Link>
              <Link to="/internship-hr-learning" className="nav_link">
                <li className="footer_services_items">Internships</li>
              </Link>
              <Link to="/workshop-hr-learning" className="nav_link">
                <li className="footer_services_items">Workshops</li>
              </Link>
              <Link to="/webinar-hr-learning" className="nav_link">
                <li className="footer_services_items">Webinars</li>
              </Link>
            </div>

            <div className="services_outer">
              <h4 className="services_headeing">Company</h4>
              <Link to="/contactus" className="nav_link">
                <li className="footer_services_items">Contact Us </li>
              </Link>
              <Link to="/about" className="nav_link">
                <li className="footer_services_items">About Us </li>
              </Link>
              <Link to="/careers" className="nav_link">
                <li className="footer_services_items">Careers</li>
              </Link>
              <Link to="/blogs" className="nav_link">
                <li className="footer_services_items">Blogs</li>
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
            <FaLinkedin className="footer_icons" onClick={()=>handleOpenTab("https://www.linkedin.com/company/sapience-minds/")}/>{" "}
          </div>
          <div className="footer_icons_outer">
            <IoLogoYoutube className="footer_icons" />{" "}
          </div>
          <div className="footer_icons_outer">
            <FaInstagram className="footer_icons" />{" "}
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
