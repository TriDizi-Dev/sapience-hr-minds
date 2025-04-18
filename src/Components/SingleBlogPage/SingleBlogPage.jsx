import React, { useEffect } from 'react'
import "./SingleBlogPage.css"
import bannerimg from "../../assets/SingleBlog/blogbanner.jpg"
import blogimg1 from "../../assets/Blogs/blog1.svg"
import blogimg2 from "../../assets/Blogs/blog2.svg"

import background from "../../assets/SingleBlog/bbg2.svg"
import triangle from "../../assets/SingleBlog/triangle.svg"
import { useLocation } from 'react-router-dom'

import AOS from "aos";
import "aos/dist/aos.css";

function SingleBlogPage() {

      useEffect(() => {
        AOS.init({
          offset: 200,
          duration: 500,
          easing: "ease-in-sine",
          once: false,
        });
      }, []);

    
    const location = useLocation()

     useEffect(() => {
          window.scrollTo(0, 0);
        }, []);
    

    const data = location.state

    console.log(data, "data");
    

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
        <div className="single_blog_banner_img" style={{
            backgroundImage: `url(${data?.img})`,
        }}>
            <p className="single_blog_top_text">

                {
                    data.toptext
                }
            </p>
        
            <div className="banner_img_content">
                <h1 className="banner_img_content_heading">
                    {
                        data.bannerheading
                    }
                 </h1>
                <p className="banner_img_content_para">
                    {
                        data.bannertext
                    }
                 </p>
            </div>
            </div>



        </div>
        <div className="single_blog_layer2_outer">

            <div className="single_blog_content">
                <img src={triangle} alt="triangle" className="single_blog_triangle_icon" />
                <h1 className="single_blog_content_heading"  data-aos="zoom-in">
                {data?.firstheading}
                </h1>
                <p className="single_blog_content_para"  data-aos="fade-right">
                 {
                    data?.firstpara
                 }
                </p>
                {/* <p className="single_blog_content_para"  data-aos="fade-right">
                    {
                        data.secondpara
                    }
                 </p> */}

                <h1 className="single_blog_content_heading"  data-aos="zoom-in">
                {
                    data?.secondheading
            }
                </h1>
                <p className="single_blog_content_para"  data-aos="fade-right" >

                    {
                        data?.secondpara
                    }

                </p>
                <div className="single_blog_list_items_outer">
                    <li className="sigle_blog_list"  data-aos="zoom-in" >
                        {data?.listitems1}
                    </li>
                    <li className="sigle_blog_list" data-aos="zoom-in">
                    {data?.listitems2}
                    </li>
                    <li className="sigle_blog_list" data-aos="zoom-in">
                    {data?.listitems3}
                     </li>
                    <li className="sigle_blog_list" data-aos="zoom-in">
                    {data?.listitems4}
                     </li>

                </div>

                  <h1 className="single_blog_content_heading" data-aos="zoom-in">
                    {
                        data?.thirdheading
                    }
                </h1>
                <p className="single_blog_content_para" data-aos="fade-right">
               
               {
                data?.thirdpara 
               }
                </p>

            </div>
        </div>

        <div className="single_blog_layer3_outer">
            <img src={background} alt="background" className="single_blog_bg_img" />
            <div className="single_blog_layer3_main">

           {
            data?.fourthheading && data?.fourthheading.length>0 &&(

            <h1 className="single_blog_content_heading" data-aos="zoom-in">
                {data?.fourthheading}
            </h1>
            )
           }
            <p className="single_blog_content_para" data-aos="fade-right">
{
    data?.fourthpara
}
            </p>
            <div className="single_layer3_blogs_outer">
            <div className="blog_card_outer">
                    {
                        blogs.map((data)=>(
                            <div className="blog_card" data-aos="zoom-out-down">
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
