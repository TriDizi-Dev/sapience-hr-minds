import React from "react";
import { Service } from "../../Components/Services/Service";

import Image1 from "../../assets/Service/services7left.svg";
import Image2 from "../../assets/Service/services7right.svg";
import Rocket from "../../assets/Service/first_img.svg";

import Goal from "../../assets/Service/fourth_img.svg";
import Cup from "../../assets/Service/second_img.svg";
import Medal from "../../assets/Service/fiveth_img.svg";
import Setting from "../../assets/Service/thrird_img.svg";
export const ServicePageSeven = () => {
  return (
    <div>
      {" "}
      <Service
        ServiceHeadName="Recruitment of Leadership & Mid-Level Team"
        ServiceHeadContent="Find the right leaders who can scale your vision without compromising your culture or pace."
        Para1Head="Lorem ipsum dolor"
        Para1Content1={`Hiring leaders isn't just about filling a position—it’s about defining the future of your organization. At Sapience Minds, we help startups and SMBs identify, assess, and recruit Leadership and Mid-Level Talent who can inspire teams and drive innovation from day one.`}
        Para1Content2={`Our approach blends deep industry insight with behavioral science and culture mapping, ensuring the candidates we place are both qualified and aligned with your mission. Through targeted sourcing, strategic interviews, and leadership profiling, we help you hire with confidence and clarity.`}
        // Para2Head="Lorem ipsum dolor"
        Para2Head2="We specialize in:"
        // Para2Content2="Lorem Ipsum is simply dummy text of the printing and typesetting
        //     industry. Lorem Ipsum has been the industry's standard dummy text
        //     ever since the 1500s, when an unknown printer took a galley of type
        //     and scrambled it to make a type specimen book Lorem Ipsum is simply
        //     dummy text of the printing and typesetting industry."
        List1="Executive and mid-management hiring strategy"
        List2="Behavioral and role-based assessments"
        List3="Leadership competency mapping"
        List4="Structured interviewing and cultural alignment screening"
        Line5="Offer negotiation and onboarding support"
        // Para3Head="Lorem ipsum dolor"
        Para3Content1={`With <strong>Babitha Remith</strong> leading the strategic framework, we offer not just candidates—but leaders who create lasting impact.`}
        // Para4Content1="We don’t just advise—we become your strategic HR ally, driving sustainable value."

        serviceIcons2="Interview-to-Offer Conversion Support"
        serviceIcons2_text="We guide you through every step of the decision."
        serviceIcons1="Candidate-Culture Fit Success Rate"
        serviceIcons1_text="Our process prioritizes alignment, not just qualifications."
        serviceIcons3="Long-Term Leadership Retention"
        serviceIcons3_text="Hires stay, thrive, and lead for the long haul."
        serviceIcons4="30-Day Average Hiring Time"
        serviceIcons4_text="Faster closures without compromising quality."
        serviceIcons5="3-Layered Evaluation Model"
        serviceIcons5_text="Skills, mindset, and leadership capability covered end-to-end.."
        policyProtect="Hire leaders who build what’s next."
        policyProtextp1={`At <strong>Sapience Minds</strong>, we treat every leadership hire as a cornerstone of your business success. We understand that a great leader not only drives results—but shapes culture, builds teams, and enables growth.`}
        policyProtextp2={`With <strong>Babitha Remith’s</strong> seasoned HR leadership and recruitment acumen, our service bridges the gap between aspiration and acquisition. We don’t just recruit—we help you build a leadership legacy.`}
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
