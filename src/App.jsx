import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./Pages/HomePage/HomePage";
import { AboutPage } from "./Pages/AboutPage/AboutPage";
import { Navbar } from "./Components/NavBar/Navbar";
import { Footer } from "./Components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
