import React, { useEffect } from "react";
import "./Blog.css";
import blogimg1 from "../../assets/Blogs/image1.png";
import blogimg2 from "../../assets/Blogs/image2.png";
import blogimg3 from "../../assets/Blogs/image3.png";

import layer4 from "../../assets/HomePage/layer4.svg";

import { PreFooter } from "../../Components/PreFooter/PreFooter";
import glow from "../../assets/Blogs/bg1.svg";

import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

import Smallicon1 from "../../assets/AboutPage/Smallicon1.svg";
import Smallicon2 from "../../assets/AboutPage/Smallicon2.svg";

function Blog() {
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

  const navigate = useNavigate();

  const blogs = [
    {
      id: 1,
      img: blogimg1,
      imgtext:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      cardheading: "The Importance of Workforce Upskilling and Reskilling in Today’s Economy",
      date: " 06/1/2024",
      knowmore: "konw More",

      toptext: "By Babitha on April 24, 2025 - 5 min read",
      bannerheading: "The Importance of Workforce Upskilling and Reskilling in Today’s Economy",
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
      knowmore: "konw More",

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
      cardheading: "The Vital Role of Leadership Development and Succession Planning",
      date: " 06/1/2024",
      knowmore: "konw More",

      toptext: "By raju on April 24, 2025 - 5 min read",
      bannerheading: "The Vital Role of Leadership Development and Succession Planning",
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

  const handleSignleBlog = (ev, id) => {
    navigate(`/blog/${id}`, { state: ev });
  };

  return (
    <div className="blog_page_main_outer">
      <div className="blog_page_layer1">
        <div className="blog_card_outer">
          {blogs.map((data) => (
            <div
              className="blog_card"
              data-aos="zoom-out-down"
              onClick={() => handleSignleBlog(data, data?.bannerheading)}
            >
              <div className="blog_card_img_content">
                <p className="blog_card_img_text">{data?.bannertext}</p>     
              </div>
              <img src={data.img} alt="" className="blog_img" />
              <div className="blog_content">
                <div className="blog_left_content">
                  <h6 className="blog_content_heading">{data?.cardheading}</h6>
                  <p className="blog_content_date">{data?.date}</p>
                </div>
                <div className="blog_content_right">
                  <h6 className="blog_content_right_text">{data?.knowmore}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>

        <img src={glow} alt="bg1" className="backgroud_glow" />
      </div>

      {/* =======THIS LAYER STYLE IN HOME PAGE========= */}

      <div className="blog_page_layer2">
        <div className="blogpage_layer4_outer_main">
          <div className="homepage_layer4_outer" data-aos="fade-right">
            <div className="homepage_layer4_left">
              <p className="homepage_layer4_heading">Our Core Functions</p>
              <h1 className="homepage_layer4_heading2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </h1>
              <p className="homepage_layer4_para">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book
              </p>

              <div className="homepage_layer4_cards_outer">
                <div className="homepage_layer4_card">
                  <div className="layer4_card_logo">
                    <img
                      src={Smallicon1}
                      alt="Smallicon1"
                      className="layer4_logo"
                    />
                  </div>
                  <h3 className="layer4_card_heading">Powerful Dashboard</h3>
                  <p className="layer4_card_para">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
                <div className="homepage_layer4_card">
                  <div className="layer4_card_logo">
                    <img
                      src={Smallicon2}
                      alt="Smallicon2"
                      className="layer4_logo"
                    />
                  </div>
                  <h3 className="layer4_card_heading">Powerful Dashboard</h3>
                  <p className="layer4_card_para">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>
            <div className="homepage_layer4_right" data-aos="zoom-in">
              <img src={layer4} alt="layer4" className="homepage_layer4_img" />
            </div>
          </div>
        </div>
      </div>

      <div className="blog_prefooter">
        <PreFooter
          Head="Unlock The Power Of Cloud HR Solutions"
          Content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
        />
      </div>
    </div>
  );
}

export default Blog;
