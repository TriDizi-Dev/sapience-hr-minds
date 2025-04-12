
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { HomePage } from './Pages/HomePage/HomePage';
import { Navbar } from './Components/NavBar/Navbar';
import { Footer } from './Components/Footer/Footer';

function App() {

  return (
    <BrowserRouter>
    {/* <Navbar/> */}
    <Footer/>
    <Routes>
      {/* <Route path="/" element={<HomePage />}></Route> */}
    </Routes>
  </BrowserRouter>
  )
}

export default App
