import React from "react";
import { Service } from "../../Components/Services/Service";
import Image1 from "../../assets/Service/services2left.svg";
import Image2 from "../../assets/Service/services2right.svg";
import Rocket from "../../assets/Service/first_img.svg";

import Goal from "../../assets/Service/fourth_img.svg";
import Cup from "../../assets/Service/second_img.svg";
import Medal from "../../assets/Service/fiveth_img.svg";
import Setting from "../../assets/Service/thrird_img.svg";

export const ServicePageTwo = () => {
  return (
    <div>
      <Service
        ServiceHeadName="Customized HR Consulting and Advisory Services"
        ServiceHeadContent="Tailored HR guidance that aligns with your unique business needs whether you're building from the ground up or optimizing existing practices."
        Para1Head="Lorem ipsum dolor"
        Para1Content1={`Every organization is different your goals, people, and challenges deserve more than one-size-fits-all HR solutions. That’s why <strong>Sapience Minds</strong> offers <strong>Customized HR Consulting & Advisory Services</strong> tailored specifically for startups and growing businesses.`}
        Para1Content2={`Led by <strong>Babitha Remith,</strong> a Fractional CHRO with over 23 years in HR leadership across global enterprises, we bring strategic insight and hands-on support to design policies, people strategies, and cultural frameworks that fit your business, not the other way around`}
        // Para2Head="Lorem ipsum dolor"
        Para2Head2="Our services are especially effective for businesses that:"
        // Para2Content2="Lorem Ipsum is simply dummy text of the printing and typesetting
        //     industry. Lorem Ipsum has been the industry's standard dummy text
        //     ever since the 1500s, when an unknown printer took a galley of type
        //     and scrambled it to make a type specimen book Lorem Ipsum is simply
        //     dummy text of the printing and typesetting industry."
        List1="Are setting up the ir HR systems for the first time"
        List2="Need expert-level insights without hiring a full-time CHRO"
        List3="Want to review and refine their employee experience and compliance policies"
        List4="Are navigating growth, restructuring, or leadership transitions"
        Para3Head="Lorem ipsum dolor"
        Para3Content1="We collaborate closely with your leadership team to diagnose pain points, co-create HR strategies, and provide on-demand advisory that leads to tangible outcomes. This includes everything from employee handbook creation to workforce planning, HR tech recommendations, policy rollouts, and crisis managemen."
        Para4Content1="We don’t just advise—we become your strategic HR ally, driving sustainable value."
        serviceIcons2="Faster Implementation of New Policies"
        serviceIcons2_text="Hands-on support ensures swift execution of HR initiatives."
        serviceIcons1="Tailored HR Solutions"
        serviceIcons1_text="No templates. Every framework, policy, and process is built for your culture and stage."
        serviceIcons3="More Strategic HR Impact"
        serviceIcons3_text="Align people operations with your business goals to boost growth and agility."
        serviceIcons4="Employee Experience Improvement"
        serviceIcons4_text="Better frameworks lead to happier, more engaged teams.."
        serviceIcons5="Expert Advisory Access"
        serviceIcons5_text="Ongoing support from senior HR leadership without the overhead."
        policyProtect="Smart HR strategies. Tailored for your growth"
        policyProtextp1={`At <strong>Sapience Minds</strong>, we don't believe in off-the-shelf consulting. Our advisory services reflect your unique business DNA and aspirations. Whether you're scaling your startup, managing organizational change, or simply need trusted HR direction, our strategic guidance bridges the gap between people and performance.`}
        policyProtextp2={`With decades of corporate experience and a heart for startup success, <strong>Babitha Remith</strong> brings a Fractional CHRO approach that balances practicality with innovation. Let’s build your people-first business strategy—together.`}
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
      />
    </div>
  );
};
