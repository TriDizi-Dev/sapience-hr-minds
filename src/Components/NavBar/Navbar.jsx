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
            <li className="nav_items">
              Home
              <div className="nav_underline_wrapper">
                <div
                  className={`${navActive === "/" ? "nav_underline" : ""}`}
                ></div>
              </div>
            </li>
          </Link>

          <Link to="/about" className="nav_link">
            <li className="nav_items">
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
                    onClick={() => setShowDropdown(false)}
                    style={{
                      backgroundColor:
                        navActive === "/hr-compliance" ? "#ffffff" : "",
                    }}
                  >
                    HR Compliance and Policy Development
                  </Link>
                </li>
                <li>
                  <Link
                    to="/hr-consulting"
                    onClick={() => setShowDropdown(false)}
                    style={{
                      backgroundColor:
                        navActive === "/hr-consulting" ? "#ffffff" : "",
                    }}
                  >
                    Customized HR Consulting and Advisory Services
                  </Link>
                </li>

                <li>
                  <Link
                    to="/virtual-chro-and-outsourcing"
                    onClick={() => setShowDropdown(false)}
                    style={{
                      backgroundColor:
                        navActive === "/virtual-chro-and-outsourcing"
                          ? "#ffffff"
                          : "",
                    }}
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
                    onClick={() => setTalentManagement(false)}
                    style={{
                      backgroundColor:
                        navActive === "/talent-acquisition-solutions"
                          ? "#ffffff"
                          : "",
                    }}
                  >
                    Talent Acquisition Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/talent-management"
                    onClick={() => setTalentManagement(false)}
                    style={{
                      backgroundColor:
                        navActive === "/talent-management" ? "#ffffff" : "",
                    }}
                  >
                    Talent Management
                  </Link>
                </li>

                <li>
                  <Link
                    to="/talent-engagement"
                    onClick={() => setTalentManagement(false)}
                    style={{
                      backgroundColor:
                        navActive === "/talent-engagement" ? "#ffffff" : "",
                    }}
                  >
                    Talent Engagement & Retention
                  </Link>
                </li>
                <li>
                  <Link
                    to="/recruitment-of-leadership"
                    onClick={() => setTalentManagement(false)}
                    style={{
                      backgroundColor:
                        navActive === "/recruitment-of-leadership"
                          ? "#ffffff"
                          : "",
                    }}
                  >
                    Recruitment of Leadership & Mid-Level Team
                  </Link>
                </li>
                <li>
                  <Link
                    to="/employee-insurance-and-benefits"
                    onClick={() => setTalentManagement(false)}
                    style={{
                      backgroundColor:
                        navActive === "/employee-insurance-and-benefits"
                          ? "#ffffff"
                          : "",
                    }}
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
                    onClick={() => setEducation(false)}
                    style={{
                      backgroundColor:
                        navActive === "/alliance-partner" ? "#ffffff" : "",
                    }}
                  >
                    Alliance Partner
                  </Link>
                </li>
                <li>
                  <Link
                    to="/internship-hr-learning"
                    onClick={() => setEducation(false)}
                    style={{
                      backgroundColor:
                        navActive === "/internship-hr-learning"
                          ? "#ffffff"
                          : "",
                    }}
                  >
                    Internships
                  </Link>
                </li>

                <li>
                  <Link
                    to="/workshop-hr-learning"
                    onClick={() => setEducation(false)}
                    style={{
                      backgroundColor:
                        navActive === "/workshop-hr-learning" ? "#ffffff" : "",
                    }}
                  >
                    Workshops
                  </Link>
                </li>
                <li>
                  <Link
                    to="/webinar-hr-learning"
                    onClick={() => setEducation(false)}
                    style={{
                      backgroundColor:
                        navActive === "/webinar-hr-learning" ? "#ffffff" : "",
                    }}
                  >
                    Webinars
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <Link to="/blogs" className="nav_link">
            <li className="nav_items">
              Blogs
              <div className="nav_underline_wrapper">
                <div
                  className={` ${
                    navActive === "/blogs" ? "nav_underline" : ""
                  }`}
                ></div>
              </div>
            </li>
          </Link>
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
                  onClick={() => handleNavList()}
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
                  onClick={() => handleNavList()}
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
                          setShowDropdown(false), handleNavList()
                        )}
                        style={{
                          backgroundColor:
                            navActive === "/hr-compliance" ? "#ffffff" : "",
                        }}
                      >
                        HR Compliance and Policy Development
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/hr-consulting"
                        onClick={() => (
                          setShowDropdown(false), handleNavList()
                        )}
                        style={{
                          backgroundColor:
                            navActive === "/hr-consulting" ? "#ffffff" : "",
                        }}
                      >
                        Customized HR Consulting and Advisory Services
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/virtual-chro-and-outsourcing"
                        onClick={() => (
                          setShowDropdown(false), handleNavList()
                        )}
                        style={{
                          backgroundColor:
                            navActive === "/virtual-chro-and-outsourcing" ? "#ffffff" : "",
                        }}
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
                          handleNavList(), setTalentManagement(false)
                        )}
                        style={{
                          backgroundColor:
                            navActive === "/talent-acquisition-solutions" ? "#ffffff" : "",
                        }}
                      >
                        Talent Acquisition Solutions
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/talent-management"
                        onClick={() => (
                          setTalentManagement(false), handleNavList()
                        )}
                        style={{
                          backgroundColor:
                            navActive === "/talent-management" ? "#ffffff" : "",
                        }}
                      >
                        Talent Management
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/talent-engagement"
                        onClick={() => (
                          setTalentManagement(false), handleNavList()
                        )}
                        style={{
                          backgroundColor:
                            navActive === "/talent-engagement" ? "#ffffff" : "",
                        }}
                      >
                        Talent Engagement & Retention
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/recruitment-of-leadership"
                        onClick={() => (
                          setTalentManagement(false), handleNavList()
                        )}
                        style={{
                          backgroundColor:
                            navActive === "/recruitment-of-leadership" ? "#ffffff" : "",
                        }}
                      >
                        Recruitment of Leadership & Mid-Level Team
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/employee-insurance-and-benefits"
                        onClick={() => (
                          setTalentManagement(false), handleNavList()
                        )}
                        style={{
                          backgroundColor:
                            navActive === "/employee-insurance-and-benefits" ? "#ffffff" : "",
                        }}
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
                        onClick={() => (setEducation(false), handleNavList())}
                        style={{
                          backgroundColor:
                            navActive === "/alliance-partner" ? "#ffffff" : "",
                        }}
                      >
                        Alliance Partner
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/internship-hr-learning"
                        onClick={() => (setEducation(false), handleNavList())}
                        style={{
                          backgroundColor:
                            navActive === "/internship-hr-learning" ? "#ffffff" : "",
                        }}
                      >
                        Internships
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/workshop-hr-learning"
                        onClick={() => (setEducation(false), handleNavList())}
                        style={{
                          backgroundColor:
                            navActive === "/workshop-hr-learning" ? "#ffffff" : "",
                        }}
                      >
                        Workshops
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/webinar-hr-learning"
                        onClick={() => (setEducation(false), handleNavList())}
                        style={{
                          backgroundColor:
                            navActive === "/webinar-hr-learning" ? "#ffffff" : "",
                        }}
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
                  onClick={() => handleNavList("services")}
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

              {/* <Link to="/hrlearning" className="nav_link">
                <li
                  className="mobile_nav_items"
                  onClick={() => handleNavList("hrlearning")}
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
              </Link> */}

              <Link to="/blogs" className="nav_link">
                <li
                  className="mobile_nav_items"
                  onClick={() => handleNavList()}
                >
                  Blogs
                  <div className="mobile_nav_underline_wrapper">
                    <div
                      className={` ${
                        navActive === "/blogs" ? "mobile_nav_underline" : ""
                      }`}
                    ></div>
                  </div>
                </li>
              </Link>
              {/* <Link to="/alliancepartner" className="nav_link">
                <li
                  className="mobile_nav_items"
                  onClick={() => handleNavList("alliance")}
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
