import React from "react";
import { Service } from "../../Components/Services/Service";

import Image1 from "../../assets/Service/services5left.svg";
import Image2 from "../../assets/Service/services5right.svg";
import Rocket from "../../assets/Service/first_img.svg";

import Goal from "../../assets/Service/fourth_img.svg";
import Cup from "../../assets/Service/second_img.svg";
import Medal from "../../assets/Service/fiveth_img.svg";
import Setting from "../../assets/Service/thrird_img.svg";
export const ServicePageFive = () => {
  return (
    <div>
      {" "}
      <Service
        metaTitle="Sapience Minds (OPC) Private Limited-Sapience Minds-Talent Management Solutions"
        metaDescription="Nurture, grow, and retain your best talent with structured performance, growth, and succession strategies-designed for impact, not just process."
        ServiceHeadName="Talent Management Solutions"
        ServiceHeadContent="Nurture, grow, and retain your best talent with structured performance, growth, and succession strategies-designed for impact, not just process."
        Para1Content1={`Great organizations aren’t built just by hiring the right people-but by managing, developing, and retaining them effectively. At <strong>Sapience Minds,</strong> our <strong>Talent Management Services</strong> are built around the core belief that your people are your biggest asset-and strategic talent management is key to long-term success.`}
        Para1Content2={`We help startups and SMEs develop frameworks that empower employees, improve performance, and drive business outcomes. Whether you're starting from scratch or evolving an existing system, we bring <strong>Fractional CHRO</strong> leadership to design and deploy effective programs.`}
        Para1Content3={`Our services focus on building personalized development paths, role clarity, leadership capability, and internal mobility. We create data-driven performance systems, competency models, and career frameworks that fuel engagement and accountability.`}
        Para2Head="Key Offerings:"
        keyofferinglist={[
          "Training Needs Analysis (TNA) and skill-gap assessments",
          "Leadership development and managerial training programs",
          "Job architecture and competency frameworks",
          "Succession planning and talent mapping",
          "9-box assessments and performance reviews",
          "Goal setting, performance reviews, and KPI alignment",
          "Managing Performance Improvement Plans (PIPs) effectively",
          "Continuous performance feedback loops",
        ]}
        Para3Head="Lorem ipsum dolor"
        Para3Content1={`<strong>Client Benefit:</strong>`}
        paracontent3="Clients gain a clear structure for advancing internal talent, ensuring business continuity, and developing high-potential employees into leadership roles."
        serviceIcons2="Review Completion Rates"
        serviceIcons2_text="Our systems are designed for full adoption and real-world success."
        serviceIcons1="Higher Employee Performance"
        serviceIcons1_text="Structured goal setting and feedback improve productivity and engagement."
        serviceIcons3="More Internal Promotions"
        serviceIcons3_text="Career clarity and development lead to stronger internal growth."
        serviceIcons4="Strategic, Scalable Frameworks"
        serviceIcons4_text="Talent strategies evolve with your business without rework."
        serviceIcons5="4x Faster Leadership Readiness"
        serviceIcons5_text="Custom development tracks prepare high-potential employees for future roles."
        policyProtect="Drive growth through purposeful people management"
        policyProtextp1={`At <strong>Sapience Minds</strong>, we go beyond traditional talent frameworks. Our approach to <strong>Talent Management</strong> is personal, scalable, and measurable. We understand the challenges of growing businesses and offer tailored solutions that blend strategic thinking with human connection.`}
        policyProtextp2={`With <strong>Babitha Remith’s</strong> extensive experience across global and emerging teams, you gain a partner who can turn your people into your strongest competitive advantage. Let Sapience Minds help you design a future where talent isn’t just managed-it’s empowered to lead.`}
        service1name="HR Compliance and Policy Development"
        service2name="Customized HR Consulting and Advisory Services"
        service3name="Virtual CHRO and Outsourcing of HR Operations"
        service4name="Talent Acquisition Solutions"
        service5name="Talent Management Solutions"
        service6name="Talent Engagement & Retention"
        service7name="Recruitment of Leadership & Mid-Level Team"
        service8name="Employee Benfits & Insurance consulting"
        img_1={Image1}
        img_2={Image2}
        img_3={Rocket}
        img_4={Cup}
        img_5={Medal}
        img_6={Setting}
        img_7={Goal}
        path="talent-management"
        targetData="25"
        targetClientRatingData="40"
        targetAwardsData="98"
        symbol1="%"
        symbol2="%"
        symbol5="%"
        targetSevenData=""
      />
    </div>
  );
};
