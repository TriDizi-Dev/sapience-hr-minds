import React from 'react';
import "./HomePage.css";
import { AiOutlinePlayCircle } from 'react-icons/ai';
import homeimg from "../../assets/HomePage/homeimg.svg"
import dots from "../../assets/HomePage/homedots.svg"
import leftvector from "../../assets/HomePage/leftvector.svg"
import rightvector from "../../assets/HomePage/rightvector.svg"
import { FaPeopleGroup } from 'react-icons/fa6';
import dummylogo from "../../assets/HomePage/dummylogo.svg"
import layer4 from "../../assets/HomePage/layer4.svg"

import Smallicon1 from "../../assets/AboutPage/Smallicon1.svg";
import Smallicon2 from "../../assets/AboutPage/Smallicon2.svg";
import Smallicon3 from "../../assets/AboutPage/Smallicon3.svg";
import Smallicon4 from "../../assets/AboutPage/Smallicon4.svg";

import bg1 from "../../assets/HomePage/bg1.svg"
import bg2 from "../../assets/HomePage/bg2.svg"

import man from "../../assets/HomePage/man.svg"
import { PreFooter } from '../../Components/PreFooter/PreFooter';

export const HomePage = () => {

  const cardscontent=[
    {
          id: 1,
          Logo: Smallicon1,
          Head: "Learn More",
          subHead: "Powerful Dashboard",
          para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          id: 2,
          Logo: Smallicon2,
          Head: "Learn More",
          subHead: "Powerful Dashboard",
          para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          id: 3,
          Logo: Smallicon3,
          Head: "Learn More",
          subHead: "Powerful Dashboard",
          para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          id: 4,
          Logo: Smallicon4,
          Head: "Learn More",
          subHead: "Powerful Dashboard",
          para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
    {
          id: 1,
          Logo: Smallicon1,
          Head: "Learn More",
          subHead: "Powerful Dashboard",
          para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          id: 2,
          Logo: Smallicon2,
          Head: "Learn More",
          subHead: "Powerful Dashboard",
          para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          id: 3,
          Logo: Smallicon3,
          Head: "Learn More",
          subHead: "Powerful Dashboard",
          para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          id: 4,
          Logo: Smallicon4,
          Head: "Learn More",
          subHead: "Powerful Dashboard",
          para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },

  ]
  return (
    <div className="home_main">
      <div className="home_page_outer">
        <div className="home_page_left">
        <p className="home_samll_text">Recruit - Onboard - Manage</p>
        <div className="homepage_headig_text">
          <h1 className="home_page_heading">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          </h1>
          <p className="home_page_para">
          The best HR software for SMB companies and startup to manage employee, 
          payroll assistance, time off, attendance tracking with single software
          </p>
        </div>
        <div className="homepage_button_outer">
          <button className="homepage_left_button">Get started</button>
          <button className="homepage_right_button">
          <AiOutlinePlayCircle className='button_icon' />
          How it works
          </button>
        </div>
        </div>
        <div className="home_page_right">
          <div className="right_top_icon"><img src={rightvector} alt="rightvector" className="vector_right_icon" /></div>
          <div className="left_top_icon"><img src={leftvector} alt="leftvector" className="home_vector_icon" /></div>
          <div className="orange_circle"> </div>
          <div className="violet_circle"> </div>

          <div className="home_top_left_notice">
            <p className="notice_heading">+ 200</p>
            <p className="notice_text">Company Trusted</p>
          </div>

          <div className="bottom_notice">
            <div className="notice_left_logo">
            <FaPeopleGroup className='bottom_notice_icon' />
            </div>
            <div className="notice_right">
            <p className="bottom_notice_heading">
            + 300
            </p>
            <p className="bottom_notice_text">
            People have manage with organize
            </p>
            </div>
            
          </div>
          
        <div className="homepage_img_outer">
          <img src={dots} alt="dotsr" className="dots_right" />
          <img src={dots} alt="dotsl" className="dots_left" />
        <img src={homeimg} alt="homeimg" className="home_img" />
        </div>
        </div>
      </div>

      <div className="homepage_layer2_outer">
        <div className="layer2_outer">
          <p className="layer2_top_text">
          Trusted company over 1,000 business rely on humanet
          </p>
          <div className="layer2_logos_outer">
            <img src={dummylogo} alt="dummylogo" className="layer2_logos" />
            <img src={dummylogo} alt="dummylogo" className="layer2_logos" />
            <img src={dummylogo} alt="dummylogo" className="layer2_logos" />
          </div>
        </div>
      </div>

      <div className="homepage_layer3_outer_main">
        <div className="homepage_layer3_outer">
          <div className="homepage_layer3_part1">
            <h6 className="layer3_part1_heading">
            Product
            </h6>
            <h1 className="layer3_part1_heading2">
            Lorem Ipsum is simply dummy text
            </h1>
            <p className="layer3_part1_para">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy 
            text ever since the 1500s, when an unknown printer took a galley of
             type and scrambled it to make a type specimen book
            </p>
          </div>
          <div className="homepage_layer3_part2">

          </div>
        </div>
      </div>

      <div className="homepage_layer4_outer_main">
        <div className="homepage_layer4_outer">
        <img src={bg1} alt="bg1" className="backgroud_img1" />

          <div className="homepage_layer4_left">
            <p className="homepage_layer4_heading">
            Our Core Functions
            </p>
            <h1 className="homepage_layer4_heading2">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            </h1>
            <p className="homepage_layer4_para">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
             dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
            </p>

            <div className="homepage_layer4_cards_outer">
              <div className="homepage_layer4_card">
                <div className="layer4_card_logo">
                </div>
                <h3 className="layer4_card_heading">
                Powerful Dashboard
                </h3>
                <p className="layer4_card_para">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
              </div>
              <div className="homepage_layer4_card">
                <div className="layer4_card_logo">
                  
                </div>
                <h3 className="layer4_card_heading">
                Powerful Dashboard
                </h3>
                <p className="layer4_card_para">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
              </div>
               
            </div>
          </div>
          <div className="homepage_layer4_right">
        <img src={layer4} alt="layer4" className="homepage_layer4_img" />
          </div>
        </div>
      </div>

      <div className="homepage_layer5_outer_main">
        <div className="homepage_layer5_outer">
       <div className="layer5_part1">
        <p className="layer5_part1_heading">
        Our Core Functions
        </p>
        <h1 className="layer5_part1_heading2">
        Lorem Ipsum is simply dummy text
        </h1>
        <p className="layer5_part1_para">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
         when an unknown printer took a galley of type and scrambled it to make a type specimen book
        </p>
       </div>
       <div className="layer5_cards_outer">

        {
          cardscontent.map((data,ind)=>(
            <div className="layer5_card">
            <div className="layer5_card_logo_outer">
              <img src={data.Logo} alt="logo" className="layer5_card_logo" />
            </div>
            <div className="card_bottom_line"></div>
            <h6 className="layer5_card_heading">
            {data.subHead}
            </h6>
            <p className="layer5_card_text">
            {
              data.para
            }
  
          </p>
            <p className="layer5_card_lernmore">
            {data.Head}
            </p>
          </div>
          ))
        }
     
       </div>
        </div>
      </div>

      <div className="homepage_layer6_outer_main">
        <div className="layer6_outer">
            <div className="layer6_part1">
              <h6 className="layer6_part1_heading">
              Testimonials
              </h6>
              <h1 className="layer6_part1_heading2">
              See Why Our Clients Love Us
              </h1>
            </div>

            <div className="layer6_cards_outer">
              <div className="layer6_card">
                <p className="layer6_card_logo">
                  Logo
                </p>
                <p className="layer6_card_para">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                 industry. Lorem Ipsum has been the industry's standard dummy text ever.
                </p>
                <div className="layer6_card_bottom">
                 <div className="layer6_bottom_logo_outer">
                  <img src={man} alt="man" className="card_bottom_logo" />
                 </div>
                 <div className="card_bottom_right_text">
                  <h6 className="card_bottom_heading">Name</h6>
                  <p className="card_bottom_para">
                    Lorem Ipsum
                  </p>
                 </div>
                </div>
              </div>
              <div className="layer6_card">
                <p className="layer6_card_logo">
                  Logo
                </p>
                <p className="layer6_card_para">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                 industry. Lorem Ipsum has been the industry's standard dummy text ever.
                </p>
                <div className="layer6_card_bottom">
                 <div className="layer6_bottom_logo_outer">
                  <img src={man} alt="man" className="card_bottom_logo" />
                 </div>
                 <div className="card_bottom_right_text">
                  <h6 className="card_bottom_heading">Name</h6>
                  <p className="card_bottom_para">
                    Lorem Ipsum
                  </p>
                 </div>
                </div>
              </div>
              <div className="layer6_card">
                <p className="layer6_card_logo">
                  Logo
                </p>
                <p className="layer6_card_para">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                 industry. Lorem Ipsum has been the industry's standard dummy text ever.
                </p>
                <div className="layer6_card_bottom">
                 <div className="layer6_bottom_logo_outer">
                  <img src={man} alt="man" className="card_bottom_logo" />
                 </div>
                 <div className="card_bottom_right_text">
                  <h6 className="card_bottom_heading">Name</h6>
                  <p className="card_bottom_para">
                    Lorem Ipsum
                  </p>
                 </div>
                </div>
              </div>
            </div>
        </div>
      </div>
      <div className="homepage_layer7_outer_main">

      <img src={bg2} alt="bg2" className="bg2" />

        <div className="layer7_outer">
          <div className="layer7_part1">
            <p className="layer7_part_heading">
              Blogs
            </p>
            <h1 className="layer7_part_heading2">
            Discover How We Make HR Better
            </h1>
          </div>
          <div className="layer7_cards_outer">
            <div className="layer7_card">
              <p className="layer7_card_name">
                Name
              </p>
              <p className="layer7_card_sub_name">
                Lorem Ipsum
              </p>
              <div className="layer7_card_line"></div>
              <p className="layer7_card_para">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              </p>
              <h6 className="layer7_card_explore">
                Explore More
              </h6>
            </div>
            <div className="layer7_card">
              <p className="layer7_card_name">
                Name
              </p>
              <p className="layer7_card_sub_name">
                Lorem Ipsum
              </p>
              <div className="layer7_card_line"></div>
              <p className="layer7_card_para">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              </p>
              <h6 className="layer7_card_explore">
                Explore More
              </h6>
            </div>
            <div className="layer7_card">
              <p className="layer7_card_name">
                Name
              </p>
              <p className="layer7_card_sub_name">
                Lorem Ipsum
              </p>
              <div className="layer7_card_line"></div>
              <p className="layer7_card_para">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              </p>
              <h6 className="layer7_card_explore">
                Explore More
              </h6>
            </div>

          </div>
        </div>
      </div>

      <div className="home_page_prefooter">
        <PreFooter
        Head='Lorem Ipsum is simply dummy text of the'
        Content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
        />
      </div>
    </div>
   )
}
