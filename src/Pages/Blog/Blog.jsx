import React from 'react'
import "./Blog.css"
import blogimg1 from "../../assets/Blogs/blog1.svg"
import blogimg2 from "../../assets/Blogs/blog2.svg"

import layer4 from "../../assets/HomePage/layer4.svg"


import { PreFooter } from '../../Components/PreFooter/PreFooter'
import glow from "../../assets/Blogs/bg1.svg"


function Blog() {

    const blogs = [
        {
            id: 1,
            img: blogimg1,
            imgtext: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
            cardheading: ' Transforming Ambition Into Achievement',
            date: " 06/1/2024",
            knowmore: "konw More"
        },
        {
            id: 2,
            img: blogimg2,
            imgtext: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
            cardheading: ' Transforming Ambition Into Achievement',
            date: " 06/1/2024",
            knowmore: "konw More"
        },
        {
            id: 3,
            img: blogimg1,
            imgtext: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
            cardheading: ' Transforming Ambition Into Achievement',
            date: " 06/1/2024",
            knowmore: "konw More"
        },
        {
            id: 4,
            img: blogimg2,
            imgtext: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
            cardheading: ' Transforming Ambition Into Achievement',
            date: " 06/1/2024",
            knowmore: "konw More"
        },
        {
            id: 5,
            img: blogimg1,
            imgtext: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
            cardheading: ' Transforming Ambition Into Achievement',
            date: " 06/1/2024",
            knowmore: "konw More"
        },
        {
            id: 6,
            img: blogimg2,
            imgtext: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
            cardheading: ' Transforming Ambition Into Achievement',
            date: " 06/1/2024",
            knowmore: "konw More"
        },
        {
            id: 7,
            img: blogimg1,
            imgtext: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
            cardheading: ' Transforming Ambition Into Achievement',
            date: " 06/1/2024",
            knowmore: "konw More"
        },
        {
            id: 8,
            img: blogimg2,
            imgtext: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
            cardheading: ' Transforming Ambition Into Achievement',
            date: " 06/1/2024",
            knowmore: "konw More"
        },
    ]

    return (
        <div className="blog_page_main_outer">
            <div className="blog_page_layer1">
                <div className="blog_card_outer">
                    {
                        blogs.map((data)=>(
                            <div className="blog_card">
                        <div className="blog_card_img_content">
                            <p className="blog_card_img_text">
                                {
                                    data.imgtext
                                }
                            </p>
                        </div>
                        <img src={data.img} alt="" className="blog_img" />
                        <div className="blog_content">
                            <div className="blog_left_content">
                                <h6 className="blog_content_heading">
                                    {
                                        data.cardheading
                                    }
                                </h6>
                                <p className="blog_content_date">
                                   {
                                    data.date
                                   }
                                </p>
                            </div>
                            <div className="blog_content_right">
                                <h6 className="blog_content_right_text">
                                  {
                                    data.knowmore
                                  }
                                </h6>
                            </div>
                        </div>
                    </div>
                        ))
                    }
                
                </div>

                <img src={glow} alt="bg1" className="backgroud_glow" />

            </div>


{/* =======THIS LAYER STYLE IN HOME PAGE========= */}

            <div className="blog_page_layer2">

                  <div className="homepage_layer4_outer_main">
                        <div className="homepage_layer4_outer">
                
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
            </div>

            <div className="blog_prefooter">
                <PreFooter

                  Head='Unlock The Power Of Cloud HR Solutions'
          Content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
                
                />
            </div>
        </div>
    )
}

export default Blog
