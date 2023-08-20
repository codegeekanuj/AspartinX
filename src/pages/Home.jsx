

import { useEffect } from "react"
import Hero from "../components/Hero"
import Slider from "../components/Slider"


const Home = () => {

 

  return (
    <>
        <Hero  />
        <Slider/>
        <div className="h-screen bg-purple-500"></div>
    </>
  )
}

export default Home