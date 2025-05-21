import React from "react";

import PrivacyAndTerms from "../../Components/PrivacyAndTerms/PrivacyAndTerms";
import privacy_img from "../../assets/PrivacyandTerms/privacy_img.svg";

function PricacyPolicy() {
  return (
    <div className="privay_outer_main">
      <PrivacyAndTerms
        BannerHeading="Privacy Policy"
        BannerText=" Learn how Sapience Minds collects, uses, and protects your data in alignment with our HR services. Your privacy and trust are important to us."
        subheading1="Privacy Policy"
        subheading2="Information We Collect"
        subheading3="Purpose of Data Collection"
        subheading4="Data Sharing"
        subheading5="Data Security"
        subheading6="Your Rights"
        subheading7="Cookies & Tracking"
        text1="At Sapience Minds, we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy outlines how we collect, use, and safeguard your data in alignment with our HR services."
        text2="We collect personal and professional information through our website, contact forms, service inquiries, and onboarding processes. This may include:"
        text3="Your data is collected to:"
        list1="Name, contact details, job title, and organization"
        list2="Employment and HR-related data (for consulting purposes)"
        list3="Communications sent to or received from us"
        list4="Website usage data (via cookies and analytics)"
        list5="Provide and personalize our HR consulting services"
        list6="Fulfill service contracts or advisory agreements"
        list7="Respond to inquiries or requests"
        list8="Improve user experience on our website"
        list9="Ensure compliance with applicable laws"
        text4="We do not sell your personal information. We may share data with trusted partners only for service fulfillment (e.g., insurance providers, assessment tools like Harrison Assessments) under strict confidentiality agreements."
        text5="We employ secure data practices, including encrypted communication and restricted access, to protect your information from unauthorized access, disclosure, or alteration"
        text6="You have the right to:"
        list10="Request access to your data"
        list11="Ask for corrections"
        list12="Withdraw consent or request deletion (subject to applicable regulations)"
        text7="We use cookies and analytics tools to understand how visitors interact with our site and to enhance functionality. You can control cookie preferences via your browser."
        img={privacy_img}
      />
    </div>
  );
}

export default PricacyPolicy;
