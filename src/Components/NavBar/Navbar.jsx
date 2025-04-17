import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { IoReorderThree } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  const [openNavlist, setOpenNavlist] = useState(false);
  const [navActive, setNavActive] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [TalentManagement, setTalentManagement] = useState(false);
  const [Education, setEducation] = useState(false);
  const location = useLocation();

  const handleNavList = () => {
    setOpenNavlist(!openNavlist);
  };
  useEffect(() => {
    const currentPath = location.pathname; 
    setNavActive(currentPath);
  }, [location]);
  
  const handleNavActive = () => {
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
            <li className="nav_items" onClick={() => handleNavActive("/")}>
              Home
              <div className="nav_underline_wrapper">
                <div
                  className={`${
                    navActive === "/" ? "nav_underline" : ""
                  }`}
                ></div>
              </div>
            </li>
          </Link>

          <Link to="/about" className="nav_link">
            <li className="nav_items" onClick={() => handleNavActive()}>
              About
              <div className="nav_underline_wrapper">
                <div
                  className={` ${
                    navActive === "/about" ? "nav_underline" : ""
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
            <div className="nav_link">
              StartUps Mentoring
              <div className="nav_underline_wrapper">
                <div
                  className={` ${
                    navActive === "/hr-compliance" ||
                    navActive === "/hr-consulting" ||
                    navActive === "/virtual-chro-and-outsourcing"
                      ? "nav_underline"
                      : ""
                  }`}
                ></div>
              </div>
            </div>

            {showDropdown && (
              <ul className="dropdown">
                <li>
                  <Link
                    to="/hr-compliance"
                    onClick={() => (
                      setShowDropdown(false), handleNavActive()
                    )}
                  >
                    HR Compliance and Policy Development
                  </Link>
                </li>
                <li>
                  <Link
                    to="/hr-consulting"
                    onClick={() => (
                      setShowDropdown(false), handleNavActive()
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
                      handleNavActive()
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
            <div className="nav_link">
              Talent Management
              <div className="nav_underline_wrapper">
                <div
                  className={` ${
                    navActive === "/talent-acquisition-solutions" ||
                    navActive === "/talent-management" ||
                    navActive === "/talent-engagement" ||
                    navActive === "/recruitment-of-leadership" ||
                    navActive === "/employee-insurance-and-benefits"
                      ? "nav_underline"
                      : ""
                  }`}
                ></div>
              </div>
            </div>

            {TalentManagement && (
              <ul className="dropdown">
                <li>
                  <Link
                    to="/talent-acquisition-solutions"
                    onClick={() => (
                      handleNavActive(),
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
                      handleNavActive()
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
                      handleNavActive()
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
                      handleNavActive()
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
                      handleNavActive()
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
            <div className="nav_link">
              Education & Learning
              <div className="nav_underline_wrapper">
                <div
                  className={` ${
                    navActive === "/alliance-partner" ||
                    navActive === "/internship-hr-learning" ||
                    navActive === "/workshop-hr-learning" ||
                    navActive === "/webinar-hr-learning"
                      ? "nav_underline"
                      : ""
                  }`}
                ></div>
              </div>
            </div>

            {Education && (
              <ul className="dropdown">
                <li>
                  <Link
                    to="/alliance-partner"
                    onClick={() => (
                      setEducation(false), handleNavActive()
                    )}
                  >
                    Alliance Partner
                  </Link>
                </li>
                <li>
                  <Link
                    to="/internship-hr-learning"
                    onClick={() => (
                      setEducation(false),
                      handleNavActive()
                    )}
                  >
                    Internships
                  </Link>
                </li>

                <li>
                  <Link
                    to="/workshop-hr-learning"
                    onClick={() => (
                      setEducation(false),
                      handleNavActive()
                    )}
                  >
                    Workshops
                  </Link>
                </li>
                <li>
                  <Link
                    to="/webinar-hr-learning"
                    onClick={() => (
                      setEducation(false),
                      handleNavActive()
                    )}
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
            <li className="nav_items" onClick={() => handleNavActive()}>
              Blog
              <div className="nav_underline_wrapper">
                <div
                  className={` ${
                    navActive === "/blog" ? "nav_underline" : ""
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
                  onClick={() => handleNavActive()}
                >
                  Home
                  <div className="mobile_nav_underline_wrapper">
                    <div
                      className={` ${
                        navActive === "/" ? "mobile_nav_underline" : ""
                      }`}
                    ></div>
                  </div>
                </li>
              </Link>
              <Link to="/about" className="nav_link">
                <li
                  className="mobile_nav_items"
                  onClick={() => handleNavActive()}
                >
                  About
                  <div className="mobile_nav_underline_wrapper">
                    <div
                      className={` ${
                        navActive === "/about" ? "mobile_nav_underline" : ""
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
            <div className="nav_link mobile_nav_items">
              StartUps Mentoring
              <div className="nav_underline_wrapper">
                <div
                  className={` ${
                    navActive === "/hr-compliance" ||
                    navActive === "/hr-consulting" ||
                    navActive === "/virtual-chro-and-outsourcing"
                      ? "nav_underline"
                      : ""
                  }`}
                ></div>
              </div>
            </div>

            {showDropdown && (
              <ul className="dropdown">
                <li>
                  <Link
                    to="/hr-compliance"
                    onClick={() => (
                      setShowDropdown(false), handleNavActive()
                    )}
                  >
                    HR Compliance and Policy Development
                  </Link>
                </li>
                <li>
                  <Link
                    to="/hr-consulting"
                    onClick={() => (
                      setShowDropdown(false), handleNavActive()
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
                      handleNavActive()
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
            <div className="nav_link mobile_nav_items">
              Talent Management
              <div className="nav_underline_wrapper">
                <div
                  className={` ${
                    navActive === "/talent-acquisition-solutions" ||
                    navActive === "/talent-management" ||
                    navActive === "/talent-engagement" ||
                    navActive === "/recruitment-of-leadership" ||
                    navActive === "/employee-insurance-and-benefits"
                      ? "nav_underline"
                      : ""
                  }`}
                ></div>
              </div>
            </div>

            {TalentManagement && (
              <ul className="dropdown">
                <li>
                  <Link
                    to="/talent-acquisition-solutions"
                    onClick={() => (
                      handleNavActive(),
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
                      handleNavActive()
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
                      handleNavActive()
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
                      handleNavActive()
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
                      handleNavActive()
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
            <div className="nav_link mobile_nav_items">
              Education & Learning
              <div className="nav_underline_wrapper">
                <div
                  className={` ${
                    navActive === "/alliance-partner" ||
                    navActive === "/internship-hr-learning" ||
                    navActive === "/workshop-hr-learning" ||
                    navActive === "/webinar-hr-learning"
                      ? "nav_underline"
                      : ""
                  }`}
                ></div>
              </div>
            </div>

            {Education && (
              <ul className="dropdown">
                <li>
                  <Link
                    to="/alliance-partner"
                    onClick={() => (
                      setEducation(false), handleNavActive()
                    )}
                  >
                    Alliance Partner
                  </Link>
                </li>
                <li>
                  <Link
                    to="/internship-hr-learning"
                    onClick={() => (
                      setEducation(false),
                      handleNavActive()
                    )}
                  >
                    Internships
                  </Link>
                </li>

                <li>
                  <Link
                    to="/workshop-hr-learning"
                    onClick={() => (
                      setEducation(false),
                      handleNavActive()
                    )}
                  >
                    Workshops
                  </Link>
                </li>
                <li>
                  <Link
                    to="/webinar-hr-learning"
                    onClick={() => (
                      setEducation(false),
                      handleNavActive()
                    )}
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
                      className={` ${
                        navActive === "hrlearning" ? "mobile_nav_underline" : ""
                      }`}
                    ></div>
                  </div>
                </li>
              </Link>

              <Link to="/blog" className="nav_link">
                <li
                  className="mobile_nav_items"
                  onClick={() => handleNavActive()}
                >
                  Blog
                  <div className="mobile_nav_underline_wrapper">
                    <div
                      className={` ${
                        navActive === "/blog" ? "mobile_nav_underline" : ""
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
