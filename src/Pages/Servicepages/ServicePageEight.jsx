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
        metaTitle="Employee Insurance & Benefits"
        metaDescription="Design compelling benefits that protect, support, and empower your workforce—without breaking your budget."
        ServiceHeadName="Employee Insurance & Benefits"
        ServiceHeadContent="Design compelling benefits that protect, support, and empower your workforce—without breaking your budget."
        Para1Head="Lorem ipsum dolor"
        Para1Content1={`An effective <strong>Employee Insurance & Benefits</strong> strategy is more than a checkbox—it’s a signal that you value your people and their well-being. At <strong>Sapience Minds,</strong> we help businesses of all sizes create robust, competitive benefits programs that attract top talent and foster long-term loyalty.`}
        Para1Content2={`From group insurance and wellness initiatives to retirement planning and financial education, we ensure your benefit packages are aligned with employee needs and market trends. Our advisory extends to vendor negotiation, compliance, and communication, so employees understand and utilize their perks fully.`}
        // Para2Head="Lorem ipsum dolor"
        Para2Head2="Key components of our service include:"
        // Para2Content2="Lorem Ipsum is simply dummy text of the printing and typesetting
        //     industry. Lorem Ipsum has been the industry's standard dummy text
        //     ever since the 1500s, when an unknown printer took a galley of type
        //     and scrambled it to make a type specimen book Lorem Ipsum is simply
        //     dummy text of the printing and typesetting industry."
        List1="Health, life, and accidental coverage planning"
        List2="Benefits cost modeling and budgeting"
        List3="Legal and statutory compliance support"
        List4="Employee education and communication"
        List5="Wellness and work-life integration programs"
        Para3Head="Lorem ipsum dolor"
        Para3Content1="We partner with trusted providers and customize plans that scale as your business grows."
        // Para4Content1="We don’t just advise—we become your strategic HR ally, driving sustainable value."

        serviceIcons2="Reduction in Benefits Confusion"
        serviceIcons2_text="Clear communication drives usage and trust."
        serviceIcons1="Compliance with Local Statutory Laws"
        serviceIcons1_text="We ensure you're always legally protected."
        serviceIcons3="Improvement in Employee 
Satisfaction Scores"
        serviceIcons3_text="When people feel cared for they stay and perform better.."
        serviceIcons4="End-to-End Vendor & Policy Management"
        serviceIcons4_text="We handle everything from onboarding to renewals."
        serviceIcons5="3x Stronger Employer Brand Perception"
        serviceIcons5_text="Great benefits are a magnet for top talent."
        policyProtect="Better benefits. Stronger teams"
        policyProtextp1={`At <strong>Sapience Minds</strong>, we believe that meaningful benefits lead to meaningful work. With Babitha Remith’s experience in designing equitable and scalable benefits strategies for diverse workforces, we guide companies toward creating impactful perks that resonate..`}
        policyProtextp2={`Whether you're building your first benefit portfolio or looking to level up your existing one, we’re here to make it strategic, affordable, and employee-first. Let’s make your benefits a reason why top talent joins—and stays.`}
        service1name="HR Compliance and Policy Development"
        service2name="Customized HR Consulting and Advisory Services"
        service3name="Virtual CHRO and Outsourcing of HR Operations"
        service4name="Talent Acquisition Solutions"
        service5name="Talent Management"
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
        path="employee-insurance-and-benefits"
      />
    </div>
  );
};
