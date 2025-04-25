import React from "react";
import { Service } from "../../Components/Services/Service";

import Image1 from "../../assets/Service/services4left.svg";
import Image2 from "../../assets/Service/services3right.svg";
import Rocket from "../../assets/Service/first_img.svg";

import Goal from "../../assets/Service/fourth_img.svg";
import Cup from "../../assets/Service/second_img.svg";
import Medal from "../../assets/Service/fiveth_img.svg";
import Setting from "../../assets/Service/thrird_img.svg";

export const ServicePageFour = () => {
  return (
    <div>
      {" "}
      <Service
        metaTitle="Talent Acquisition Solutions"
        metaDescription="Find the right people faster with structured, strategic hiring processes tailored for growing businesses. Build your dream team with expert-led recruitment strategies."
        ServiceHeadName="Talent Acquisition Solutions"
        ServiceHeadContent="Find the right people faster with structured, strategic hiring processes tailored for growing businesses. Build your dream team with expert-led recruitment strategies."
        // Para1Head="Lorem ipsum dolor"
        Para1Content1={`Hiring the right talent is one of the most crucial aspects of business success—especially for startups and scaling organizations. At <strong>Sapience Minds,</strong> we offer end-to-end <strong>Talent Acquisition Solutions</strong> designed to help you attract, assess, and onboard the best-fit candidates for your organization.`}
        Para1Content2={`Led by seasoned HR expert <strong>Babitha Remith,</strong> with 23+ years of experience across global enterprises, our solutions combine industry best practices with startup agility. We don’t just fill positions—we align hiring with your company’s culture, long-term goals, and growth trajectory.`}
        Para2Head2="Key Offerings:"
        Para1Content3="Our approach includes workforce planning, job profiling, multi-channel sourcing, behavioral assessments, and structured interview processes to ensure consistency and quality. We also help you build strong employer branding to attract top-tier candidates who resonate with your mission and values."
        keyofferinglist={
          [
            "Training Needs Analysis (TNA) and skill-gap assessments",
            "Leadership development and managerial training programs",
            "Comprehensive onboarding and orientation for seamless employee integration"
          ]
        }
        // List1="Training Needs Analysis (TNA) and skill-gap assessments"
        // List2="Leadership development and managerial training programs"
        // List3="Comprehensive onboarding and orientation for seamless employee integration"
        // List4="High-growth and agile teams"
        // List5="Inclusive, diverse, and values-aligned hiring"
        // Para3Head="Lorem ipsum dolor"
        Para3Content1={`<strong>Client Benefit:</strong>`} 
        paracontent3="Clients build a capable workforce that continuously adapts to industry demands and develops in alignment with business goals."        
        serviceIcons2="Employer Branding Support"
        serviceIcons2_text="Stand out in the market with attractive positioning and candidate experiences."
        serviceIcons1="Faster Time-to-Hire"
        serviceIcons1_text="Streamlined hiring process reduces delays and fills roles quickly without compromising on quality."
        serviceIcons3="Offer Acceptance Rate"
        serviceIcons3_text="High engagement, candidate communication, and role alignment lead to better acceptance ratios."
        serviceIcons4="Strategic CHRO-Led Oversight"
        serviceIcons4_text="Every recruitment process is designed and reviewed by experienced HR leadership."
        serviceIcons5="3x More Qualified Applicants"
        serviceIcons5_text="We use smart sourcing methods and data-backed targeting to deliver better-fit talent pools."
        policyProtect="Right talent. Right time. Every time"
        policyProtextp1={`At <strong>Sapience Minds</strong>, we know recruitment is more than a checklist—it’s the foundation of culture, performance, and growth. We use strategic insight, structured processes, and an understanding of evolving workforce needs to find talent that doesn’t just work—but thrives.`}
        policyProtextp2={`As a <strong>Fractional CHRO service provider,</strong> our recruitment strategies are tailored to each client’s scale, sector, and goals. Partner with Sapience Minds to build your future-ready team with confidence and precision.`}
        service1name="HR Compliance and Policy Development"
        service2name="Customized HR Consulting and Advisory Services"
        service3name="Virtual CHRO and Outsourcing of HR Operations"
        service4name="Talent Acquisition Solutions"
        service5name="Talent Management Solutions"
        service6name="Talent Engagement & Retention"
        service7name="Recruitment of Leadership & Mid-Level Team"
        service8name="Employee Insurance & Benefits"
        img_1={Image1}
        img_2={Image2}
        img_3={Rocket}
        img_4={Cup}
        img_5={Medal}
        img_6={Setting}
        img_7={Goal}
        path="talent-acquisition-solutions"
      />
    </div>
  );
};
