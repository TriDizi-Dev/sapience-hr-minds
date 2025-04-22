import { HrLearning } from "../../Components/HrLearning/HrLearning";

const InternshipHRLearning = () => {
  const Cards = [
    {
      id: 1,
      head: "HR Operations",
      subhead1: "Exposure",
      subhead2: "Compliance",
      subhead3: "Documentation",
      paragraph:
        "This internship is ideal for individuals looking to gain foundational HR experience. ",
      PrimaryResponsibilityHeading: "Job Description:",
      PrimaryResponsibilityPara:
        " This internship is ideal for individuals looking to gain foundational HR experience. You will assist in the daily operations of the HR department and contribute to employee data management, onboarding coordination, compliance filing, and HRIS updates.",
      jobspecificationsHeading: "Responsibilities:",
      jobspecifications: [
        "Maintain employee records and digital documentation.",
        "Support onboarding and offboarding formalities.",
        "Assist with leave and attendance tracking.",
        "Coordinate HR policy communication.",
        "Work on HR tools and software for daily operations.",
      ],
      jobspecificationsHeading1: "Specifications:",
      Specifications: [
        "Duration: 3 months",
        "Mode: Hybrid/Remote",
        "Eligibility: Graduates or students pursuing an MBA in HR",
        "Required Skills: Attention to detail, MS Excel, communication",
      ],
    },

    {
      id: 2,
      head: "Payroll Management",
      subhead1: "Process",
      subhead2: "Deductions",
      subhead3: "Benefits",
      paragraph:
        "This internship offers hands-on exposure to payroll processing systems used in startups and SMEs.",
      PrimaryResponsibilityHeading: "Job Description:",
      PrimaryResponsibilityPara:
        "This internship offers hands-on exposure to payroll processing systems used in startups and SMEs. Interns will assist in maintaining salary records, understanding tax computations, and ensuring timely disbursements, along with compliance documentation.",
      jobspecificationsHeading: "Responsibilities:",
      jobspecifications: [
        "Assist in payroll data collection (attendance, bonuses, deductions).",
        "Work with payroll software to generate payslips and reports.",
        "Help ensure adherence to statutory compliances (PF, ESI, TDS).",
        "Support the finance/HR team in payroll audits.",
        "Maintain confidentiality of employee compensation data.",
      ],
      jobspecificationsHeading1: "Specifications:",
      Specifications: [
        "Duration : 3 months",
        "Mode : Remote/In-office",
        "Tools : Excel, payroll systems (Zoho, GreytHR, etc.)",
        "Eligibility : Final-year HR/Finance students or fresh graduates",
      ],
    },
    {
      id: 3,
      head: "Recruitment",
      subhead1: "Screening",
      subhead2: "Interviewing",
      subhead3: "Onboarding",
      paragraph:
        "As a Recruitment Intern at Sapience Minds, you will support the end-to-end hiring process, from sourcing and screening to scheduling interviews.",
      PrimaryResponsibilityHeading: "Job Description:",
      PrimaryResponsibilityPara:
        " As a Recruitment Intern at Sapience Minds, you will support the end-to-end hiring process, from sourcing and screening to scheduling interviews. You’ll gain practical knowledge of applicant tracking systems (ATS), employer branding, and candidate engagement.",
      jobspecificationsHeading: "Responsibilities:",
      jobspecifications: [
        "Assist in job posting and resume screening.",
        "Coordinate interviews with candidates and hiring managers.",
        "Maintain candidate data in recruitment dashboards.",
        "Support employer branding initiatives on LinkedIn and other platforms.",
        "Learn sourcing techniques using job boards and professional networks.",
      ],
      jobspecificationsHeading1: "Specifications:",
      Specifications: [
        "Duration: 3 months",
        "Mode: Remote / Hybrid",
        "Tools: Excel, LinkedIn, Naukri, ATS platforms",
        "Eligibility: MBA HR / final-year graduates in HR or Psychology",
      ],
    },
    {
      id: 4,
      head: "Employee Relations",
      subhead1: "Conflict",
      subhead2: "Engagement",
      subhead3: "Communication",
      paragraph:
        "As an Employee Relations Intern at Sapience Minds, you'll support initiatives aimed at improving employee morale, resolving workplace concerns, and understanding the dynamics between management and staff.",
      PrimaryResponsibilityHeading: "Job Description:",
      PrimaryResponsibilityPara:
        " As an Employee Relations Intern at Sapience Minds, you'll support initiatives aimed at improving employee morale, resolving workplace concerns, and understanding the dynamics between management and staff. A hands-on opportunity to witness HR’s role in shaping a healthy work environment.",
      jobspecificationsHeading: "Responsibilities:",
      jobspecifications: [
        "Assist in drafting employee communication emails and notices.",
        "Support in handling feedback and grievance resolution logs.",
        "Participate in pulse surveys and engagement tracking.",
        "Observe conflict resolution and disciplinary processes.",
      ],
      jobspecificationsHeading1: "Specifications:",
      Specifications: [
        "Duration: 2–3 months",
        "Mode: Remote / On-site",
        "Tools: MS Office, survey tools, HRMS",
        "Eligibility: HR management students, psychology or sociology majors",
      ],
    },
    {
      id: 5,
      head: "Talent Management",
      subhead1: "Performance",
      subhead2: "Growth",
      subhead3: "Development",
      paragraph:
        "As a Talent Management Intern at Sapience Minds, you’ll assist in designing and executing initiatives that enhance employee performance, career development, and succession planning.",
      PrimaryResponsibilityHeading: "Job Description:",
      PrimaryResponsibilityPara:
        "As a Talent Management Intern at Sapience Minds, you’ll assist in designing and executing initiatives that enhance employee performance, career development, and succession planning. This internship offers exposure to strategic HR frameworks used to align people with business goals.",
      jobspecificationsHeading: "Responsibilities:",
      jobspecifications: [
        "Support talent review and succession planning efforts.",
        "Help in competency mapping and career development programs.",
        "Assist in performance analysis and reporting.",
        "Collaborate on learning and development (L&D) content planning.",
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
        imgTitle="Internships"
        questionTitle="Internship"
      />
    </>
  );
};

export default InternshipHRLearning;
