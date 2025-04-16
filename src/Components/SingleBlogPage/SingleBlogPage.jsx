import React from 'react'
import "./SingleBlogPage.css"
import bannerimg from "../../assets/SingleBlog/blogbanner.jpg"
import blogimg1 from "../../assets/Blogs/blog1.svg"
import blogimg2 from "../../assets/Blogs/blog2.svg"

import background from "../../assets/SingleBlog/bbg2.svg"
import triangle from "../../assets/SingleBlog/triangle.svg"

function SingleBlogPage() {

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
    <div className="single_blog_outer_main">
        <div className="sinle_blog_banner">

        {/* <img src={bannerimg} alt="bannerimg" className="single_blog_banner_img" /> */}
        <div className="single_blog_banner_img">
            <p className="single_blog_top_text">
            By Babitha on April 24, 2025 - 5 min read
            </p>
        
            <div className="banner_img_content">
                <h1 className="banner_img_content_heading">
                Transforming Ambition Into Achievement
                </h1>
                <p className="banner_img_content_para">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                </p>
            </div>
            </div>



        </div>
        <div className="single_blog_layer2_outer">

            <div className="single_blog_content">
                <img src={triangle} alt="triangle" className="single_blog_triangle_icon" />
                <h1 className="single_blog_content_heading">
                Lorem ipsum dolor 
                </h1>
                <p className="single_blog_content_para">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book Lorem Ipsum is 
                simply dummy text of the printing and typesetting industry. 
                </p>
                <p className="single_blog_content_para">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book Lorem Ipsum is 
                simply dummy text of the printing and typesetting industry. 
                </p>

                <h1 className="single_blog_content_heading">
                Lorem ipsum dolor sit amet
                </h1>
                <p className="single_blog_content_para">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book Lorem Ipsum is 
                simply dummy text of the printing and typesetting industry. 
                </p>
                <div className="single_blog_list_items_outer">
                    <li className="sigle_blog_list">
                        Non magni quisquam
                    </li>
                    <li className="sigle_blog_list">
                         Eum aperiam facilis
                    </li>
                    <li className="sigle_blog_list">
                      Id quibusdam corporis et voluptate minus
                    </li>
                    <li className="sigle_blog_list">
                      Qui internos impedit vel unde
                    </li>

                </div>

                  <h1 className="single_blog_content_heading">
                Lorem ipsum dolor sit amet
                </h1>
                <p className="single_blog_content_para">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book Lorem Ipsum is 
                simply dummy text of the printing and typesetting industry. 
                </p>

            </div>
        </div>

        <div className="single_blog_layer3_outer">
            <img src={background} alt="background" className="single_blog_bg_img" />
            <div className="single_blog_layer3_main">

           
            <h1 className="single_blog_layer3_heading">
                Further Readings
            </h1>
            <div className="single_layer3_blogs_outer">
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
            </div>
            </div>

        </div>
    </div>
  )
}

export default SingleBlogPage
