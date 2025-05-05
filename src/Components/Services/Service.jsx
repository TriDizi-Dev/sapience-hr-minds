import React, { useEffect, useRef, useState } from "react";
import "./Service.css";
import Image1 from "../../assets/Service/Image1.svg";
import Image2 from "../../assets/Service/service12.svg";
import BlueLayer from "../../assets/Service/BlueBackground.svg";
import OrangeLayer from "../../assets/Service/OrangeBackground.svg";

import CircleGroup from "../../assets/AboutPage/CircleGroup.png";
import TradeMark from "../../assets/AboutPage/trademark.svg";
import TringleGroup from "../../assets/AboutPage/TriangleImages.svg";
// import Instagram from "../../assets/Service/service18.svg";
import Instagram from "../../assets/Service/service1imageee.svg";
import contactImg from "../../assets/Service/service3Imageback.svg"
// import Message from "../../assets/Service/service19.svg";
import Message from "../../assets/Service/service2imageee.svg";
import Target from "../../assets/Service/service3imageee.svg";
import Speaker from "../../assets/Service/service4imagee.svg";
import Cursur from "../../assets/Service/service5imagee.svg";
import Play from "../../assets/Service/service6imageee.svg";
import Monitor from "../../assets/Service/service7imageee.svg";
import image8 from "../../assets/Service/service8imageee.svg";
import LastImge from "../../assets/Service/service115.svg";
import { PreFooter } from "../PreFooter/PreFooter";
import AOS from "aos";
import "aos/dist/aos.css";
import parse from "html-react-parser";
import { Helmet } from "react-helmet-async";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export const Service = ({
  ServiceHeadName,
  ServiceHeadContent,
  ImageLeft,
  ImageRight,
  // Para1Head,
  Para1Content1,
  Para1Content2,
  Para1Content3,
  Para2Head,
  Para2Head2,
keyofferinglist=[],
  Para3Head,
  Para3Content1,
  paracontent3,
  Para4Content1,
  serviceIcons1,
  serviceIcons1_text,
  serviceIcons2,
  serviceIcons2_text,
  serviceIcons3,
  serviceIcons3_text,
  serviceIcons4,
  serviceIcons4_text,
  serviceIcons5,
  serviceIcons5_text,
  policyProtect,
  policyProtextp1,
  policyProtextp2,
  service1name,
  service2name,
  service3name,
  service4name,
  service5name,
  service6name,
  service7name,
  service8name,
  img_1,
  img_2,
  img_3,
  img_4,
  img_5,
  img_6,
  img_7,
  metaDescription,
  metaTitle,
  path,
  virtueForm,
  targetData=null,
  targetAwardsData=null,
  targetClientData=null,
  targetClientRatingData=null,
  targetGoalData=null,
  symbol1,
  symbol2,
  symbol3,
  symbol4,
  symbol5

}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const target = Number(targetData);
  const duration = 2000;
  const ref = useRef(null);

  const [AwardsCount, setAwardsCount] = useState(0);
  const [AwardsIsVisible, setAwardsIsVisible] = useState(false);
  const targetAwards = Number(targetAwardsData);
  const durationAwards = 2000;

  const [ClientCount, setClientCount] = useState(0);
  const [ClientIsVisible, setClientIsVisible] = useState(false);
  const targetClient = Number(targetClientData);
  // const targetClient={clientTarget}
  const durationClient = 2000;

  const [ClientRatingCount, setClientRatingCount] = useState(0);
  const [ClientRatingIsVisible, setClientRatingIsVisible] = useState(false);
  const targetClientRating = Number(targetClientRatingData);
  const durationClientRating = 2000;

  const [GoalCount, setGoalCount] = useState(0);
  const [GoalIsVisible, setGoalIsVisible] = useState(false);
  const targetGoal = Number(targetGoalData);
  const durationGoal = 2000;

  // const services = [
  //   { name: service1name, icon: Instagram },
  //   { name: service2name, icon: Message },
  //   { name: service3name, icon: Target },
  //   { name: service4name, icon: Speaker },
  //   { name: service5name, icon: Cursur },
  //   { name: service6name, icon: Play },
  //   { name: service7name, icon: Monitor },
  //   { name: service8name, icon: image8 },
  // ];

  const services = [
    { name: service1name, icon: Instagram, path: "/hr-compliance" },
    { name: service2name, icon: Message, path: "/hr-consulting" },
    { name: service3name, icon: Target, path: "/virtual-chro-and-outsourcing" },
    { name: service4name, icon: Speaker, path: "/talent-acquisition-solutions" },
    { name: service5name, icon: Cursur, path: "/talent-management" },
    { name: service6name, icon: Play, path: "/talent-engagement" },
    { name: service7name, icon: Monitor, path: "/recruitment-of-leadership" },
    { name: service8name, icon: image8, path: "/employee-insurance-and-benefits" },
  ];

  const filteredServices = services.filter(
    (service) => service.name !== ServiceHeadName
  );

  

  const [formData, setFormData] = useState({
    Name:'',
    Phone_number:'',
    Email: '',
    CompanyName: '',
    Industry: '',
    Location: '',
    Employees: '',
    Contact: '',
    Sourcepage:'Virtual CHRO And Outsourcing'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
 const scriptURL =
      "https://script.google.com/macros/s/AKfycbzvzG1K-8O3LD328fyCXs5oyEkWVA12zplggBg-jMLHZjk9tFow9AYw_EhVQqvjlRNPcQ/exec";

    try {
      const formPayload = new FormData();
      for (let key in formData) {
        formPayload.append(key, formData[key]);
      }


      const response = await fetch(scriptURL, {
        method: "POST",
        body: formPayload, // No 'Content-Type' header for FormData
      });
      console.log(response, "resssssss");

      if (response.ok) {
        // alert("Form submitted successfully!");
        toast.success("Form submitted successfully!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        setFormData({
          Name:'',
          Phone_number:'',
          Email: '',
          CompanyName: '',
          Industry: '',
          Location: '',
          Employees: '',
          Contact: '',
        });
      
      } else {
        toast.warning("Something went wrong. Please try again.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error submitting the form. Please check your connection.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }

  };



  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const increment = Math.ceil(target / (duration / 50));
    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(interval);
      }
      setCount(start);
    }, 50);

    return () => clearInterval(interval);
  }, [isVisible]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAwardsIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 } // Lowered threshold for easier triggering
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!AwardsIsVisible) return;

    let start = 0;
    const increment = Math.ceil(targetAwards / (durationAwards / 50));
    const interval = setInterval(() => {
      start += increment;
      if (start >= targetAwards) {
        start = targetAwards;
        clearInterval(interval);
      }
      setAwardsCount(start);
    }, 50);

    return () => clearInterval(interval);
  }, [AwardsIsVisible]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setClientIsVisible(true); // Updated to ClientIsVisible
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!ClientIsVisible) return; // Updated to ClientIsVisible

    let start = 0;
    const increment = Math.ceil(targetClient / (durationClient / 50));
    const interval = setInterval(() => {
      start += increment;
      if (start >= targetClient) {
        start = targetClient;
        clearInterval(interval);
      }
      setClientCount(start); // Updated to setClientCount
    }, 50);

    return () => clearInterval(interval);
  }, [ClientIsVisible]); // Updated dependency to ClientIsVisible

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setClientRatingIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!ClientRatingIsVisible) return;

    let start = 0;
    const increment = Math.ceil(
      targetClientRating / (durationClientRating / 50)
    );
    const interval = setInterval(() => {
      start += increment;
      if (start >= targetClientRating) {
        start = targetClientRating;
        clearInterval(interval);
      }
      setClientRatingCount(start);
    }, 50);

    return () => clearInterval(interval);
  }, [ClientRatingIsVisible]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setGoalIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!ClientRatingIsVisible) return;

    let start = 0;
    const increment = Math.ceil(targetGoal / (durationGoal / 50));
    const interval = setInterval(() => {
      start += increment;
      if (start >= targetGoal) {
        start = targetGoal;
        clearInterval(interval);
      }
      setGoalCount(start);
    }, 50);

    return () => clearInterval(interval);
  }, [GoalIsVisible]);

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

  const navigate=useNavigate();

  return (
    <div className="Service_MAin_Container">
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />

        {/* Open Graph Meta Tags (for WhatsApp, Facebook, LinkedIn) */}
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta
          property="og:image"
          content="https://tridizi.com/assets/10782741_19197279%201-DKNLt4HA.svg"
        />
        <meta property="og:url" content="https://tridizi.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta
          name="twitter:image"
          content="https://tridizi.com/assets/10782741_19197279%201-DKNLt4HA.svg"
        />
      </Helmet>
      <div className="Service_head_Container">
        <p
          className="Service_head_name"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          {ServiceHeadName}
        </p>
        <p
          className="Service_content_name"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
        >
          {ServiceHeadContent}
        </p>
      </div>
      <div className="Service_Page_Section2_Hero">
        <div className="Image_Container_service_Left" data-aos="fade-right">
          <p></p>
          <img src={img_1} alt="Image1"></img>
        </div>
        <div className="Middle_Content_Container">
          {/* <p className="Middle_Secound_Head" data-aos="fade-right">
            {Para1Head}
          </p> */}
          <p className="Niddle_sub_content" data-aos="fade-right">
            {/* {Para1Content1}{" "} */}
            {parse(Para1Content1)}
          </p>
          <p className="Niddle_sub_content" data-aos="fade-right">
            {/* {Para1Content2}{" "} */}
            {parse(Para1Content2)}
          </p>
          <p className="Niddle_sub_content" data-aos="fade-right">
            {Para1Content3}{" "}
          </p>

          <p className="Middle_Secound_Head" data-aos="zoom-in">
            {Para2Head}
          </p>
          <p className="Middle_second_head2" data-aos="zoom-in">
            {Para2Head2}
          </p>

          <ul className="List_Items_Middle">
            {
              keyofferinglist.map((item)=>(
                <li data-aos="fade-right">{item}</li>

              ))
            }

            {/* <li data-aos="fade-right">{List1}</li>
            <li data-aos="fade-right">{List2}</li>
            <li data-aos="fade-right">{List3}</li>
            <li data-aos="fade-right">{List4}</li> */}
{/* 
            {(path === "hr-consulting" ||
              path === "talent-management" ||
              path === "recruitment-of-leadership" ||
              path === "employee-insurance-and-benefits" ||
              path === "hr-compliance" ||
              path === "virtual-chro-and-outsourcing" ||
              path == "talent-acquisition-solutions" ||
              path === "talent-engagement") && (
              <li data-aos="fade-right">{List5}</li>
            )}

            {path === "hr-compliance" && <li data-aos="fade-right">{List6}</li>} */}
          </ul>

          {/* <p className="Middle_Secound_Head" data-aos="zoom-in">
            {Para3Head}
          </p> */}
          <p className="Niddle_sub_content" data-aos="zoom-in">
            {parse(Para3Content1)}{" "}
            <span>{paracontent3}</span>
          </p>
          <p className="Niddle_sub_content_p4" data-aos="zoom-in">
            {Para4Content1}
          </p>
        </div>

        <div className="Image_Container_service_right" data-aos="fade-left">
          <p></p>
          <img src={img_2} alt="Image1" />
        </div>
      </div>
      <img
        src={BlueLayer}
        alt="Layer"
        className="Background_Image_Container"
      ></img>      
        <p className="virtueForm_Headline"data-aos="fade-left">{virtueForm}</p>
      {path === "virtual-chro-and-outsourcing" && (
        <div className="virtual-chro-form-container">
          <div className="virtual-left-container" data-aos="flip-left">
          <img src={contactImg} alt="" />
          </div>

          <form className="virtual-chro-custom-form" onSubmit={handleSubmit} data-aos="fade-down">
            <p className="virtual-contact-title">Fill The Form </p>

            
        <div className="virtual-chro-form-row">
          <div className="virtual-chro-form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="Name"
              name="Name"
              value={formData.Name}
              onChange={handleChange}
              required
              placeholder="Enter your Name"
            />
          </div>
          <div className="virtual-chro-form-group">
            <label htmlFor="companyName">Phone Number</label>
            <input
              type="text"
              id="Phone_number"
              name="Phone_number"
              value={formData.Phone_number}
              onChange={handleChange}
              required
              placeholder="Enter Your Contact Number"
            />
          </div>
        </div>

        <div className="virtual-chro-form-row">
          <div className="virtual-chro-form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="Email"
              name="Email"
              value={formData.Email}
              onChange={handleChange}
              required
              placeholder="Enter Your Email Address"
            />
          </div>
          <div className="virtual-chro-form-group">
            <label htmlFor="companyName">Company Name</label>
            <input
              type="text"
              id="CompanyName"
              name="CompanyName"
              value={formData.CompanyName}
              onChange={handleChange}
              required
              placeholder="Enter Your Name"
            />
          </div>
        </div>


        <div className="virtual-chro-form-row">
          <div className="virtual-chro-form-group">
            <label htmlFor="industry">Industry</label>
            <input
              type="text"
              id="industry"
              name="Industry"
              value={formData.Industry}
              onChange={handleChange}
              required
              placeholder="Enter Your Industry"
            />
          </div>
          <div className="virtual-chro-form-group">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              id="Location"
              name="Location"
              value={formData.Location}
              onChange={handleChange}
              required
              placeholder="Enter Your Location"
            />
          </div>
        </div>

        <div className="virtual-chro-form-row">
          <div className="virtual-chro-form-group">
            <label htmlFor="employees">No. of Employees</label>
            <input
              type="number"
              id="Employees"
              name="Employees"
              value={formData.Employees}
              onChange={handleChange}
              required
              placeholder="Enter Employees Count"
            />
          </div>
          <div className="virtual-chro-form-group">
            <label htmlFor="contact">Contact Person / Designation</label>
            <input
              type="text"
              id="Contact"
              name="Contact"
              value={formData.Contact}
              onChange={handleChange}
              required
              placeholder="Enter Your Designation"
            />
          </div>
        </div>

        <button type="submit" className="virtual-chro-submit-button">Submit</button>
      </form>
        </div>
      )}
      <div className="Service_Page_Section3">
        <div className="Images_Container_Background">
          <img
            src={TradeMark}
            alt="TradeMark"
            className="Service_Page_Section3_image1"
          ></img>
          <img
            src={CircleGroup}
            alt="CircleGroup"
            className="Service_Page_Section3_image2"
          ></img>
          <img
            src={OrangeLayer}
            alt="OrangeLayer"
            className="Service_Page_Section3_OrangeLayer"
          ></img>

          <div className="Image_Container_Section3_Main_Images">
            <div className="Image_Container_Section3_imge_Cont1" ref={ref}>
              <img src={img_3} alt="Rocket"></img>
              <span className="Rocket_count">{ count > 0 && `${count}${symbol1} `}</span>
              <div>
                <h3>{serviceIcons1}</h3>
                <p>{serviceIcons1_text}</p>
              </div>
            </div>

            <div className="Image_Container_Section3_imge_Cont2">
              <img src={img_4} alt="Cup"></img>
              <span className="Cup_count">{AwardsCount> 0 && `${AwardsCount}${symbol2}`}</span>
              <div>
                <h3>{serviceIcons2}</h3>
                <p>
                  {serviceIcons2_text}
                  {/* Our clients stay consistently compliant, achieving high scores in internal and external HR audits. */}
                </p>
              </div>
            </div>
            <div className="Image_Container_Section3_imge_Cont3">
              <img src={img_5} alt="Medal"></img>
              <span className="Cup_count">{ClientCount>0 && `${ClientCount}${symbol3}`}</span>
              <div>
                <h3>{serviceIcons4}</h3>
                <p>{serviceIcons4_text}</p>
              </div>
            </div>
            <div className="Image_Container_Section3_imge_Cont4">
              <img src={img_7} alt="Goal"></img>
              <span className="Goal_count">{GoalCount>0 && `${GoalCount}${symbol4}`}</span>
              <div className="goal_icon_text">
                <h3>{serviceIcons5}</h3>
                <p>{serviceIcons5_text}</p>
              </div>
            </div>
            <div className="Image_Container_Section3_imge_Cont5">
              <img src={img_6} alt="Setting"></img>
              <span className="Setting_count">{ClientRatingCount>0 && `${ClientRatingCount}${symbol5}`}</span>

              <div>
                <h3>{serviceIcons3}</h3>
                <p>{serviceIcons3_text}</p>
              </div>
            </div>
            <img
              src={TringleGroup}
              alt="Triangle"
              className="Service_Page_Section3_Triangle"
            ></img>
          </div>
        </div>
      </div>

      <div className="Service_age_section4">
        <p className="Our_service_Head_title">Our Services</p>

        <div className="Service_Cards">
          {filteredServices.map((service, index) => (
            <div
              className=
              // {`
                "Service_Icon_Container" 
              //   ${
              //   index === 2 ? "marginChnage" : ""
              // } ${index === 3 ? "Middle_service" : ""} ${
              //   index === 4 ? "marginChnage second_marginChanges" : ""
              // } ${index === 5 ? "third_marginChanges" : ""}

              // `}

              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              key={index}
              onClick={() => navigate(service.path)}
            >
              <p className="Service_Img">
                <img src={service.icon} alt={service.name} />
              </p>
              <p className="SerViceImage_text_head">{service.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="Service_last_secound_layer">
        <p
          className="Service_last_secound_layer_Img"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <img src={LastImge} alt="LastImge" />
        </p>
        <div
          className="Service_last_secound_layer_Right"
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="1000"
        >
          <p className="Service_last_secound_layer_Head">
            {/* Transforming Ambition Into Achievement */}
            {parse(policyProtect)}
            {""}
          </p>
          <p className="Service_last_secound_layer_text">
            {/* Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. */}
            {parse(policyProtextp1)}
          </p>
          <p className="Service_last_secound_layer_text">
            {/* Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. */}
            {parse(policyProtextp2)}
          </p>
        </div>
      </div>
      <ToastContainer />
      <div className="Pre_Footer_Service_Container">
        <PreFooter
          sourcepages={ServiceHeadName}
          Head="Let’s Build Your People Strategy – Together"
          Content="Your startup deserves more than just reactive HR. Whether you need structure, compliance, or a culture strategy, let’s have a conversation that moves your business forward. Book a discovery call or fill out the form and let’s shape a smarter, people-powered future for your company."
        />
      </div>
    </div>
  );
};
