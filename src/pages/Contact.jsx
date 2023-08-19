import React from 'react'
import { gsap} from 'gsap'

import Transition from '../components/Transition'

const Contact = () => {
  const timeline = gsap.timeline()

  return (
    <div className=" h-screen">
        <Transition timeline={timeline} />
      
    </div>
  )
}

export default Contact