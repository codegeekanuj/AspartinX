

import { useEffect } from "react"
import Hero from "../components/Hero"

import TechTools from "../components/TechTools"
import ServicesIntro from "../components/ServicesIntro"
import GetStarted from "../components/GetStarted"


const Home = () => {

 

  return (
    <>
        <Hero  />
        <ServicesIntro/>
        <TechTools/>
        <GetStarted/>
    </>
  )
}

export default Home