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

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';


export const HomePage = () => {

  const cardscontent = [
    {
      id: 1,
      Logo: Smallicon1,
      Head: "Learn More",
      subHead: "HR Compliance and Policy Development",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 2,
      Logo: Smallicon2,
      Head: "Learn More",
      subHead: "Customized HR Consulting and Advisory Services",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 3,
      Logo: Smallicon3,
      Head: "Learn More",
      subHead: "Virtual CHRO and Outsourcing of HR Operations",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 4,
      Logo: Smallicon4,
      Head: "Learn More",
      subHead: "Talent Acquisition Solutions",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 1,
      Logo: Smallicon1,
      Head: "Learn More",
      subHead: "Talent Management",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 2,
      Logo: Smallicon2,
      Head: "Learn More",
      subHead: "Talent Engagement & Retention",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 3,
      Logo: Smallicon3,
      Head: "Learn More",
      subHead: "Recruitment of Leadership & Mid-Level Team",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 4,
      Logo: Smallicon4,
      Head: "Learn More",
      subHead: "Employee Insurance & Benefits",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },

  ]

  const testmonials = [
    {
      id: 1,
      logo: 'Logo',
      para: `Lorem Ipsum is simply dummy text of the printing and typesetting
                 industry. Lorem Ipsum has been the industry's standard dummy text ever.`,
      img: man,
      bottomname: 'Name',
      bottomtext: 'Lorem Ipsum'

    },
    {
      id: 2,
      logo: 'Logo',
      para: `Lorem Ipsum is simply dummy text of the printing and typesetting
                 industry. Lorem Ipsum has been the industry's standard dummy text ever.`,
      img: man,
      bottomname: 'Name',
      bottomtext: 'Lorem Ipsum'

    },
    {
      id: 3,
      logo: 'Logo',
      para: `Lorem Ipsum is simply dummy text of the printing and typesetting
                 industry. Lorem Ipsum has been the industry's standard dummy text ever.`,
      img: man,
      bottomname: 'Name',
      bottomtext: 'Lorem Ipsum'

    },
    {
      id: 4,
      logo: 'Logo',
      para: `Lorem Ipsum is simply dummy text of the printing and typesetting
                 industry. Lorem Ipsum has been the industry's standard dummy text ever.`,
      img: man,
      bottomname: 'Name',
      bottomtext: 'Lorem Ipsum'

    },
  ]

  const Blogs = [
    {
      id: 1,
      Name: 'Name',
      subname: 'Lorem Ipsum',
      para: `   Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
      explore: 'Explore More',

    },
    {
      id: 1,
      Name: 'Name',
      subname: 'Lorem Ipsum',
      para: `   Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
      explore: 'Explore More',

    },
    {
      id: 1,
      Name: 'Name',
      subname: 'Lorem Ipsum',
      para: `   Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
      explore: 'Explore More',

    },
    {
      id: 1,
      Name: 'Name',
      subname: 'Lorem Ipsum',
      para: `   Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
      explore: 'Explore More',

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
             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui voluptates tenetur facilis ex, corrupti officiis ipsa! Dignissimos minima dolore nesciunt.
            </p>
          </div>
          <div className="homepage_button_outer">
            <button className="homepage_left_button">Get started</button>
            <button className="homepage_right_button">
              <AiOutlinePlayCircle className='button_icon' />
              Book A Meeting
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
            <div className='layer2_logos_inner'>

            <img src={dummylogo} alt="dummylogo" className="layer2_logos" />
            <img src={dummylogo} alt="dummylogo" className="layer2_logos" />
            <img src={dummylogo} alt="dummylogo" className="layer2_logos" />
            <img src={dummylogo} alt="dummylogo" className="layer2_logos" />
            <img src={dummylogo} alt="dummylogo" className="layer2_logos" />
            <img src={dummylogo} alt="dummylogo" className="layer2_logos" />
            <img src={dummylogo} alt="dummylogo" className="layer2_logos" />
            </div>
          </div>
        </div>
      </div>

      <div className="homepage_layer3_outer_main">
        <div className="homepage_layer3_outer">
          <div className="homepage_layer3_part1">
            <h6 className="layer3_part1_heading">
              About Us
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
              Our Core Values
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
                  {/* Powerful Dashboard */}
                  Vision
                </h3>
                <p className="layer4_card_para">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
              </div>
              <div className="homepage_layer4_card">
                <div className="layer4_card_logo">

                </div>
                <h3 className="layer4_card_heading">
                  Mission
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
              Our Core Values
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
              cardscontent.map((data, ind) => (
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
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={0}
              slidesPerView={3}
              slidesPerGroup={1}
              navigation={{
                prevEl: ".custom-prev-button",
                nextEl: ".custom-next-button",
              }}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              speed={1000}
              loop={true}
              className="home_gallery_cardswiper1"
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 12,
                },
                721: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
            >

              {testmonials?.map((data, index) => (
                <SwiperSlide key={index}>
                  <div className="layer6_card">
                    <p className="layer6_card_logo">
                      {data.logo}
                    </p>
                    <p className="layer6_card_para">
                      {
                        data.para
                      }
                    </p>
                    <div className="layer6_card_bottom">
                      <div className="layer6_bottom_logo_outer">
                        <img src={data.img} alt="man" className="card_bottom_logo" />
                      </div>
                      <div className="card_bottom_right_text">
                        <h6 className="card_bottom_heading">{data.bottomname}</h6>
                        <p className="card_bottom_para">
                          {data.bottomtext}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

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


            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={0}
              slidesPerView={3}
              slidesPerGroup={1}
              slidesOffsetBefore={12}
              navigation={{
                prevEl: ".custom-prev-button",
                nextEl: ".custom-next-button",
              }}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              speed={1000}
              loop={true}
              className="home_gallery_cardswiper2"
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 12,
                },
                721: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
            >

              {Blogs?.map((data, index) => (
                <SwiperSlide key={index}>
                  <div className="layer7_card">
                    <p className="layer7_card_name">
                      {
                        data.Name
                      }
                    </p>
                    <p className="layer7_card_sub_name">
                      {
                        data.subname
                    }
                    </p>
                    <div className="layer7_card_line"></div>
                    <p className="layer7_card_para">
                     {
                      data.para
                     }
                    </p>
                    <h6 className="layer7_card_explore">
                      {data.explore}
                    </h6>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
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
