import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { HomePage } from "./Pages/HomePage/HomePage";
import { AboutPage } from "./Pages/AboutPage/AboutPage";
import { Navbar } from "./Components/NavBar/Navbar";
import { Footer } from "./Components/Footer/Footer";
import Carrier from "./Pages/Carrier/Carrier";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/services" element={<AboutPage />}></Route>
        <Route path="/carrier" element={<Carrier />}></Route>
      </Routes>
      <Footer />
      <Layout />
    </BrowserRouter>
  );
}

export default App;
