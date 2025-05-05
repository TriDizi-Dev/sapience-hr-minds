import { ToastContainer } from "react-toastify";
import { HrLearning } from "../../Components/HrLearning/HrLearning";
import img from "../../assets/HrLearning/webinar.svg";
const WebinarHRLearning = () => {
  const Cards = [
    {
      id: 1,
      head: "HR Operations Strategy for Growth-Stage Companies",
      subhead1: "Scaling",
      subhead2: "Efficiency",
      subhead3: "Tech-Enabled",
      paragraph:
        " This expert-led webinar dives into how efficient HR operations fuel scalability. Explore best practices in HR digitization, process automation, and audit preparedness.",
      PrimaryResponsibilityHeading: "Responsibilities:",
      PrimaryResponsibilityPara:
        " This expert-led webinar dives into how efficient HR operations fuel scalability. Explore best practices in HR digitization, process automation, and audit preparedness.",
      jobspecificationsHeading: "Job Specification:",
      jobspecifications: [
        "Attend a live demo of HRMS tools.",
        "Engage in Q&A with operations experts.",
        "Receive resource links and starter checklists.",
      ],
      jobspecificationsHeading1: "Specifications:",
      Specifications: [
        "Duration: 90 minutes",
        "Format: Live Zoom session",
        "Includes: Digital certificate, replay access",
        "Audience: Startup founders, HR leads, ops manager",
      ],
      path:"webinar-hr-learning"
    },

    {
      id: 2,
      head: "Future-Focused Organizational Development",
      subhead1: "Innovation ",
      subhead2: "Culture ",
      subhead3: "Agility",
      paragraph:
        "Explore real-world OD applications, future-ready business models, and agile transformation practices in this interactive learning session.",
      PrimaryResponsibilityHeading: "Job Description:",
      PrimaryResponsibilityPara:
        "  Join this insightful webinar to explore the latest trends in OD and learn how businesses are rethinking leadership, culture, and employee engagement for long-term success.",
      jobspecificationsHeading: "Responsibilities:",
      jobspecifications: [
        "Attend expert-led sessions on OD strategies",
        "Learn how to apply OD to business performance metrics.",
        "Participate in Q&A sessions and use downloadable tools",
      ],
      jobspecificationsHeading1: "Specifications:",
      Specifications: [
        "Duration:  90 Minutes",
        "Mode:  Live with Post-Access",
        "Includes: Participation Certificate, Framework Downloads",
        "Target Audience: CHROs, HR Leaders, Business Owners",
      ],
        path:"webinar-hr-learning"
    },
    {
      id: 3,
      head: "Recruitment Trends & Tools for the Future of Hiring",
      subhead1: "Trends",
      subhead2: "Tools",
      subhead3: "Hiring",
      paragraph:
        "A forward-looking webinar covering modern hiring strategies, AI-driven sourcing, Gen Z hiring trends, and how to optimize recruitment operations for growing businesses.",
      PrimaryResponsibilityHeading: "Job Description:",
      PrimaryResponsibilityPara:
        "A forward-looking webinar covering modern hiring strategies, AI-driven sourcing, Gen Z hiring trends, and how to optimize recruitment operations for growing businesses.",
      jobspecificationsHeading: "Responsibilities:",
      jobspecifications: [
        "Attend expert insights on next-gen recruitment tech.",
        "Interact during live Q&A and candidate case breakdowns.",
        "Receive templates and resources post-event.",
      ],
      jobspecificationsHeading1: "Specifications:",
      Specifications: [
        "Duration: 60–90 minutes",
        "Format: Live + Replay Access",
        "Includes: Participation certificate, digital recruitment playbook",
        "Audience: HR managers, talent acquisition leads, startup HRs",
      ],
        path:"webinar-hr-learning"
    },
    {
      id: 4,
      head: "Mastering Modern Employee Relations in Startups",
      subhead1: "Collaboration",
      subhead2: "Support",
      subhead3: "Workplace",
      paragraph:
        "This webinar demystifies how startups and growing companies can manage employee expectations, tackle grievances, and create positive work cultures—without massive HR teams.",
      PrimaryResponsibilityHeading: "Job Description:",
      PrimaryResponsibilityPara:
        "This webinar demystifies how startups and growing companies can manage employee expectations, tackle grievances, and create positive work cultures—without massive HR teams.",
      jobspecificationsHeading: "Responsibilities:",
      jobspecifications: [
        "Participate in expert talks and ER frameworks",
        "Get practical examples of early-stage ER implementation",
        "Access downloadable employee handbook templates",
      ],
      jobspecificationsHeading1: "Specifications:",
      Specifications: [
        "Duration: 75 minutes",
        "Format: Zoom + Resource Pack",
        "Includes: Participation e-certificate, sample policies",
        "Target: Founders, HR generalists, early-stage CHROs",
      ],
        path:"webinar-hr-learning"
    },
    {
      id: 5,
      head: "Future-Ready Talent Management for Business Growth",
      subhead1: "Leadership",
      subhead2: "Agility",
      subhead3: "Succession",
      paragraph:
        " This insightful webinar explores how modern businesses can design agile talent management strategies.",
      PrimaryResponsibilityHeading: "Job Description:",
      PrimaryResponsibilityPara:
        " This insightful webinar explores how modern businesses can design agile talent management strategies. Learn how to link capability building with business KPIs, implement feedback loops, and identify high-potential talent.",
      jobspecificationsHeading: "Responsibilities:",
      jobspecifications: [
        "Attend expert-led walkthroughs on talent lifecycle",
        "Participate in Q&A sessions and downloadable toolkits",
        "Apply learning to real-life HR structures",
      ],
      jobspecificationsHeading1: "Specifications:",
      Specifications: [
        "Duration: 90 minutes",
        "Format: Live with post-access",
        "Includes: Participation certificate, framework downloads",
        "Target Audience: CHROs, business owners, HR strategists",
      ],
        path:"webinar-hr-learning"
    },
  ];

  return (
    <>
      <ToastContainer />
      <HrLearning
        HRLearning={Cards}
        imgTitle="Webinar"
        questionTitle="Webinar"
        img={img}
        metaTitle="Sapience Minds-Sapience Minds Webinars"
        metaDescription="Your startup deserves more than just reactive HR. Whether you need structure, compliance, or a culture strategy, let’s have a conversation that moves your business forward. Book a discovery call or fill out the form and let’s shape a smarter, people-powered future for your company."
        PreviousHeading="Previous Webinars"
        Internship1="Recruitment Trends & Tools for the Future of Hiring"
        Internship1Description="A forward-looking webinar covering modern hiring strategies, AI-driven sourcing, Gen Z hiring trends"
        Internship2="Mastering Modern Employee Relations in Startups"
        Internship2Description="This webinar demystifies how startups and growing companies can manage employee expectations"
        Internship3="Future-Ready Talent Management for Business Growth"
        Internship3Description="This insightful webinar explores how modern businesses can design agile talent management strategies."
        applyContent="Expand Your HR Expertise – Join Our Webinar and Gain Insights That Propel Your Career!"
        questionDescription="Join our live webinars to gain cutting-edge insights on HR trends, best practices, and strategies for building high-performing teams. Learn directly from HR thought leaders and stay ahead in the ever-evolving HR landscape."
        concludescript="Register for the webinar and unlock key HR strategies now!"
      />
    </>
  );
};

export default WebinarHRLearning;
