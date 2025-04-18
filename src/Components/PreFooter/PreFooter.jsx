import React, { useEffect } from "react";
import "./PreFooter.css";
import AOS from "aos";
import "aos/dist/aos.css";
// {head,Content,Btn1,Btn2}
export const PreFooter = ({
  Head,
  Content,
  Btn1 = "Get Started",
  Btn2 = "Book A Meeting",
}) => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 1000,
      easing: "ease-in-sine",
      once: false,
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const hadleNavigate = () => {
    window.open(
      "https://calendly.com/babitha-sapienceminds-pfmn/45min",
      "_blank"
    );
  };
  return (
    <>
      <div className="PreFooter_Main" data-aos="zoom-in">
        <p className="Heading_PreFooter">{Head}</p>
        <p className="Para_PreFooter">{Content}</p>
        <div className="Buttons_Container">
          <button className="Button1">{Btn1}</button>
          <button className="Button22" onClick={() => hadleNavigate()}>
            {Btn2}
          </button>
        </div>
      </div>
    </>
  );
};
