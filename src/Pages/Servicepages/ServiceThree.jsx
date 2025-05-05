import React from "react";
import { Service } from "../../Components/Services/Service";

import Image1 from "../../assets/Service/services3left.svg";
import Image2 from "../../assets/Service/services3right.svg";
import Rocket from "../../assets/Service/first_img.svg";
import Goal from "../../assets/Service/fourth_img.svg";
import Cup from "../../assets/Service/second_img.svg";
import Medal from "../../assets/Service/fiveth_img.svg";
import Setting from "../../assets/Service/thrird_img.svg";

export const ServiceThree = () => {
  return (
    <div>
      {" "}
      <Service
        metaTitle="Sapience Minds-Virtual CHRO and Outsourcing of HR Operations"
        metaDescription="Your strategic HR leadership—without the full-time cost. Drive transformation with expert-led HR operations and virtual CHRO support."
        ServiceHeadName="Virtual CHRO and Outsourcing of HR Operations"
        ServiceHeadContent=" Your strategic HR leadership—without the full-time cost. Drive transformation with expert-led HR operations and virtual CHRO support."
        Para1Head="Lorem ipsum dolor"
        Para1Content1={`Not every business needs a full-time Chief Human Resources Officer—but every business needs smart, strategic HR leadership. That’s where <strong>Sapience Minds</strong> comes in. Our <strong>Virtual CHRO & HR Operations Outsourcing Services</strong> give you direct access to senior-level HR guidance and seamless HR function execution—scaled to your needs and budget.`}
        Para1Content2={`With <strong>Babitha Remith</strong> as your dedicated Fractional CHRO, we act as an extension of your leadership team, offering strategic advice and managing daily HR functions. From talent lifecycle management to compliance, employee relations, policy development, and workforce analytics—we cover it all.`}
        // Para2Content2="Lorem Ipsum is simply dummy text of the printing and typesetting
        //     industry. Lorem Ipsum has been the industry's standard dummy text
        //     ever since the 1500s, when an unknown printer took a galley of type
        //     and scrambled it to make a type specimen book Lorem Ipsum is simply
        //     dummy text of the printing and typesetting industry."
        Para1Content3="Perfect for startups, growing SMEs, and bootstrapped businesses, our virtual CHRO model is designed to be agile, flexible, and results-driven."
        Para2Head2="Key Offerings:"
        keyofferinglist={["End-to-end HR operations",
          "Strategic workforce planning",
          "Compliance and policy enforcement",
          "Onboarding, training, and employee development",
          "HR audits, analytics, and reporting"
        ]}
        // List1="End-to-end HR operations"
        // List2="Strategic workforce planning"
        // List3="Compliance and policy enforcement"
        // List4="Onboarding, training, and employee development"
        // List5="HR audits, analytics, and reporting"
        Para3Head="Lorem ipsum dolor"
        Para3Content1="You’ll gain not just a service provider, but a trusted HR partner committed to your business goals, culture, and long-term vision."
        serviceIcons2="Years of CHRO Experience on Demand"
        serviceIcons2_text="Access the expertise of a seasoned HR leader, instantly."
        serviceIcons1="Cost Savings Over Hiring a Full-Time CHRO"
        serviceIcons1_text="Get executive-level support at a fraction of the cost."
        serviceIcons3="HR Function Coverage"
        serviceIcons3_text="All your people operations handled—end to end."
        serviceIcons4="Strategic HR Alignment"
        serviceIcons4_text="We ensure your people strategy drives your business forward."
        serviceIcons5="Operational Continuity & Compliance"
        serviceIcons5_text="Avoid HR disruptions and stay aligned with regulatory requirements. "
        policyProtextp1={`At <strong>Sapience Minds</strong>, our Virtual CHRO service is more than outsourcing it’s an ongoing leadership partnership. With <strong>Babitha Remith’s</strong> proven track record in building and leading HR departments globally, we deliver measurable results across every aspect of your people function.`}
        policyProtextp2={`Whether you're launching, growing, or transforming, our virtual model provides the agility and depth you need without the overhead. Let <strong>Sapience Minds</strong> power your people strategy—scalable, sustainable, and designed for your success.`}
        policyProtect="Leadership impact. Without the full-time load"
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
        path="virtual-chro-and-outsourcing"
        virtueForm="Need HR Expertise Without the Overhead? Start by Filling Out the Form."
        targetData="60"
        targetGoalData="99"
        targetClientData="100"
        targetClientRatingData="360"
        targetAwardsData="23"
        symbol1="%"
        symbol2="+"
        symbol3="%"
        symbol4="%"
        symbol5="°"
         targetSevenData=""
      />
    </div>
  );
};
