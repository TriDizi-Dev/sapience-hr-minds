import React, { useEffect, useState } from "react";
import "./HrLearning.css";
import HrBanner from "../../assets/HrLearning/HrLearnHero.svg";
import BackgroundLayer from "../../assets/HrLearning/BackgroundLayer.svg";
import { PreFooter } from "../PreFooter/PreFooter";

export const HrLearning = () => {
  const [selectedData, setselectedData] = useState({});

  const Cards = [
    {
      id: 1,
      head: "HR Operations",
      subhead1: "Duration",
      subhead2: "Lorem",
      subhead3: "Lorem",
      paragraph:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took....",
      PrimaryResponsibilityHeading: "Primary Responsibility:",
      PrimaryResponsibilityPara:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer tookLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took....Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took....Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took........",
      jobspecificationsHeading: "Job Specification:",
      jobspecifications: [
        "Proficiency in front-end technologies HTML, CSS, JavaScript  frameworks like React or Angular",
        "Proficiency in back-end technologies Node.js, Python, Ruby, Java, etc.",
        "Experience in designing and managing databases (SQL and NoSQL)",
        "Proficiency in schema design and query optimization.",
        "Strong knowledge of version control systems, particularly Git.",
        "Expertise in managing and collaborating on code repositories.",
        "Knowledge of web security best practices.",
        "Experience with performance optimization techniques.",
        " Excellent collaboration skills for working effectively in a team environment",
        "Ability to communicate technical concepts to non-technical stakeholders.",
      ],
    },

    {
      id: 2,
      head: "Payroll Management",
      subhead1: "Duration",
      subhead2: "Lorem",
      subhead3: "Lorem",
      paragraph:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took....",
      PrimaryResponsibilityHeading: "Primary Responsibility:",
      PrimaryResponsibilityPara:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer tookLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took....Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took....Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took........",
      jobspecificationsHeading: "Job Specification:",
      jobspecifications: [
        "Proficiency in front-end technologies HTML, CSS, JavaScript  frameworks like React or Angular",
        "Proficiency in back-end technologies Node.js, Python, Ruby, Java, etc.",
        "Experience in designing and managing databases (SQL and NoSQL)",
        "Proficiency in schema design and query optimization.",
        "Strong knowledge of version control systems, particularly Git.",
        "Expertise in managing and collaborating on code repositories.",
        "Knowledge of web security best practices.",
        "Experience with performance optimization techniques.",
        " Excellent collaboration skills for working effectively in a team environment",
        "Ability to communicate technical concepts to non-technical stakeholders.",
      ],
    },
    {
      id: 3,
      head: "Recruitment",
      subhead1: "Duration",
      subhead2: "Lorem",
      subhead3: "Lorem",
      paragraph:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took....",
      PrimaryResponsibilityHeading: "Primary Responsibility:",
      PrimaryResponsibilityPara:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer tookLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took....Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took....Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took........",
      jobspecificationsHeading: "Job Specification:",
      jobspecifications: [
        "Proficiency in front-end technologies HTML, CSS, JavaScript  frameworks like React or Angular",
        "Proficiency in back-end technologies Node.js, Python, Ruby, Java, etc.",
        "Experience in designing and managing databases (SQL and NoSQL)",
        "Proficiency in schema design and query optimization.",
        "Strong knowledge of version control systems, particularly Git.",
        "Expertise in managing and collaborating on code repositories.",
        "Knowledge of web security best practices.",
        "Experience with performance optimization techniques.",
        " Excellent collaboration skills for working effectively in a team environment",
        "Ability to communicate technical concepts to non-technical stakeholders.",
      ],
    },
    {
      id: 4,
      head: "Employee Relations",
      subhead1: "Duration",
      subhead2: "Lorem",
      subhead3: "Lorem",
      paragraph:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took....",
      PrimaryResponsibilityHeading: "Primary Responsibility:",
      PrimaryResponsibilityPara:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer tookLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took....Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took....Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took........",
      jobspecificationsHeading: "Job Specification:",
      jobspecifications: [
        "Proficiency in front-end technologies HTML, CSS, JavaScript  frameworks like React or Angular",
        "Proficiency in back-end technologies Node.js, Python, Ruby, Java, etc.",
        "Experience in designing and managing databases (SQL and NoSQL)",
        "Proficiency in schema design and query optimization.",
        "Strong knowledge of version control systems, particularly Git.",
        "Expertise in managing and collaborating on code repositories.",
        "Knowledge of web security best practices.",
        "Experience with performance optimization techniques.",
        " Excellent collaboration skills for working effectively in a team environment",
        "Ability to communicate technical concepts to non-technical stakeholders.",
      ],
    },
    {
      id: 5,
      head: "Mern Stack Developer",
      subhead1: "Duration",
      subhead2: "Lorem",
      subhead3: "Lorem",
      paragraph:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took....",
      PrimaryResponsibilityHeading: "Primary Responsibility:",
      PrimaryResponsibilityPara:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer tookLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took....Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took....Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took........",
      jobspecificationsHeading: "Job Specification:",
      jobspecifications: [
        "Proficiency in front-end technologies HTML, CSS, JavaScript  frameworks like React or Angular",
        "Proficiency in back-end technologies Node.js, Python, Ruby, Java, etc.",
        "Experience in designing and managing databases (SQL and NoSQL)",
        "Proficiency in schema design and query optimization.",
        "Strong knowledge of version control systems, particularly Git.",
        "Expertise in managing and collaborating on code repositories.",
        "Knowledge of web security best practices.",
        "Experience with performance optimization techniques.",
        " Excellent collaboration skills for working effectively in a team environment",
        "Ability to communicate technical concepts to non-technical stakeholders.",
      ],
    },
  ];
  useEffect(() => {
    setselectedData(Cards[0]);
  }, []);
  const Handledatachnage = (data) => {
    setselectedData(data);
  };
  return (
    <>
      <div className="Hr_Hero_container">
        <img src={HrBanner} alt="HrBanner"></img>
        <p>Internships</p>
      </div>
      <div className="Section2_Main_container">
        <p className="Section2_Heading_text">What you learn in Internship?</p>
        <div className="Background_Image_Container">
          <img src={BackgroundLayer} alt="BackgroundLayer"></img>
        </div>
        <div className="Section2_Cards_Container">
          <div className="Left_Side_Container_Section2">
            {Cards.map((item, id) => (
              <div
                className={`Left_Single_Side_Cards_Container ${
                  item.id === selectedData.id ? "card_boarder" : ""
                }`}
                key={id}
                onClick={() => Handledatachnage(item)}
              >
                <p
                  className={`Single_Cards_head ${
                    item.id === selectedData.id ? "Head_colour" : ""
                  }`}
                >
                  {item.head}
                </p>
                <div className="Single_Cards_Sub_heads_text">
                  <p>{item.subhead1}</p>
                  <p>{item.subhead2}</p>
                  <p>{item.subhead3}</p>
                </div>
                <p className="Single_Cards_Sub_text">{item.paragraph}</p>
              </div>
            ))}
          </div>
          <div className="Right_Side_Container_Section2">
            <div className="Right_Side_Container_Section2_top_div">
              <p className="Right_Side_Container_Header">{selectedData.head}</p>
              <div className="Single_Cards_Sub_heads_text_right">
                <p>{selectedData.subhead1}</p>
                <p>{selectedData.subhead2}</p>
                <p>{selectedData.subhead3}</p>
              </div>
              <p className="Single_Cards_Sub_heads_text_right_Sub_headings">
                {selectedData.PrimaryResponsibilityHeading}
              </p>
              <p className="Single_Cards_Sub_heads_text_right_Sub_text">
                {selectedData.PrimaryResponsibilityPara}
              </p>
              <p className="Single_Cards_Sub_heads_text_right_Sub_headings">
                {selectedData.jobspecificationsHeading}
              </p>
              <ul className="Single_Cards_Sub_heads_text_right_Sub_List_text">
                {selectedData?.jobspecifications?.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
              <p className="Apply_now_button_content_Hr_Learn">Apply Now</p>
            </div>
            <div className="Privours_Data_Container_last">
              <p className="Privours_Data_Container_Head_text">
                Previous Internships
              </p>
              <div className="Single_Privious_Data_Cont">
                <p>Lorem Ipsum is</p>
                <p>
                  text of the printing and typesetting industry. Lorem Ipsum has
                  been the
                </p>
              </div>
              <div className="Single_Privious_Data_Cont">
                <p>Lorem Ipsum is</p>
                <p>
                  text of the printing and typesetting industry. Lorem Ipsum has
                  been the
                </p>
              </div>
              <div className="Single_Privious_Data_Cont">
                <p>Lorem Ipsum is</p>
                <p>
                  text of the printing and typesetting industry. Lorem Ipsum has
                  been the
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Pre_Footer_Hr_learning_Container">
        <PreFooter
          Head="Lorem Ipsum is simply dummy text of the"
          Content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
        />
      </div>
    </>
  );
};
