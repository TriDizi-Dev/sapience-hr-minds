import React from 'react'
import "./PrivacyAndTerms.css"
import banner from "../../assets/PrivacyandTerms/privacy.svg"
import bgeffect from "../../assets/PrivacyandTerms/bgeffect.svg"

function PrivacyAndTerms() {
  return (
  <div className="privacy_terms_outer_main">
    <div className="privacy_terms_banner_outer">
        <img src={bgeffect} alt="bgeffect" className="bg_effect" />
        <h1 className="privacy_terms_heading">
        Privacy Policy
        </h1>
        <p className="privacy_terms_para">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
        </p>
        <img src={banner} alt='banner' className="privacy_terms_img" />
    </div>

    <div className="privacy_terms_content_outer">
        <div className="privacy_terms_content">
            
        </div>

    </div>
  </div>
  )
}

export default PrivacyAndTerms
