import React from "react";
import { Service } from "../../Components/Services/Service";

import Image1 from "../../assets/Service/services8left.svg";
import Image2 from "../../assets/Service/services8right.svg";
import Rocket from "../../assets/Service/first_img.svg";

import Goal from "../../assets/Service/fourth_img.svg";
import Cup from "../../assets/Service/second_img.svg";
import Medal from "../../assets/Service/fiveth_img.svg";
import Setting from "../../assets/Service/thrird_img.svg";
export const ServicePageEight = () => {
  return (
    <div>
      {" "}
      <Service
        metaTitle="Sapience Minds-Employee Benfits & Insurance consulting"
        metaDescription="Design compelling benefits that protect, support, and empower your workforce-without breaking your budget."
        ServiceHeadName=" Employee Benfits & Insurance consulting"
        ServiceHeadContent="Design compelling benefits that protect, support, and empower your workforce-without breaking your budget."
        Para1Head="Lorem ipsum dolor"
        Para1Content1={`An effective <strong> Employee Benfits & Insurance consulting</strong> strategy is more than a checkbox-it’s a signal that you value your people and their well-being. At <strong>Sapience Minds,</strong> we help businesses of all sizes create robust, competitive benefits programs that attract top talent and foster long-term loyalty.`}
        Para1Content2={`From group insurance and wellness initiatives to retirement planning and financial education, we ensure your benefit packages are aligned with employee needs and market trends. Our advisory extends to vendor negotiation, compliance, and communication, so employees understand and utilize their perks fully.`}
        Para2Head2="Key Offerings:"
        Para2Head21="1. Employee Benefits Strategy & Planning"
        Para2Head211="We work closely with HR teams and business leaders to develop a tailored, data-driven benefits strategy aligned with your business goals and workforce needs."
        keyofferinglist={[
          "Benchmarking & market analysis",
          "Total rewards design",
          "Workforce segmentation strategy",
        ]}
        Para2Head22="2. Affordable Group Insurance Solutions"
        Para2Head222="We simplify the complex world of health plans by sourcing, customizing, and managing group insurance options from top carriers."
        keyofferinglist2={[
          "Group Medical Insurance",
          "Group Personal Accident Insurance",
          "Group Term Life cover",
        ]}
        Para2Head23=" 3. Wellness & Mental Health Programs"
        Para2Head233="Support your team’s well-being with initiatives that promote healthier lifestyles and mental resilience."
        keyofferinglist3={[
          "Wellness program design & vendor selection",
          "Mental health & EAP services",
          "Incentive-based wellness platforms",
          "Health risk assessments",
        ]}
        Para3Head="Lorem ipsum dolor"
        Para3Content1={`<strong>Client Benefit:</strong>`}
        paracontent3="An efficient, data-driven performance management system that aligns individual and team goals with the organization’s strategic objectives, increasing overall productivity" // Para4Content1="We don’t just advise-we become your strategic HR ally, driving sustainable value."
        serviceIcons2="Reduction in Benefits Confusion"
        serviceIcons2_text="Clear communication drives usage and trust."
        serviceIcons1="Compliance with Local Statutory Laws"
        serviceIcons1_text="We ensure you're always legally protected."
        serviceIcons3="Improvement in Employee Satisfaction Scores"
        serviceIcons3_text="When people feel cared for they stay and perform better.."
        serviceIcons4="End-to-End Vendor & Policy Management"
        serviceIcons4_text="We handle everything from onboarding to renewals."
        serviceIcons5="3x Stronger Employer Brand Perception"
        serviceIcons5_text="Great benefits are a magnet for top talent."
        policyProtect="Better benefits. Stronger teams"
        policyProtextp1={`At <strong>Sapience Minds</strong>, we believe that meaningful benefits lead to meaningful work. With Babitha Remith’s experience in designing equitable and scalable benefits strategies for diverse workforces, we guide companies toward creating impactful perks that resonate..`}
        policyProtextp2={`Whether you're building your first benefit portfolio or looking to level up your existing one, we’re here to make it strategic, affordable, and employee-first. Let’s make your benefits a reason why top talent joins-and stays.`}
        service1name="HR Compliance and Policy Development"
        service2name="Customized HR Consulting and Advisory Services"
        service3name="Virtual CHRO and Outsourcing of HR Operations"
        service4name="Talent Acquisition Solutions"
        service5name="Talent Management Solutions"
        service6name="Talent Engagement & Retention"
        service7name="Recruitment of Leadership & Mid-Level Team"
        service8name=" Employee Benfits & Insurance consulting"
        img_1={Image1}
        img_2={Image2}
        img_3={Rocket}
        img_4={Cup}
        img_5={Medal}
        img_6={Setting}
        img_7={Goal}
        path="employee-benfits-and-insurance-consulting"
        targetData="100"
        // targetGoalData="4"
        // targetClientData="5"
        targetClientRatingData="4"
        targetAwardsData="50"
        symbol1="%"
        symbol2="%"
        // symbol3="y"
        // symbol4="x"
        symbol5="x"
        targetSevenData=""
      />
    </div>
  );
};
