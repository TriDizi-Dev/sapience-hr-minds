import React, { useEffect, useState } from "react";
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
import parse, { domToReact } from "html-react-parser";
import { database, ref, get } from "../../Firebase/firebase";

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


  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };
  const renderStyledHtml = (htmlString) => {
    return parse(htmlString, {
      replace: (domNode) => {
        if (domNode.type === "tag") {
          const { name, children, attribs } = domNode;

          // Remove inline styles by excluding them from attribs
          const filteredAttribs = { ...attribs };
          console.log(filteredAttribs, "filteredAttribsfilteredAttribs");

          delete filteredAttribs.style;

          if (name === "p") {
            return (
              <p
                {...filteredAttribs}
                className="single_blog_content_para"
                data-aos="fade-up"
              >
                {domToReact(children)}
              </p>
            );
          }

          if (name === "strong") {
            return (
              <span
                {...filteredAttribs}
                className="single_blog_content_heading"
                data-aos="zoom-in"
              >
                {domToReact(children)}
              </span>
            );
          }

          if (name === "li") {
            return (
              <li
                {...filteredAttribs}
                className="single_blog_list"
                data-aos="zoom-in"
              >
                {domToReact(children)}
              </li>
            );
          }
        }
      },
    });
  };

  const [BlogsData, setBlogsData] = useState([]);
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
          setBlogsData(blogList);
        } else {
          console.log("No blog data found.");
        }
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchBlogs();
  }, []);

  console.log(data, "BlogsDataBlogsData");
  const DateFormate = (isoDateString) => {
    if (!isoDateString) return "";
    const date = new Date(isoDateString);
    return date.toLocaleDateString("en-GB"); // Formats to dd/mm/yyyy
  };

  return (
    <div className="single_blog_outer_main">
      <Helmet>
        <title>{`Sapience Minds-${data?.title}`}</title>
        <meta name="description" content={data?.content} />

        {/* Open Graph Meta Tags (for WhatsApp, Facebook, LinkedIn) */}
        <meta property="og:title" content={data?.title} />
        <meta property="og:description" content={data?.content} />
        <meta
          property="og:image"
          content="https://tridizi.com/assets/10782741_19197279%201-DKNLt4HA.svg"
        />
        <meta property="og:url" content="https://tridizi.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={data?.title} />
        <meta name="twitter:description" content={data?.content} />
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
            backgroundImage: `url(${data?.imageUrl})`,
          }}
        >
          <p className="single_blog_top_text">{`By ${
            data?.author_name
          } on ${formatDate(data?.created_at)} - 5 min read`}</p>

          <div className="banner_img_content">
            <h1 className="banner_img_content_heading">{data?.title}</h1>
            <p className="banner_img_content_para">{data?.content}</p>
          </div>
        </div>
      </div>
      {/* <div className="single_blog_layer2_outer">
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
      </div> */}
      <div className="single_blog_layer2_outer">
        <div className="single_blog_content">
          <img
            src={triangle}
            alt="triangle"
            className="single_blog_triangle_icon"
          />
          {data?.blog_content && renderStyledHtml(data.blog_content)}
        </div>
      </div>

      <div className="single_blog_layer3_outer">
        <img src={background} alt="background" className="single_blog_bg_img" />
        <div className="single_blog_layer3_main">
          {/* {data?.fourthheading && data?.fourthheading.length > 0 && (
            <p className="single_blog_content_heading" data-aos="zoom-in">
              {data?.fourthheading}
            </p>
          )}
          <p className="single_blog_content_para" data-aos="fade-right">
            {data?.fourthpara}
          </p> */}
          <div className="single_layer3_blogs_outer">
            <div className="single_blog_card_outer">
              {BlogsData?.filter((blog) => blog?.id !== data?.id)?.map(
                (data) => (
                  <div className="blog_card" data-aos="zoom-out-down">
                    <div className="blog_card_img_content_1">
                      <p className="blog_card_img_text">{data?.content}</p>
                    </div>
                    <img
                      src={data?.image_url}
                      alt=""
                      className="blog_img"
                      style={{
                        marginTop: "0.5vw",
                      }}
                    />
                    <div className="blog_content">
                      <div className="blog_left_content">
                        <h6 className="blog_content_heading">{data?.title}</h6>
                        <p className="blog_content_date">
                          {DateFormate(data?.created_at)}
                        </p>
                      </div>
                      <div className="blog_content_right">
                        <h6
                          className="blog_content_right_text"
                          onClick={() => {
                            setData(data);
                            window.scrollTo(0, 0);
                            navigate(`/blog/${data?.title}`);
                          }}
                        >
                          Know More
                        </h6>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleBlogPage;
