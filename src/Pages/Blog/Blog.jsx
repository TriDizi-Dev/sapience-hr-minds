import React, { useEffect, useState } from "react";
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
import icon_1 from "../../assets/AboutPage/icon_1.svg";
import icon_2 from "../../assets/AboutPage/icon_2.svg";


import Smallicon1 from "../../assets/AboutPage/Smallicon1.svg";
import Smallicon2 from "../../assets/AboutPage/Smallicon2.svg";
import { database, ref, get } from "../../Firebase/firebase";
import { Helmet } from "react-helmet-async";
import parse, { domToReact } from "html-react-parser";
import { ToastContainer } from "react-toastify";

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
  const [Blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const blogRef = ref(database, "blogs/hr-minds");

      try {
        const snapshot = await get(blogRef);
        if (snapshot.exists()) {
          const data = snapshot.val();
          console.log("Data fetched from Firebase:", data);

          const blogList = Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
            imageUrl: data[key].image_url || "", // Don't use ref() here!
          }));

          console.log("Parsed blog list:", blogList);
          setBlogs(blogList);
        } else {
          console.log("No blog data found.");
        }
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchBlogs();
  }, []);
  const formatDate = (isoDateString) => {
    if (!isoDateString) return "";
    const date = new Date(isoDateString);
    return date.toLocaleDateString("en-GB"); // Formats to dd/mm/yyyy
  };

  console.log(Blogs, "BlogsBlogs");

  const handleSignleBlog = (ev, id) => {
    const cleanPath = id.replaceAll(" ", "-");
    navigate(`/blog/${cleanPath}`, { state: ev });
  };

  return (
    <div className="blog_page_main_outer">
      <Helmet>
        <title>
        Sapience Minds-The Importance of Workforce Upskilling and Reskilling in Today’s
          Economy
        </title>
        <meta
          name="description"
          content="In today’s rapidly evolving economy, workforce upskilling and reskilling have become crucial for organizations aiming to stay competitive."
        />

        {/* Open Graph Meta Tags (for WhatsApp, Facebook, LinkedIn) */}
        <meta
          property="og:title"
          content="The Importance of Workforce Upskilling and Reskilling in Today’s Economy"
        />
        <meta
          property="og:description"
          content="In today’s rapidly evolving economy, workforce upskilling and reskilling have become crucial for organizations aiming to stay competitive."
        />
        <meta
          property="og:image"
          content="https://tridizi.com/assets/10782741_19197279%201-DKNLt4HA.svg"
        />
        <meta property="og:url" content="https://tridizi.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="The Importance of Workforce Upskilling and Reskilling in Today’s Economy"
        />
        <meta
          name="twitter:description"
          content="In today’s rapidly evolving economy, workforce upskilling and reskilling have become crucial for organizations aiming to stay competitive."
        />
        <meta
          name="twitter:image"
          content="https://tridizi.com/assets/10782741_19197279%201-DKNLt4HA.svg"
        />
      </Helmet>
      <div className="blog_page_layer1">
        <div className="blog_card_outer">
          {Blogs.map((data) => (
            <div
              className="blog_card"
              data-aos="zoom-out-down"
              onClick={() => handleSignleBlog(data, data?.content)}
            >
              <div className="blog_card_img_content">
                <p className="blog_card_img_text">{data?.content}</p>
              </div>
              <img src={data.imageUrl} alt="" className="blog_img" />
              <div className="blog_content">
                <div className="blog_left_content">
                  <p className="blog_content_heading">{data?.title}</p>
                  <p className="blog_content_date">
                    {formatDate(data?.created_at)}
                  </p>
                </div>
                <div className="blog_content_right">
                  <p className="blog_content_right_text">Know more</p>
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
              <p className="homepage_layer4_heading">Our Core Values</p>
              <h1 className="homepage_layer4_heading2">
              Guided by Purpose, Driven by People
              </h1>
              <p className="homepage_layer4_para">
              At Sapience Minds, our values are the foundation of every partnership. We believe in integrity, collaboration, and a relentless commitment to empowering startups with people-first HR strategies that deliver real impact. Our approach is empathetic, strategic, and always aligned with your business goals.
              </p>

              <div className="homepage_layer4_cards_outer">
                <div className="homepage_layer4_card">
                  <div className="layer4_card_logo">
                    <img
                      src={icon_1}
                      alt="Smallicon1"
                      className="layer4_logo"
                    />
                  </div>
                  <p className="layer4_card_heading">Our Vision</p>
                  <p className="layer4_card_para">
                  To be the most trusted HR partner for startups and emerging businesses, enabling sustainable growth through strategic people practices.
                  </p>
                </div>
                <div className="homepage_layer4_card">
                  <div className="layer4_card_logo">
                    <img
                      src={icon_2}
                      alt="Smallicon2"
                      className="layer4_logo"
                    />
                  </div>
                  <p className="layer4_card_heading">Our Mission</p>
                  <p className="layer4_card_para">
                  To deliver flexible, executive-level HR solutions that empower founders, nurture culture, and scale teams, one smart decision at a time.
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
          sourcepages="Blogs"
          Head="Let’s Build Your People Strategy – Together"
          Content="Your startup deserves more than just reactive HR. Whether you need structure, compliance, or a culture strategy, let’s have a conversation that moves your business forward. Book a discovery call or fill out the form and let’s shape a smarter, people-powered future for your company."
        />
      </div>
      <ToastContainer />
    </div>
  );
}

export default Blog;
