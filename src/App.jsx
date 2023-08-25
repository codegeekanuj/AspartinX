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



function App() {
  const locomotiveScroll = new LocomotiveScroll();


  return (
    <Router>
      <ScrollToTop/>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="contact/" element={<Contact/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/*" element={<ErrorPage/>} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
