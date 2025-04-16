import React, { useState } from "react";
import "./Navbar.css";
import { IoReorderThree } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  const [openNavlist, setOpenNavlist] = useState(false);
  const [navActive, setNavActive] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [TalentManagement,setTalentManagement] = useState(false);
  const [Education,setEducation] = useState(false);



  const handleNavList = () => {
    setOpenNavlist(!openNavlist);
  };

  const handleNavActive = (ev) => {
    setNavActive(ev);
    setOpenNavlist(!openNavlist);
  };
  const handleHome = () => {
    navigate("/");
  };

  return (
    <div className="nav_main_container">
      <div className="navbar_outer">
        <div className="nav_logo_outer">
          <h1 className="nav_logo" onClick={handleHome}>
            Logo
          </h1>
        </div>
        <div className="nav_items_outer">
          <Link to="/" className="nav_link">
            <li className="nav_items" onClick={() => handleNavActive("home")}>
              Home
              <div className="nav_underline_wrapper">
                <div
                  className={`nav_underline ${
                    navActive === "home" ? "active1" : ""
                  }`}
                ></div>
              </div>
            </li>
          </Link>

          <Link to="/about" className="nav_link">
            <li className="nav_items" onClick={() => handleNavActive("about")}>
              About
              <div className="nav_underline_wrapper">
                <div
                  className={`nav_underline ${
                    navActive === "about" ? "active2" : ""
                  }`}
                ></div>
              </div>
            </li>
          </Link>

          {/* <Link to="/service" className="nav_link">
            <li
              className="nav_items"
              onClick={() => handleNavActive("services")}
            >
              Services
              <div className="nav_underline_wrapper">
                <div
                  className={`nav_underline ${
                    navActive === "services" ? "active3" : ""
                  }`}
                ></div>
              </div>
            </li>
          </Link> */}
          {/* <li
            className="nav_items dropdown_parent"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <Link
              to="/service"
              className="nav_link"
              onClick={() => handleNavActive("services")}
            >
              Services
              <div className="nav_underline_wrapper">
                <div
                  className={`nav_underline ${
                    navActive === "services" ? "active3" : ""
                  }`}
                ></div>
              </div>
            </Link>

            {showDropdown && (
              <ul className="dropdown">
                <li>
                  <Link to="/service/design">
                    Hr Compliance and Policy Development
                  </Link>
                </li>
                <li>
                  <Link to="/service/design">
                    Customized HR Consulting and Advisory Services
                  </Link>
                </li>
              
                <li>
                  <Link to="/service/seo">
                    Virtual CHRO and Outsourcing of Hr Operations
                  </Link>
                </li>
                <li className="nested_dropdown">
                  <Link to="#">Talent Management Solutions ▸</Link>
                  <ul className="sub-dropdown">
                    <li>
                      <Link to="/service/frontend">Learning & Development</Link>
                    </li>
                    <li>
                      <Link to="/service/backend">
                        Employee Engagement & Retention Strategies
                      </Link>
                    </li>
                    <li>
                      <Link to="/service/backend">Performance Management</Link>
                    </li>
                    <li>
                      <Link to="/service/backend">
                        Job Architecture and Competence Framework
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/service/seo">
                    Recruitment of Leadership & Mid-Level Team
                  </Link>
                </li>

              </ul>
            )}
          </li> */}
          <li
            className="nav_items dropdown_parent"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <Link
              to=""
              className="nav_link"
              onClick={() => handleNavActive("")}
            >
              StartUps Mentoring
              {/* <div className="nav_underline_wrapper">
                <div
                  className={`nav_underline ${
                    navActive === "" ? "active3" : ""
                  }`}
                ></div>
              </div> */}
            </Link>

            {showDropdown && (
              <ul className="dropdown">
                <li>
                  <Link to="/service">
                    HR Compliance and Policy Development
                  </Link>
                </li>
                <li>
                  <Link to="/service">
                    Customized HR Consulting and Advisory Services
                  </Link>
                </li>

                <li>
                  <Link to="/service">
                    Virtual CHRO and Outsourcing of HR Operations
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li
            className="nav_items dropdown_parent"
            onMouseEnter={() => setTalentManagement(true)}
            onMouseLeave={() => setTalentManagement(false)}
          >
            <Link
              to=""
              className="nav_link"
              onClick={() => handleNavActive("")}
            >
              Talent Management
              {/* <div className="nav_underline_wrapper">
                <div
                  className={`nav_underline ${
                    navActive === "" ? "active3" : ""
                  }`}
                ></div>
              </div> */}
            </Link>

            {TalentManagement && (
              <ul className="dropdown">
                <li>
                  <Link to="/service">Talent Acquisition Solutions</Link>
                </li>
                <li>
                  <Link to="/service">Talent Management</Link>
                </li>

                <li>
                  <Link to="/service">Talent Engagement & Retention</Link>
                </li>
                <li>
                  <Link to="/service">
                    Recruitment of Leadership & Mid-Level Team
                  </Link>
                </li>
                <li>
                  <Link to="/service">Employee Insurance & Benefits</Link>
                </li>
              </ul>
            )}
          </li>
          <li
            className="nav_items dropdown_parent"
            onMouseEnter={() => setEducation(true)}
            onMouseLeave={() => setEducation(false)}
          >
            <Link
              to=""
              className="nav_link"
              onClick={() => handleNavActive("")}
            >
              Education & Learning
              {/* <div className="nav_underline_wrapper">
                <div
                  className={`nav_underline ${
                    navActive === "" ? "active3" : ""
                  }`}
                ></div>
              </div> */}
            </Link>

            {Education && (
              <ul className="dropdown">
                <li>
                  <Link to="/alliancepartner">Alliance Partner</Link>
                </li>
                <li>
                  <Link to="/hrlearning">Internships</Link>
                </li>

                <li>
                  <Link to="/hrlearning">Workshops</Link>
                </li>
                <li>
                  <Link to="/hrlearning">
                  Webinars
                  </Link>
                </li>
              </ul>
            )}
          </li>
          {/* <Link to="/" className="nav_link">
            <li
              className="nav_items"
              onClick={() => handleNavActive("")}
            >
              Education & Learning
              <div className="nav_underline_wrapper">
                <div
                  className={`nav_underline ${
                    navActive === "" ? "active4" : ""
                  }`}
                ></div>
              </div>
            </li>
          </Link> */}

          <Link to="/blog" className="nav_link">
            <li className="nav_items" onClick={() => handleNavActive("blog")}>
              Blog
              <div className="nav_underline_wrapper">
                <div
                  className={`nav_underline ${
                    navActive === "blog" ? "active5" : ""
                  }`}
                ></div>
              </div>
            </li>
          </Link>

          {/* <Link to="/alliancepartner" className="nav_link">
            <li
              className="nav_items"
              onClick={() => handleNavActive("alliance")}
            >
              Alliance Partner
              <div className="nav_underline_wrapper">
                <div
                  className={`nav_underline ${
                    navActive === "alliance" ? "active6" : ""
                  }`}
                ></div>
              </div>
            </li>
          </Link> */}
        </div>
        <div className="nav_button_outer">
          <Link to="/contactus" className="nav_link">
            <button>Contact Us</button>
          </Link>
        </div>
      </div>

      {/* =====NAVBAR MOBIL RESPONSIVE */}

      <div className="nav_mobile_res_main">
        <div className="nav_mobile_outer">
          <div className="nav_mobile_logo_outer">
            <h1 className="nav_mobile_logo">Logo</h1>
          </div>
          <div className="nav_mobile_left_click">
            <IoReorderThree className="three_lines" onClick={handleNavList} />
          </div>
        </div>
        {openNavlist && (
          <div className="mobile_nav_list_items_outer">
            <div
              className={`mobile_nav_list ${
                openNavlist ? "show-menu" : "hide-menu"
              }`}
            >
              <Link to="/" className="nav_link">
                <li
                  className="mobile_nav_items"
                  onClick={() => handleNavActive("home")}
                >
                  Home
                  <div className="mobile_nav_underline_wrapper">
                    <div
                      className={`mobile_nav_underline ${
                        navActive === "home" ? "active1" : ""
                      }`}
                    ></div>
                  </div>
                </li>
              </Link>
              <Link to="/about" className="nav_link">
                <li
                  className="mobile_nav_items"
                  onClick={() => handleNavActive("about")}
                >
                  About
                  <div className="mobile_nav_underline_wrapper">
                    <div
                      className={`mobile_nav_underline ${
                        navActive === "about" ? "active2" : ""
                      }`}
                    ></div>
                  </div>
                </li>
              </Link>

              {/* <Link to="/service" className="nav_link">
                <li
                  className="mobile_nav_items"
                  onClick={() => handleNavActive("services")}
                >
                  Services
                  <div className="mobile_nav_underline_wrapper">
                    <div
                      className={`mobile_nav_underline ${
                        navActive === "services" ? "active3" : ""
                      }`}
                    ></div>
                  </div>
                </li>
              </Link> */}

              <Link to="/hrlearning" className="nav_link">
                <li
                  className="mobile_nav_items"
                  onClick={() => handleNavActive("hrlearning")}
                >
                  HR Learning
                  <div className="mobile_nav_underline_wrapper">
                    <div
                      className={`mobile_nav_underline ${
                        navActive === "hrlearning" ? "active4" : ""
                      }`}
                    ></div>
                  </div>
                </li>
              </Link>

              <Link to="/blog" className="nav_link">
                <li
                  className="mobile_nav_items"
                  onClick={() => handleNavActive("blog")}
                >
                  Blog
                  <div className="mobile_nav_underline_wrapper">
                    <div
                      className={`mobile_nav_underline ${
                        navActive === "blog" ? "active5" : ""
                      }`}
                    ></div>
                  </div>
                </li>
              </Link>
              {/* <Link to="/alliancepartner" className="nav_link">
                <li
                  className="mobile_nav_items"
                  onClick={() => handleNavActive("alliance")}
                >
                  Alliance Partner
                  <div className="mobile_nav_underline_wrapper">
                    <div
                      className={`mobile_nav_underline ${
                        navActive === "alliance" ? "active6" : ""
                      }`}
                    ></div>
                  </div>
                </li>
              </Link> */}
              <div className="nav_mobile_button_outer">
                <Link to="/contactus" className="nav_link">
                  <button>Contact Us</button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
