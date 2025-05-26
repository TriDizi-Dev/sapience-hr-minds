import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { HomePage } from "./Pages/HomePage/HomePage";
import { AboutPage } from "./Pages/AboutPage/AboutPage";
import { Navbar } from "./Components/NavBar/Navbar";
import { Footer } from "./Components/Footer/Footer";
import { AlliancePartner } from "./Pages/AlliancePartner/AlliancePartner";
import ContactForm from "./Pages/ContactUs/ContactUs";
import { useLocation } from "react-router-dom";
import { Service } from "./Components/Services/Service";
import Carrier from "./Pages/Carrier/Carrier";
import PrivacyAndTerms from "./Components/PrivacyAndTerms/PrivacyAndTerms";
import { HrLearning } from "./Components/HrLearning/HrLearning";
import PricacyPolicy from "./Pages/PrivacyPolicy/PricacyPolicy";
import TermsAndCondition from "./Pages/TermsAndCondition/TermsAndCondition";
import Blog from "./Pages/Blog/Blog";
import SingleBlogPage from "./Components/SingleBlogPage/SingleBlogPage";
import { ServicePageOne } from "./Pages/Servicepages/ServicePageOne";
import { ServicePageTwo } from "./Pages/Servicepages/ServicePageTwo";
import { ServiceThree } from "./Pages/Servicepages/ServiceThree";
import { ServicePageFour } from "./Pages/Servicepages/ServicePageFour";
import { ServicePageFive } from "./Pages/Servicepages/ServicePageFive";
import { ServicePageSix } from "./Pages/Servicepages/ServicePageSix";
import { ServicePageSeven } from "./Pages/Servicepages/ServicePageSeven";
import { ServicePageEight } from "./Pages/Servicepages/ServicePageEight";
import InternshipHRLearning from "./Pages/InternshipHrLearning/InternshipHrLearning";
import WorkshopsHrLearning from "./Pages/WorkshopsHrInternship/workshopHrLearning";
import WebinarHRLearning from "./Pages/WebinarHrLearning/WebinarHrLearning";
import { CreateBlog } from "./Pages/BlogCreationPage/blogcreation";
import CareerCreation from "./Pages/careerCreation/careerCreation";
import { HelmetProvider } from "react-helmet-async";
import { Manageblogs } from "./Pages/ManageBlogs/Manageblogs";
import { UpdateBlog } from "./Pages/BlogUpdation/BlogUpdation";
import CareerUpdate from "./Pages/careerCreation/updationCareerpage";
import SmallCard from "./Components/managingCareers/managingCareers";
import { useEffect, useState } from "react";
import Loader from "./Components/Loader/Loader";
import NotFound from "./Pages/NotFoundPage/NotFound";

function Layout() {
  const location = useLocation();


    const hideLayoutRoutes = ["/blog-creation", "/career-creation", "/career-update","blog-updation"];
const isNotFound = ![
  "/", "/about", "/alliance-partner", "/contactus", "/careers", "/service",
  "/internship-hr-learning", "/workshop-hr-learning", "/webinar-hr-learning",
  "/privacy", "/privacypolicy", "/termsandconditions", "/blogs", "/manageblogs",
  "/blog-updation", "/managecareers", "/blog/:id", "/career-update",
  "/hr-compliance", "/hr-consulting", "/virtual-chro-and-outsourcing",
  "/talent-acquisition-solutions", "/talent-management", "/talent-engagement",
  "/recruitment-of-leadership", "/employee-benfits-and-insurance-consulting"
].includes(location.pathname);

const hideFooter = hideLayoutRoutes.includes(location.pathname) || isNotFound;

  return (
    <>
      <HelmetProvider>
        {!hideFooter && <Navbar />}
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/alliance-partner" element={<AlliancePartner />} />
          <Route path="/contactus" element={<ContactForm />} />
          <Route path="/careers" element={<Carrier />}></Route>
          <Route path="/service" element={<Service />}></Route>
          {/* <Route path="/hrlearning" element={<HrLearning />}></Route> */}
          <Route
            path="/internship-hr-learning"
            element={<InternshipHRLearning />}
          />
          <Route
            path="/workshop-hr-learning"
            element={<WorkshopsHrLearning />}
          />
          <Route path="/webinar-hr-learning" element={<WebinarHRLearning />} />
          <Route path="/privacy" element={<PrivacyAndTerms />}></Route>
          <Route path="/privacypolicy" element={<PricacyPolicy />}></Route>
          <Route
            path="/termsandconditions"
            element={<TermsAndCondition />}
          ></Route>
          <Route path="/blogs" element={<Blog />}></Route>
          {/* <Route path="/singleBlog" element={<SingleBlogPage />}></Route> */}
          <Route path="/hr-compliance" element={<ServicePageOne />}></Route>
          <Route path="/hr-consulting" element={<ServicePageTwo />}></Route>
          <Route
            path="/virtual-chro-and-outsourcing"
            element={<ServiceThree />}
          ></Route>
          <Route
            path="/talent-acquisition-solutions"
            element={<ServicePageFour />}
          ></Route>
          <Route
            path="/talent-management"
            element={<ServicePageFive />}
          ></Route>
          <Route path="/talent-engagement" element={<ServicePageSix />}></Route>
          <Route
            path="/recruitment-of-leadership"
            element={<ServicePageSeven />}
          ></Route>
          <Route
            path="/employee-benfits-and-insurance-consulting"
            element={<ServicePageEight />}
          ></Route>
          <Route path="/blog/:id" element={<SingleBlogPage />}></Route>
          <Route path="/blog-creation" element={<CreateBlog />}></Route>
          <Route path="/career-creation" element={<CareerCreation />}></Route>
          <Route path="/manageblogs" element={<Manageblogs />}></Route>
          <Route path="/blog-updation" element={<UpdateBlog />}></Route>
          <Route path="/career-update" element={<CareerUpdate />} />
          <Route path="/managecareers" element={<SmallCard />} />
        </Routes>
        {!hideFooter && <Footer />}
      </HelmetProvider>
    </>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // Simulate loading time (e.g., API call, resource loading)
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 2000); // show loader for 2 seconds

  //   return () => clearTimeout(timer);
  // }, []);

  useEffect(() => {
    const handleImageLoad = () => {
      const images = Array.from(document.images);
      if (images.every((img) => img.complete)) {
        // Slight delay to allow paint
        requestAnimationFrame(() => {
          setTimeout(() => setLoading(false), 1000);
        });
      } else {
        let loadedCount = 0;
        images.forEach((img) => {
          const done = () => {
            loadedCount++;
            if (loadedCount === images.length) {
              requestAnimationFrame(() => {
                setTimeout(() => setLoading(false), 1000);
              });
            }
          };
          img.addEventListener("load", done, { once: true });
          img.addEventListener("error", done, { once: true });
        });
      }
    };

    setTimeout(handleImageLoad, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
