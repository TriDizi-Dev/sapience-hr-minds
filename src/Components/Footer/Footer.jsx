import React from 'react';
import "./Footer.css"
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';

export const Footer = () => {

  const navigate = useNavigate()

  const hadleHome=()=>{
    navigate("/")
  }
  return (
   <div className="footer_main">
    <div className="footer_outer">
      <div className="footer_left">
        <div className="footer_logo_outer">
          <h1 className="footer_logo" onClikc={hadleHome}>Logo</h1>
          <p className="footer_left_para">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
          industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
           and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
          </p>
        </div>
      </div>
      <div className="footer_right_outer_main">
        <div className="footer_right_outer">

        <div className="services_outer">
          <h4 className="services_headeing">Services</h4>
          <li className="footer_services_items">HRMS</li>
          <li className="footer_services_items">Talent Acquisition</li>
          <li className="footer_services_items">Performance</li>
        </div>
        <div className="footer_company">
          <h4 className="footer_company_heading">Company</h4>
          <Link to="/about" className="nav_link">
          <li className="company_list_items">About Us </li>
          </Link>
          <Link to="/careers" className="nav_link">
          <li className="company_list_items">Careers</li>
          </Link>
          <li className="company_list_items">Leadership</li>
        </div>
      </div>
      <div className="footer_right_bottom_icons">
        <div className="footer_icons_outer"><FaLinkedin className='footer_icons'/>        </div>
        <div className="footer_icons_outer"><IoLogoYoutube  className='footer_icons'/> </div>
        <div className="footer_icons_outer"><FaInstagram className='footer_icons'/>        </div>
      </div>

      </div>
    </div>
    <div className="footer_bottom">
    <div className="footer_bottom_line"></div>
    <p className="footer_bottom_text">
    Copyright © 2024 Sapience Minds, All Rights Reserved.
    </p>
    </div>
   </div>
  )
}
