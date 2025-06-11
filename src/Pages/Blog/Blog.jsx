


import React, { useEffect, useState } from "react";
import "./Blog.css";
import layer4 from "../../assets/HomePage/layer4.svg";
import { PreFooter } from "../../Components/PreFooter/PreFooter";
import glow from "../../assets/Blogs/bg1.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import icon_1 from "../../assets/AboutPage/icon_1.svg";
import icon_2 from "../../assets/AboutPage/icon_2.svg";
import { database, ref, get } from "../../Firebase/firebase";
import { Helmet } from "react-helmet-async";
import { ToastContainer } from "react-toastify";

const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 500,
      easing: "ease-in-sine",
      once: false,
    });
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchBlogs = async () => {
      const blogRef = ref(database, "blogs");
      try {
        const snapshot = await get(blogRef);
        if (snapshot.exists()) {
          const data = snapshot.val();
          const blogList = Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
            imageUrl: data[key].image_url || "",
          }));
          setBlogs(blogList);
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
    return date.toLocaleDateString("en-GB"); // dd/mm/yyyy
  };

 const handleSingleBlog = (blog) => {
  const slug = slugify(blog.title);
  navigate(`/blog/${slug}`, { state: blog });
};

  return (
    <div className="blog_page_main_outer">
      <Helmet>
        <title>
          Sapience Minds – The Importance of Workforce Upskilling and Reskilling
        </title>
        <meta
          name="description"
          content="In today’s rapidly evolving economy, workforce upskilling and reskilling have become crucial for organizations aiming to stay competitive."
        />
        <meta property="og:title" content="The Importance of Workforce Upskilling and Reskilling" />
        <meta property="og:description" content="In today’s rapidly evolving economy, workforce upskilling and reskilling have become crucial for organizations aiming to stay competitive." />
        <meta property="og:image" content="https://tridizi.com/assets/10782741_19197279%201-DKNLt4HA.svg" />
        <meta property="og:url" content="https://tridizi.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="The Importance of Workforce Upskilling and Reskilling" />
        <meta name="twitter:description" content="In today’s rapidly evolving economy, workforce upskilling and reskilling have become crucial for organizations aiming to stay competitive." />
        <meta name="twitter:image" content="https://tridizi.com/assets/10782741_19197279%201-DKNLt4HA.svg" />
      </Helmet>

      {/* Blog Cards */}
      <div className="blog_page_layer1">
        <div className="blog_card_outer">
          {blogs.map((data) => (
            <div
              className="blog_card"
              onClick={() => handleSingleBlog(data)}
              key={data.id}
            >
              <div className="blog_card_img_content">
                <p className="blog_card_img_text">{data.content}</p>
              </div>
              <img src={data.imageUrl} alt="" className="blog_img" />
              <div className="blog_content">
                <div className="blog_left_content">
                  <p className="blog_content_heading">{data.title}</p>
                  <p className="blog_content_date">{formatDate(data.created_at)}</p>
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

      {/* Core Values Section */}
      <div className="blog_page_layer2">
        <div className="blogpage_layer4_outer_main">
          <div className="homepage_layer4_outer" data-aos="fade-right">
            <div className="homepage_layer4_left">
              <p className="homepage_layer4_heading">Our Core Values</p>
              <h1 className="homepage_layer4_heading2">Guided by Purpose, Driven by People</h1>
              <p className="homepage_layer4_para">
                At Sapience Minds, our values are the foundation of every partnership. We believe in integrity, collaboration, and a relentless commitment to empowering startups with people-first HR strategies that deliver real impact. Our approach is empathetic, strategic, and always aligned with your business goals.
              </p>
              <div className="homepage_layer4_cards_outer">
                <div className="homepage_layer4_card">
                  <div className="layer4_card_logo">
                    <img src={icon_1} alt="icon" className="layer4_logo" />
                  </div>
                  <p className="layer4_card_heading">Our Vision</p>
                  <p className="layer4_card_para">
                    To be the most trusted HR partner for startups and emerging businesses, enabling sustainable growth through strategic people practices.
                  </p>
                </div>
                <div className="homepage_layer4_card">
                  <div className="layer4_card_logo">
                    <img src={icon_2} alt="icon" className="layer4_logo" />
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

      {/* PreFooter */}
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
