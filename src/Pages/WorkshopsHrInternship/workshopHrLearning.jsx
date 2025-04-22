import { HrLearning } from "../../Components/HrLearning/HrLearning";

const WorkshopsHrLearning = () => {
  const Cards = [
    {
      id: 1,
      head: "HR Operations Masterclass",
      subhead1: "SOPs",
      subhead2: "HR Tools",
      subhead3: "Checklists",
      paragraph:
        "This workshop provides practical exposure to HR SOPs, documentation, and HRMS systems used in startups and SMBs. ",
      PrimaryResponsibilityHeading: "Job Description:",
      PrimaryResponsibilityPara:
        "This workshop provides practical exposure to HR SOPs, documentation, and HRMS systems used in startups and SMBs. Learn the essentials of workflow management and employee lifecycle processes.",
      jobspecificationsHeading: "Responsibilities:",
      jobspecifications: [
        "Participate in role-based activities simulating real HR tasks.",
        "Engage in case studies covering compliance and records.",
        "Apply learned techniques in mock tools and forms.",
        "Collaborate in team-based process optimization tasks.",
      ],
      jobspecificationsHeading1: "Specifications:",
      Specifications: [
        "Duration: 1 Day / 5 Hours",
        "Mode: In-person / Virtual",
        "Materials Provided: Templates, SOP Guides, Certificate",
        "Ideal For: HR aspirants, freshers, junior HR executives",
      ],
    },

    {
      id: 2,
      head: "Payroll Simplified for HR Professionals",
      subhead1: "Audit",
      subhead2: "Cycles",
      subhead3: "Reports",
      paragraph:
        " A hands-on session will give professionals practical exposure to salary structure design, tax-friendly components, legal compliance, and monthly payroll execution in real-world HR environments.",
      PrimaryResponsibilityHeading: "Job Description:",
      PrimaryResponsibilityPara:
        " A hands-on session will give professionals practical exposure to salary structure design, tax-friendly components, legal compliance, and monthly payroll execution in real-world HR environments.",
      jobspecificationsHeading: "Responsibilities:",
      jobspecifications: [
        "Participate in salary breakup exercises and simulations.",
        "Analyze payroll reports and deduction components.",
        "Work on compliance calendars and audit checklists.",
        "Engage in Q&A with payroll experts.",
      ],
      jobspecificationsHeading1: "Specifications:",
      Specifications: [
        "Duration: 1 Day / 4-5 Hours",
        "Mode: Online/Offline",
        "Materials Provided: Sample templates, tax calculators, certificate",
        "Ideal For: Junior HR execs, entrepreneurs, and HR generalists",
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
      jobspecificationsHeading1: "Specifications:",
      Specifications: [
        "Duration: 3 months",
        "Mode: Hybrid/Remote",
        "Tools: MS Excel, LMS platforms, survey tools",
        "Eligibility: MBA HR / Organizational Psychology students",
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
      jobspecificationsHeading1: "Specifications:",
      Specifications: [
        "Duration: 3 months",
        "Mode: Hybrid/Remote",
        "Tools: MS Excel, LMS platforms, survey tools",
        "Eligibility: MBA HR / Organizational Psychology students",
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
      jobspecificationsHeading1: "Specifications:",
      Specifications: [
        "Duration: 3 months",
        "Mode: Hybrid/Remote",
        "Tools: MS Excel, LMS platforms, survey tools",
        "Eligibility: MBA HR / Organizational Psychology students",
      ],
    },
  ];

  return (
    <>
      <HrLearning
        HRLearning={Cards}
        imgTitle="Workshops"
        questionTitle="Workshop"
      />
    </>
  );
};

export default WorkshopsHrLearning;
