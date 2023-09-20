import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Services from "./pages/Services"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Footer from "./components/Footer"
import LocomotiveScroll from 'locomotive-scroll';
import { useEffect, useLayoutEffect } from "react"
import ScrollToTop from "./components/ScrollToTop"
import ErrorPage from "./pages/ErrorPage"
import Soon from "./pages/Soon"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import Pricing from "./pages/Pricing"
import { Toaster } from "react-hot-toast"



function App() {
  const locomotiveScroll = new LocomotiveScroll();


  return (
    <Router>
      <Toaster/>
      <ScrollToTop/>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="contact/" element={<Contact/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/marketing" element={<Soon/>} />
          <Route path="/webdev" element={<Soon/>} />
          <Route path="/appdev" element={<Soon/>} />
          <Route path="/editing" element={<Soon/>} />
          <Route path="/pricing" element={<Pricing/>} />
          <Route path="/portfolio" element={<Soon/>} />
          <Route path="/testimonial" element={<Soon/>} />
          <Route path="/getstarted" element={<Soon/>} />
          <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
          <Route path="/terms&condition" element={<Soon/>} />
          
          <Route path="/*" element={<ErrorPage/>} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
