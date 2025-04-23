import { HrLearning } from "../../Components/HrLearning/HrLearning";
import img from "../../assets/HrLearning/workshop.svg";


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
      path: "workshop-hr-learning",
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
      path: "workshop-hr-learning",
    },
    {
      id: 3,
      head: "Smart Hiring Strategies for HR Professionals",
      subhead1: "Lifecycle",
      subhead2: "Lifecycle",
      subhead3: "Lifecycle",
      paragraph:
        "A tactical workshop aimed at teaching practical recruitment techniques—from job descriptions to behavioral interviewing, candidate assessments, and hiring metrics, including how to handle high-volume or niche hiring.",
      PrimaryResponsibilityHeading: "Job Description:",
      PrimaryResponsibilityPara:
        "A tactical workshop aimed at teaching practical recruitment techniques—from job descriptions to behavioral interviewing, candidate assessments, and hiring metrics, including how to handle high-volume or niche hiring.",
      jobspecificationsHeading: "Responsibilities:",
      jobspecifications: [
        "Participate in hands-on resume shortlisting exercises.",
        "Conduct mock interviews and real-time feedback rounds.",
        "Understand recruitment funnels and sourcing metrics.",
        "Collaborate in group hiring simulations.",
      ],
      jobspecificationsHeading1: "Specifications:",
      Specifications: [
        "Duration: 4-6 hours",
        "Mode: Virtual or On-site",
        "Materials: JD templates, interview frameworks, hiring checklists",
        "Ideal For: Junior HR executives, startup founders, recruitment coordinators",
      ],
      path: "workshop-hr-learning",
    },
    {
      id: 4,
      head: "Building Positive Employee Relations",
      subhead1: "Mediation",
      subhead2: "Retention",
      subhead3: "Retention",
      paragraph:
        " This workshop focuses on real-world techniques to strengthen workplace harmony, promote open communication, and address grievances constructively. Attendees will participate in roleplays, case studies, and structured ER strategies.",
      PrimaryResponsibilityHeading: "Job Description:",
      PrimaryResponsibilityPara:
        " This workshop focuses on real-world techniques to strengthen workplace harmony, promote open communication, and address grievances constructively. Attendees will participate in roleplays, case studies, and structured ER strategies.",
      jobspecificationsHeading: "Responsibilities:",
      jobspecifications: [
        "Engage in simulated conflict resolution scenarios.",
        "Learn documentation and policies related to disciplinary action.",
        "Collaborate on action plans for enhancing employee engagement.",
        "Analyze real-life ER case studies.",
      ],
      jobspecificationsHeading1: "Specifications:",
      Specifications: [
        "Duration: 5 hours",
        "Mode: Offline/Online",
        "Resources: ER policy templates, case examples, certificate of participation",
        "Ideal For: HR Business Partners, line managers, team leads",
      ],
      path: "workshop-hr-learning",
    },
    {
      id: 5,
      head: "Designing Strategic Talent Management Systems",
      subhead1: "Strategy",
      subhead2: "Feedback",
      subhead3: "Pathways",
      paragraph:
        " This practical workshop focuses on aligning talent with organizational goals through strategic planning, skill gap analysis, competency frameworks, and succession design.",
      PrimaryResponsibilityHeading: "Job Description:",
      PrimaryResponsibilityPara:
        " This practical workshop focuses on aligning talent with organizational goals through strategic planning, skill gap analysis, competency frameworks, and succession design. Real-world simulations and case discussions ensure actionable takeaways.",
      jobspecificationsHeading: "Responsibilities:",
      jobspecifications: [
        "Learn talent mapping and capability matrix creation.",
        "Participate in mock talent review board meetings.",
        "Design simple growth and career paths.",
        "Analyze real-case organizational structures.",
      ],
      jobspecificationsHeading1: "Specifications:",
      Specifications: [
        "Duration: 5–6 hours",
        "Mode: On-site / Online",
        "Resources: Talent plan templates, review matrices",
        "Best For: Mid-level HRs, L&D professionals, startup HR heads",
      ],
      path: "workshop-hr-learning",
    },
  ];

  return (
    <>
      <HrLearning
        HRLearning={Cards}
        imgTitle="Workshops"
        questionTitle="Workshop"
        img={img}
        metaTitle="Workshops"
        metaDescription="Your startup deserves more than just reactive HR. Whether you need structure, compliance, or a culture strategy, let’s have a conversation that moves your business forward. Book a discovery call or fill out the form and let’s shape a smarter, people-powered future for your company."
        PreviousHeading="Previous Workshops"
        Internship1="Smart Hiring Strategies for HR Professionals"
        Internship1Description="A tactical workshop aimed at teaching practical recruitment techniques"
        Internship2="Building Positive Employee Relations"
        Internship2Description="This workshop focuses on real-world techniques to strengthen workplace harmony, promote open communication"
        Internship3="Designing Strategic Talent Management Systems"
        Internship3Description="This practical workshop focuses on aligning talent with organizational goals through strategic planning"
      />
    </>
  );
};

export default WorkshopsHrLearning;
