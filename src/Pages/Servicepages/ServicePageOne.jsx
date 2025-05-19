import React from "react";
import { Service } from "../../Components/Services/Service";
import Image1 from "../../assets/Service/Image1.svg";
// import Image1 from "../../assets/Service/Image1.png";

import Image2 from "../../assets/Service/service12.svg";
// import Goal from "../../assets/Service/fourth_img.svg";
import img4 from "../../assets/Service/img_4.svg";
import img5 from "../../assets/Service/2mans.svg";
import Setting from "../../assets/Service/thrird_img.svg";
import img6 from "../../assets/Service/lock.svg";

import Rocket from "../../assets/Service/service1group1.svg";

export const ServicePageOne = () => {
  return (
    <div>
      <Service
        ServiceHeadName="HR Compliance and Policy Development"
        ServiceHeadContent="Stay legally compliant and culturally aligned with HR policies tailored for growing businesses. Build trust, reduce risks, and foster a structured workplace from day one."
        // Para1Head="Lorem ipsum dolor"
        Para1Content1={`In today’s dynamic business environment, <strong>HR compliance </strong>is not just about following the law-it’s about creating a workplace where people feel protected, respected, and valued. <strong>At Sapience Minds,</strong> we bring over two decades of experience in HR leadership to support startups and SMBs with end-to-end compliance and policy development.`}

        Para1Content2={`Our approach is rooted in <strong>Fractional CHRO expertise,</strong> giving you strategic HR support without the cost of a full-time executive. We analyze your current practices, identify compliance gaps, and deliver a customized framework that includes all legally required and industry-specific policies. But we don’t stop at documentation-we help you implement, communicate, and train your teams on the policies that matter.`}
        Para1Content3="Whether you're onboarding your first employee or scaling your workforce, we ensure that your HR policies are aligned with your business vision, reduce operational risk, and meet the evolving needs of a hybrid or remote workforce."

        Para2Head="Key Offerings:"

        // Para2Content2="Lorem Ipsum is simply dummy text of the printing and typesetting
        //     industry. Lorem Ipsum has been the industry's standard dummy text
        //     ever since the 1500s, when an unknown printer took a galley of type
        //     and scrambled it to make a type specimen book Lorem Ipsum is simply
        //     dummy text of the printing and typesetting industry."
        keyofferinglist={["Compliance with local, state, and international HR regulations","Development of standardized HR policies and documentation","Support for cross-regional HR operations and global HRIS"]}
        // List1="Compliance with local, state, and international HR regulations"
        // List2="Development of standardized HR policies and documentation"
        // List3="Support for cross-regional HR operations and global HRIS"
        // List4="Prevention of Sexual Harassment (POSH) policy creation and compliance training"
        // List5="Workplace safety, ethics, data privacy, and whistleblower guidelines"
        // List6="Onboarding and exit documentation aligned with compliance"
        Para3Head="Lorem ipsum dolor"
        Para3Content1={`<strong>Client Benefit:</strong>`} 
        paracontent3=" Mitigates risk, assures legal compliance, and offers peace of mind for companies operating across different regions"  
        serviceIcons2="Audit Success Rate"
        serviceIcons2_text="Our clients stay consistently compliant, achieving high scores in internal and external HR audits."
        serviceIcons1="Customized Frameworks"
        serviceIcons1_text="Every policy we deliver reflects your business model, team structure, and work culture-no one-size-fits-all templates."
        serviceIcons3="Faster Hiring & Onboarding"
        serviceIcons3_text="Structured, documented HR policies lead to quicker integration of new team members."
        serviceIcons4="Strategic Fractional CHRO Support"
        serviceIcons4_text="Ongoing guidance from HR leaders who align your people strategy with long-term business goals."
        serviceIcons5="3 - Level Risk Protection"
        serviceIcons5_text="We help mitigate legal, financial, and reputational risks "
        policyProtect="Policies that protect. Compliance that scales"
        policyProtextp1={`At <strong>Sapience Minds</strong>, we don’t just offer HR services we become a strategic partner in your journey toward organizational excellence. Founded by <strong>Babitha Remith</strong>, a seasoned HR leader with over 23 years of experience in the technology and enterprise space, our mission is to simplify and elevate HR for startups and small businesses.`}
        policyProtextp2={`Our expertise in <strong>HR Compliance and Policy Development</strong> is backed by real-world success stories, global standards, and a people-first mindset. Whether you need to establish a solid compliance base or redesign your policies for a modern workforce, Sapience Minds helps you build a trusted and scalable HR foundation`}
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
        img_4={img4}
        img_5={img5}
        img_6={Setting}
        img_7={img6}
        
        metaTitle="Sapience Minds-HR Compliance and Policy Development"
        metaDescription="Stay legally compliant and culturally aligned with HR policies tailored for growing businesses. Build trust, reduce risks, and foster a structured workplace from day one."
        path="hr-compliance"
        targetData="100"
        // targetGoalData="4"
        // targetClientData="5"
        targetClientRatingData="4"
        targetAwardsData="95"
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
