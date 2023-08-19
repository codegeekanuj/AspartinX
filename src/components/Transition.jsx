import { Power3 } from 'gsap'
import React, { useEffect, useRef } from 'react'

const Transition = ({timeline}) => {

    const slide1 =useRef(null)
    const slide2 =useRef(null)




    useEffect(()=>{
        timeline
        .to(slide1.current,{duration:0.5,height:"0px",ease:Power3.easeInOut})
        .to(slide2.current,{duration:0.5,delay:-0.3,height:"0px",ease:Power3.easeInOut})
        

    },[])

  return (
    <div>
        <div ref={slide1} className='absolute top-0 left-0 h-screen bg-lightBg  dark:bg-darkBg z-[11] w-full  ' ></div>
        <div ref={slide2} className='absolute top-0 right-0 h-screen bg-darkBg dark:bg-lightBg  z-10 w-full  '></div>
    </div>
  )
}

export default Transition