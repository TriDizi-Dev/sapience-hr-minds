import React, { useEffect } from "react";
import "./SingleBlogPage.css";
import bannerimg from "../../assets/SingleBlog/blogbanner.jpg";
import blogimg1 from "../../assets/Blogs/image1.png";
import blogimg2 from "../../assets/Blogs/image2.png";
import blogimg3 from "../../assets/Blogs/image3.png";

import background from "../../assets/SingleBlog/bbg2.svg";
import triangle from "../../assets/SingleBlog/triangle.svg";
import { useLocation, useNavigate } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet-async";

function SingleBlogPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const data1 = location.state;
  const [data, setData] = React.useState(data1);
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 500,
      easing: "ease-in-sine",
      once: false,
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.log(data, "data");

  const blogs = [
    {
      id: 1,
      img: blogimg1,
      imgtext:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      cardheading:
        "The Importance of Workforce Upskilling and Reskilling in Today’s Economy",
      date: " 06/1/2024",
      knowmore: "know More",

      toptext: "By Babitha on April 24, 2025 - 5 min read",
      bannerheading:
        "The Importance of Workforce Upskilling and Reskilling in Today’s Economy",
      bannertext:
        "In today’s rapidly evolving economy, workforce upskilling and reskilling have become crucial for organizations aiming to stay competitive.",

      firstheading: "Introduction to Workforce Upskilling and Reskilling",
      secondheading: "The Benefits of Upskilling",
      thirdheading: "The Need for Reskilling",
      fourthheading:
        "Implementing Effective Upskilling and Reskilling Programs",

      firstpara:
        "In today’s rapidly evolving economy, workforce upskilling and reskilling have become crucial for organizations aiming to stay competitive. As technology advances and market demands shift, employees need to acquire new skills or enhance existing ones to meet these changes effectively.",
      secondpara:
        "Upskilling refers to providing current employees with additional training to learn new skills relevant to their current job roles. This practice not only helps employees stay updated with the latest industry trends but also boosts their confidence and productivity. For organizations, upskilling can lead to increased innovation, higher employee retention rates, and a more agile workforce.",
      thirdpara:
        "Reskilling, on the other hand, involves training employees to take on entirely new roles within the organization. This is particularly important when certain job functions become obsolete due to technological advancements or shifts in market needs. Reskilling ensures that valuable employees can transition to new positions, thereby retaining institutional knowledge and reducing turnover costs.",
      fourthpara:
        "To implement effective upskilling and reskilling programs, organizations should first conduct a skills gap analysis to identify areas where training is needed. Collaborating with educational institutions and leveraging online learning platforms can provide employees with access to high-quality training resources. Additionally, fostering a culture of continuous learning within the organization can encourage employees to take charge of their professional development.",

      listitems1: "Non magni quisquam",
      listitems2: "Eum aperiam facilis",
      listitems3: "Id quibusdam corporis et voluptate minus",
      listitems4: "Qui internos impedit vel unde",
    },
    {
      id: 2,
      img: blogimg2,
      imgtext:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      cardheading: "The Role of HR Analytics in Data-Driven Decision Making",
      date: " 06/1/2024",
      knowmore: "know More",

      toptext: "By mani on April 24, 2025 - 5 min read",
      bannerheading: "The Role of HR Analytics in Data-Driven Decision Making",
      bannertext:
        "Human Resources (HR) analytics, also known as people analytics, involves gathering, analyzing, and interpreting data related to human resources.",

      firstheading: "Introduction to HR Analytics",
      secondheading: "Benefits of Data-Driven Decision Making",
      thirdheading: "Implementing HR Analytics",
      fourthheading: "Challenges and Considerations",

      firstpara:
        "Human Resources (HR) analytics, also known as people analytics, involves gathering, analyzing, and interpreting data related to human resources. It helps organizations make informed decisions based on data rather than intuition or experience alone. In today’s competitive business environment, leveraging HR analytics has become crucial for effective workforce planning and management.",
      secondpara:
        "Data-driven decision making in HR offers numerous benefits. It enhances the ability to predict future trends, improve employee performance, and increase overall organizational efficiency. By analyzing data, HR professionals can identify patterns and trends that may not be visible at first glance. This leads to more strategic decisions that align with long-term business goals.",
      thirdpara:
        "Implementing HR analytics involves collecting data from various sources such as employee performance reviews, attendance records, and engagement surveys. Advanced analytical tools and software can then process this data to provide actionable insights. It is essential to ensure data accuracy and integrity for reliable analysis. Organizations should also invest in training HR professionals to effectively interpret and utilize the data.",
      fourthpara:
        "While HR analytics offers substantial benefits, it also comes with challenges. Data privacy and security are critical concerns, as handling sensitive employee information requires strict compliance with regulations. Additionally, integrating data from disparate sources can be complex and time-consuming. Organizations must address these challenges to fully realize the potential of HR analytics in data-driven decision making.",

      listitems1: "Non magni quisquam",
      listitems2: "Eum aperiam facilis",
      listitems3: "Id quibusdam corporis et voluptate minus",
      listitems4: "Qui internos impedit vel unde",
    },
    {
      id: 3,
      img: blogimg3,
      imgtext:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      cardheading:
        "The Vital Role of Leadership Development and Succession Planning",
      date: " 06/1/2024",
      knowmore: "know More",

      toptext: "By raju on April 24, 2025 - 5 min read",
      bannerheading:
        "The Vital Role of Leadership Development and Succession Planning",
      bannertext:
        "In today’s fast-paced business environment, leadership development is more crucial than ever. Companies need to invest in nurturing their future leaders .",

      firstheading: "Understanding Leadership Development",
      secondheading: "The Importance of Succession Planning",
      thirdheading:
        "Integrating Leadership Development with Succession Planning",
      fourthheading: "",

      firstpara:
        "In today’s fast-paced business environment, leadership development is more crucial than ever. Companies need to invest in nurturing their future leaders to ensure they are prepared to tackle challenges and drive the organization forward. Leadership development encompasses a range of activities such as mentoring, training programs, and hands-on experience that help individuals enhance their leadership skills and competencies.",
      secondpara:
        "Succession planning is a strategic approach to ensure that businesses have the right leaders ready to step into key roles when needed. It involves identifying and developing potential leaders within the organization who can fill critical positions as they become available. This proactive approach minimizes disruptions and ensures continuity in leadership, which is vital for maintaining organizational stability and achieving long-term goals.",
      thirdpara:
        "  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      fourthpara:
        "Combining leadership development with succession planning creates a robust framework for building a strong leadership pipeline. Organizations should identify high-potential employees early on and provide them with targeted development opportunities. By aligning leadership development initiatives with succession planning, companies can ensure that their future leaders are well-equipped to take on greater responsibilities and lead the organization to success.In conclusion, leadership development and succession planning are interconnected processes that play a vital role in the sustained success of any organization. By focusing on these areas, companies can build a resilient leadership team capable of navigating future challenges and driving growth.",

      listitems1: "Non magni quisquam",
      listitems2: "Eum aperiam facilis",
      listitems3: "Id quibusdam corporis et voluptate minus",
      listitems4: "Qui internos impedit vel unde",
    },
  ];
  return (
    <div className="single_blog_outer_main">
        <Helmet>
      <title>
     {data?.bannerheading} 
        </title>
        <meta
          name="description"
          content={data?.bannertext}
        />

           {/* Open Graph Meta Tags (for WhatsApp, Facebook, LinkedIn) */}
           <meta
          property="og:title"
          content={data?.bannerheading} 
        />
        <meta
          property="og:description"
          content={data?.bannertext}
        />
        <meta
          property="og:image"
          content="https://tridizi.com/assets/10782741_19197279%201-DKNLt4HA.svg"
        />
        <meta
          property="og:url"
          content="https://tridizi.com/"
        />
        <meta property="og:type" content="website" />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={data?.bannerheading}
        />
        <meta
          name="twitter:description"
          content={data?.bannertext}
        />
        <meta
          name="twitter:image"
          content="https://tridizi.com/assets/10782741_19197279%201-DKNLt4HA.svg"
        />

      </Helmet>
      <div className="sinle_blog_banner">
        {/* <img src={bannerimg} alt="bannerimg" className="single_blog_banner_img" /> */}
        <div
          className="single_blog_banner_img"
          style={{
            backgroundImage: `url(${data?.img})`,
          }}
        >
          <p className="single_blog_top_text">{data.toptext}</p>

          <div className="banner_img_content">
            <h1 className="banner_img_content_heading">{data.bannerheading}</h1>
            <p className="banner_img_content_para">{data.bannertext}</p>
          </div>
        </div>
      </div>
      <div className="single_blog_layer2_outer">
        <div className="single_blog_content">
          <img
            src={triangle}
            alt="triangle"
            className="single_blog_triangle_icon"
          />
          <p className="single_blog_content_heading" data-aos="zoom-in">
            {data?.firstheading}
          </p>
          <p className="single_blog_content_para" data-aos="fade-right">
            {data?.firstpara}
          </p>

          <p className="single_blog_content_heading" data-aos="zoom-in">
            {data?.secondheading}
          </p>
          <p className="single_blog_content_para" data-aos="fade-right">
            {data?.secondpara}
          </p>
          <div className="single_blog_list_items_outer">
            <li className="sigle_blog_list" data-aos="zoom-in">
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

          <p className="single_blog_content_heading" data-aos="zoom-in">
            {data?.thirdheading}
          </p>
          <p className="single_blog_content_para" data-aos="fade-right">
            {data?.thirdpara}
          </p>
        </div>
      </div>

      <div className="single_blog_layer3_outer">
        <img src={background} alt="background" className="single_blog_bg_img" />
        <div className="single_blog_layer3_main">
          {data?.fourthheading && data?.fourthheading.length > 0 && (
            <p className="single_blog_content_heading" data-aos="zoom-in">
              {data?.fourthheading}
            </p>
          )}
          <p className="single_blog_content_para" data-aos="fade-right">
            {data?.fourthpara}
          </p>
          <div className="single_layer3_blogs_outer">
            <div className="single_blog_card_outer">
              {blogs
                ?.filter((blog) => blog.id !== data?.id)
                ?.map((data) => (
                  <div className="blog_card" data-aos="zoom-out-down">
                    <div className="blog_card_img_content_1">
                      <p className="blog_card_img_text">{data?.bannertext}</p>
                    </div>
                    <img
                      src={data?.img}
                      alt=""
                      className="blog_img"
                      style={{
                        marginTop: "0.5vw",
                      }}
                    />
                    <div className="blog_content">
                      <div className="blog_left_content">
                        <h6 className="blog_content_heading">
                          {data?.cardheading}
                        </h6>
                        <p className="blog_content_date">{data?.date}</p>
                      </div>
                      <div className="blog_content_right">
                        <h6
                          className="blog_content_right_text"
                          onClick={() => {
                            setData(data);
                            window.scrollTo(0, 0);     
                            navigate(`/blog/${data?.bannerheading}`);
                          }}
                        >
                          {data?.knowmore}
                        </h6>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleBlogPage;
