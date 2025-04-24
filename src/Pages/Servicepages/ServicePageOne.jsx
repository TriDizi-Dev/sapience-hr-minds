import React from "react";
import { Service } from "../../Components/Services/Service";
import Image1 from "../../assets/Service/Image1.svg";
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
        Para1Content1={`In today’s dynamic business environment, <strong>HR compliance </strong>is not just about following the law—it’s about creating a workplace where people feel protected, respected, and valued. <strong>At Sapience Minds,</strong> we bring over two decades of experience in HR leadership to support startups and SMBs with end-to-end compliance and policy development.`}

        Para1Content2={`Our approach is rooted in <strong>Fractional CHRO expertise,</strong> giving you strategic HR support without the cost of a full-time executive. We analyze your current practices, identify compliance gaps, and deliver a customized framework that includes all legally required and industry-specific policies. But we don’t stop at documentation—we help you implement, communicate, and train your teams on the policies that matter.`}
        Para1Content3="Whether you're onboarding your first employee or scaling your workforce, we ensure that your HR policies are aligned with your business vision, reduce operational risk, and meet the evolving needs of a hybrid or remote workforce."

        Para2Head="Our services cover:"

        // Para2Content2="Lorem Ipsum is simply dummy text of the printing and typesetting
        //     industry. Lorem Ipsum has been the industry's standard dummy text
        //     ever since the 1500s, when an unknown printer took a galley of type
        //     and scrambled it to make a type specimen book Lorem Ipsum is simply
        //     dummy text of the printing and typesetting industry."
        List1="Drafting and customizing employee handbooks"
        List2="Developing company-wide HR policies (leave, attendance, performance, discipline)"
        List3="Statutory compliance aligned with Indian labor laws and global standards"
        List4="Prevention of Sexual Harassment (POSH) policy creation and compliance training"
        List5="Workplace safety, ethics, data privacy, and whistleblower guidelines"
        List6="Onboarding and exit documentation aligned with compliance"
        Para3Head="Lorem ipsum dolor"
        Para3Content1="We understand that for startups and fast-scaling teams, setting up a compliant HR foundation can be overwhelming. That’s why our goal is to simplify the process, reduce legal risk, and give you more time to focus on growth."
        serviceIcons2="Audit Success Rate"
        serviceIcons2_text="Our clients stay consistently compliant, achieving high scores in internal and external HR audits."
        serviceIcons1="Customized Frameworks"
        serviceIcons1_text="Every policy we deliver reflects your business model, team structure, and work culture—no one-size-fits-all templates."
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
        service5name="Talent Management"
        service6name="Talent Engagement & Retention"
        service7name="Recruitment of Leadership & Mid-Level Team"
        service8name="Employee Insurance & Benefits"
        img_1={Image1}
        img_2={Image2}
        img_3={Rocket}
        img_4={img4}
        img_5={img5}
        img_6={Setting}
        img_7={img6}
        
        metaTitle="HR Compliance and Policy Development"
        metaDescription="Stay legally compliant and culturally aligned with HR policies tailored for growing businesses. Build trust, reduce risks, and foster a structured workplace from day one."
        path="hr-compliance"
       
      />
    </div>
  );
};
