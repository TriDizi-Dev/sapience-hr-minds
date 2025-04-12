import React, { useState } from 'react';
import "./Navbar.css";
import { IoReorderThree } from "react-icons/io5";


export const Navbar = () => {

  const [openNavlist, setOpenNavlist] = useState(false)
  const [navActive, setNavActive] = useState('')



  const handleNavList = () => {

    setOpenNavlist(!openNavlist)

  }

  const handleNavActive = (ev) => {
    setNavActive(ev)
  }

  return (
    <div className="nav_main_container">
      <div className="navbar_outer">
        <div className="nav_logo_outer">
          <h1 className="nav_logo">Logo</h1>
        </div>
        <div className="nav_items_outer">
          
          <li className="nav_items" onClick={() => handleNavActive('home')}>
            Home
            <div className="nav_underline_wrapper">
              <div className={`nav_underline ${navActive === 'home' ? 'active1' : ''}`}></div>
            </div>
          </li>

          <li className="nav_items" onClick={() => handleNavActive('about')}>
            About
            <div className="nav_underline_wrapper">
              <div className={`nav_underline ${navActive === 'about' ? 'active2' : ''}`}></div>
            </div>
          </li>

          <li className="nav_items" onClick={() => handleNavActive('services')}>
            Services
            <div className="nav_underline_wrapper">
              <div className={`nav_underline ${navActive === 'services' ? 'active3' : ''}`}></div>
            </div>
          </li>

          <li className="nav_items" onClick={() => handleNavActive('hrlearning')}>
            HR Learning
            <div className="nav_underline_wrapper">
              <div className={`nav_underline ${navActive === 'hrlearning' ? 'active4' : ''}`}></div>
            </div>
          </li>

          <li className="nav_items" onClick={() => handleNavActive('blog')}>
            Blog
            <div className="nav_underline_wrapper">
              <div className={`nav_underline ${navActive === 'blog' ? 'active5' : ''}`}></div>
            </div>
          </li>

          <li className="nav_items" onClick={() => handleNavActive('alliance')}>
            Alliance Partner
            <div className="nav_underline_wrapper">
              <div className={`nav_underline ${navActive === 'alliance' ? 'active6' : ''}`}></div>
            </div>
          </li>

        </div>
        <div className="nav_button_outer">
          <button>Contact Us</button>
        </div>
      </div>

      {/* =====NAVBAR MOBIL RESPONSIVE */}

      <div className="nav_mobile_res_main">
        <div className="nav_mobile_outer">
          <div className="nav_mobile_logo_outer">
            <h1 className="nav_mobile_logo">
              Logo
            </h1>
          </div>
          <div className="nav_mobile_left_click">
            <IoReorderThree className='three_lines' onClick={handleNavList} />
          </div>
        </div>
        {
          openNavlist && (
            <div className="mobile_nav_list_items_outer">
              <div className={`mobile_nav_list ${openNavlist ? 'show-menu' : 'hide-menu'}`}>
                <li className="mobile_nav_items" onClick={() => handleNavActive('home')}>
                  Home
                  <div className="mobile_nav_underline_wrapper">
                    <div className={`mobile_nav_underline ${navActive === 'home' ? 'active1' : ''}`}></div>
                  </div>
                </li>

                <li className="mobile_nav_items" onClick={() => handleNavActive('about')}>
                  About
                  <div className="mobile_nav_underline_wrapper">
                    <div className={`mobile_nav_underline ${navActive === 'about' ? 'active2' : ''}`}></div>
                  </div>
                </li>

                <li className="mobile_nav_items" onClick={() => handleNavActive('services')}>
                  Services
                  <div className="mobile_nav_underline_wrapper">
                    <div className={`mobile_nav_underline ${navActive === 'services' ? 'active3' : ''}`}></div>
                  </div>
                </li>

                <li className="mobile_nav_items" onClick={() => handleNavActive('hrlearning')}>
                  HR Learning
                  <div className="mobile_nav_underline_wrapper">
                    <div className={`mobile_nav_underline ${navActive === 'hrlearning' ? 'active4' : ''}`}></div>
                  </div>
                </li>

                <li className="mobile_nav_items" onClick={() => handleNavActive('blog')}>
                  Blog
                  <div className="mobile_nav_underline_wrapper">
                    <div className={`mobile_nav_underline ${navActive === 'blog' ? 'active5' : ''}`}></div>
                  </div>
                </li>

                <li className="mobile_nav_items" onClick={() => handleNavActive('alliance')}>
                  Alliance Partner
                  <div className="mobile_nav_underline_wrapper">
                    <div className={`mobile_nav_underline ${navActive === 'alliance' ? 'active6' : ''}`}></div>
                  </div>
                </li>

                <div className="nav_mobile_button_outer">
                  <button>Contact Us</button>
                </div>
              </div>
            </div>
          )
        }

      </div>

    </div>
  )
}
