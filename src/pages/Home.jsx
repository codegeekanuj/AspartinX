import { gsap} from 'gsap'

import Hero from "../components/Hero"
import Slider from "../components/Slider"
import Transition from "../components/Transition"


const Home = () => {

  const timeline = gsap.timeline()
  

  return (
    <>
        <Transition timeline={timeline} />
        <Hero timeline={timeline} />
        <Slider/>
    </>
  )
}

export default Home