import React, { useState } from "react";
import "./Navbar.css";
import { IoReorderThree } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  const [openNavlist, setOpenNavlist] = useState(false);
  const [navActive, setNavActive] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [TalentManagement, setTalentManagement] = useState(false);
  const [Education, setEducation] = useState(false);

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
            <Link to="" className="nav_link">
              StartUps Mentoring
              <div className="nav_underline_wrapper">
                <div
                  className={`nav_underline ${
                    navActive === "hr-compliance" ||
                    navActive === "hr-consulting" ||
                    navActive === "virtual-chro-and-outsourcing"
                      ? "active3"
                      : ""
                  }`}
                ></div>
              </div>
            </Link>

            {showDropdown && (
              <ul className="dropdown">
                <li>
                  <Link
                    to="/hr-compliance"
                    onClick={() => (
                      setShowDropdown(false), handleNavActive("hr-compliance")
                    )}
                  >
                    HR Compliance and Policy Development
                  </Link>
                </li>
                <li>
                  <Link
                    to="/hr-consulting"
                    onClick={() => (
                      setShowDropdown(false), handleNavActive("hr-consulting")
                    )}
                  >
                    Customized HR Consulting and Advisory Services
                  </Link>
                </li>

                <li>
                  <Link
                    to="/virtual-chro-and-outsourcing"
                    onClick={() => (
                      setShowDropdown(false),
                      handleNavActive("virtual-chro-and-outsourcing")
                    )}
                  >
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
            <Link to="" className="nav_link">
              Talent Management
              <div className="nav_underline_wrapper">
                <div
                  className={`nav_underline ${
                    navActive === "talent-acquisition-solutions" ||
                    navActive === "talent-management" ||
                    navActive === "talent-engagement" ||
                    navActive === "recruitment-of-leadership" ||
                    navActive === "employee-insurance-and-benefits"
                      ? "active3"
                      : ""
                  }`}
                ></div>
              </div>
            </Link>

            {TalentManagement && (
              <ul className="dropdown">
                <li>
                  <Link
                    to="/talent-acquisition-solutions"
                    onClick={() => (
                      handleNavActive("talent-acquisition-solutions"),
                      setTalentManagement(false)
                    )}
                  >
                    Talent Acquisition Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/talent-management"
                    onClick={() => (
                      setTalentManagement(false),
                      handleNavActive("talent-management")
                    )}
                  >
                    Talent Management
                  </Link>
                </li>

                <li>
                  <Link
                    to="/talent-engagement"
                    onClick={() => (
                      setTalentManagement(false),
                      handleNavActive("talent-engagement")
                    )}
                  >
                    Talent Engagement & Retention
                  </Link>
                </li>
                <li>
                  <Link
                    to="/recruitment-of-leadership"
                    onClick={() => (
                      setTalentManagement(false),
                      handleNavActive("recruitment-of-leadership")
                    )}
                  >
                    Recruitment of Leadership & Mid-Level Team
                  </Link>
                </li>
                <li>
                  <Link
                    to="/employee-insurance-and-benefits"
                    onClick={() => (
                      setTalentManagement(false),
                      handleNavActive("employee-insurance-and-benefits")
                    )}
                  >
                    Employee Insurance & Benefits
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li
            className="nav_items dropdown_parent"
            onMouseEnter={() => setEducation(true)}
            onMouseLeave={() => setEducation(false)}
          >
            <Link to="" className="nav_link">
              Education & Learning
              <div className="nav_underline_wrapper">
                <div
                  className={`nav_underline ${
                    navActive === "alliancepartner" ||
                    navActive === "hrlearning"
                      ? "active3"
                      : ""
                  }`}
                ></div>
              </div>
            </Link>

            {Education && (
              <ul className="dropdown">
                <li>
                  <Link
                    to="/alliance-partner"
                    onClick={() => handleNavActive("alliance-partner")}
                  >
                    Alliance Partner
                  </Link>
                </li>
                <li>
                  <Link
                    to="/internship-hr-learning"
                    onClick={() => handleNavActive("internship-hr-learning")}
                  >
                    Internships
                  </Link>
                </li>

                <li>
                  <Link
                    to="/workshop-hr-learning"
                    onClick={() => handleNavActive("workshop-hr-learning")}
                  >
                    Workshops
                  </Link>
                </li>
                <li>
                  <Link
                    to="/webinar-hr-learning"
                    onClick={() => handleNavActive("webinar-hr-learning")}
                  >
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

              <li
                className="nav_items dropdown_parent"
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
              >
                <Link to="" className="nav_link mobile_nav_items">
                  StartUps Mentoring
                  <div className="nav_underline_wrapper">
                    <div
                      className={`nav_underline ${
                        navActive === "service" ? "active3" : ""
                      }`}
                    ></div>
                  </div>
                </Link>

                {showDropdown && (
                  <ul className="dropdown">
                    <li>
                      <Link
                        to="/hrCompliance"
                        onClick={() => handleNavActive("hrCompliance")}
                      >
                        HR Compliance and Policy Development
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/service"
                        onClick={() => handleNavActive("service")}
                      >
                        Customized HR Consulting and Advisory Services
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/service"
                        onClick={() => handleNavActive("service")}
                      >
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
                <Link to="" className="nav_link mobile_nav_items">
                  Talent Management
                  <div className="nav_underline_wrapper">
                    <div
                      className={`nav_underline ${
                        navActive === "service" ? "active3" : ""
                      }`}
                    ></div>
                  </div>
                </Link>

                {TalentManagement && (
                  <ul className="dropdown">
                    <li>
                      <Link
                        to="/service"
                        onClick={() => handleNavActive("service")}
                      >
                        Talent Acquisition Solutions
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/service"
                        onClick={() => handleNavActive("service")}
                      >
                        Talent Management
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/service"
                        onClick={() => handleNavActive("service")}
                      >
                        Talent Engagement & Retention
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/service"
                        onClick={() => handleNavActive("service")}
                      >
                        Recruitment of Leadership & Mid-Level Team
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/service"
                        onClick={() => handleNavActive("service")}
                      >
                        Employee Insurance & Benefits
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li
                className="nav_items dropdown_parent"
                onMouseEnter={() => setEducation(true)}
                onMouseLeave={() => setEducation(false)}
              >
                <Link to="" className="nav_link mobile_nav_items">
                  Education & Learning
                  <div className="nav_underline_wrapper">
                    <div
                      className={`nav_underline ${
                        navActive === "alliancepartner" ||
                        navActive === "hrlearning"
                          ? "active3"
                          : ""
                      }`}
                    ></div>
                  </div>
                </Link>

                {Education && (
                  <ul className="dropdown">
                    <li>
                      <Link
                        to="/alliancepartner"
                        onClick={() => handleNavActive("alliancepartner")}
                      >
                        Alliance Partner
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/hrlearning"
                        onClick={() => handleNavActive("hrlearning")}
                      >
                        Internships
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/hrlearning"
                        onClick={() => handleNavActive("hrlearning")}
                      >
                        Workshops
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/hrlearning"
                        onClick={() => handleNavActive("hrlearning")}
                      >
                        Webinars
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

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
                  <button onClick={() => setOpenNavlist(!openNavlist)}>
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
