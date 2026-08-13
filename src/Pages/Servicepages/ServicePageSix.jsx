import React from "react";
import { Service } from "../../Components/Services/Service";
import Image1 from "../../assets/Service/services6left.svg";
import Image2 from "../../assets/Service/services6right.svg";

import Rocket from "../../assets/Service/first_img.svg";
import Goal from "../../assets/Service/fourth_img.svg";
import Cup from "../../assets/Service/second_img.svg";
import Medal from "../../assets/Service/fiveth_img.svg";
import Setting from "../../assets/Service/thrird_img.svg";
export const ServicePageSix = () => {
  return (
    <div>
      {" "}
      <Service
        metaTitle="Sapience Minds (OPC) Private Limited-Talent Engagement & Retention"
        metaDescription="Keep your top talent inspired, involved, and invested in your company’s mission long after onboarding ends."
        ServiceHeadName="Talent Engagement & Retention"
        ServiceHeadContent="Keep your top talent inspired, involved, and invested in your company’s mission long after onboarding ends."
        Para1Head="Lorem ipsum dolor"
        Para1Content1={`In today’s competitive landscape, retaining high-performing employees is more challenging-and more essential-than ever. At <strong>Sapience Minds,</strong> we specialize in building a culture where people choose to stay and grow. Our <strong>Talent Engagement & Retention services</strong> go beyond HR metrics to focus on human-centered strategies that spark motivation, foster loyalty, and align career goals with organizational outcomes.`}
        Para1Content2={`Led by <strong>Babitha Remith,</strong> with over two decades of experience in global talent strategy, we use data-backed tools and emotional intelligence frameworks to design experiences that improve engagement and reduce attrition. From engagement surveys and recognition systems to feedback loops and career development plans, we craft comprehensive retention programs that reflect your company’s culture.`}
        Para2Head2="Key Offerings:"
        keyofferinglist={[
          "Employee engagement surveys and HR Connect meetings",
          "Employee recognition programs",
          "End-to-end engagement programs with surveys, 30/60/90-day check-ins, and ongoing HRBP support to ensure positive employee experience.",
        ]}
        Para3Head="Lorem ipsum dolor"
        Para3Content1={`<strong>Client Benefit:</strong>`}
        paracontent3="Clients gain a clear structure for advancing internal talent, ensuring business continuity, and developing high-potential employees into leadership roles."
        serviceIcons2="Participation in Engagement Programs"
        serviceIcons2_text="Our frameworks promote inclusivity and enthusiasm."
        serviceIcons1="Increase in Employee Retention"
        serviceIcons1_text="Our tailored strategies minimize voluntary attrition and build long-term loyalty."
        serviceIcons3="5x Better Internal Communication"
        serviceIcons3_text="We build transparent feedback loops and open dialogue."
        serviceIcons4="Growth in Employee Productivity"
        serviceIcons4_text="Engaged employees contribute more and stay aligned with goals."
        serviceIcons5="Reduction in Burnout-Related Exits"
        serviceIcons5_text="Proactive well-being strategies lead to healthier teams."
        policyProtect="Keep your best talent inspired and retained"
        policyProtextp1={`At <strong>Sapience Minds</strong>, our retention solutions are crafted for impact. We believe engagement isn't about perks-it's about purpose, leadership, and growth. With deep experience in developing scalable retention frameworks for startups and enterprises, Babitha Remith brings emotional intelligence and business alignment into every strategy.`}
        policyProtextp2={`If you're looking to reduce turnover, improve morale, and build a people-first company culture, we’re ready to be your strategic partner in retention. Let’s make your team the reason people stay.`}
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
        path="talent-engagement"
        targetData="35"
        targetGoalData="40"
        targetClientData="60"
        targetClientRatingData="5"
        targetAwardsData="90"
        symbol1="%"
        symbol2="%"
        symbol3="%"
        symbol4="%"
        symbol5="x"
        targetSevenData=""
      />
    </div>
  );
};
