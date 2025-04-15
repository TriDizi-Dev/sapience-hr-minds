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

function Layout() {
  const location = useLocation();
  const hideFooter = location.pathname === "/contactus";

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/alliancepartner" element={<AlliancePartner />} />
        <Route path="/contactus" element={<ContactForm />} />
        <Route path="/careers" element={<Carrier />}></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route path="/hrlearning" element={<HrLearning />}></Route>
        <Route path="/privacy" element={<PrivacyAndTerms />}></Route>
      </Routes>
      {!hideFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
