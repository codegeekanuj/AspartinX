import { Power3 } from "gsap";
import React, { useEffect, useRef } from "react";
import {AiOutlineDown} from "react-icons/ai"




const Hero = ({timeline}) => {

  const Heading = useRef(null)
  const Heading2 = useRef(null)
  useEffect(()=>{
    timeline
    .to(Heading.current,{duration:2,opacity:1})
    .to(Heading2.current,{duration:2,delay:-2,opacity:1})
  },[])
  
  return (
 
    <main className="flex  h-screen items-center justify-center  ">

      <section className=" flex flex-col items-center justify-center text-center space-y-2  p-4 ">
        <h1 ref={Heading} className=" text-4xl max-md:px-3 py-2 md:text-6xl font-bold heading1 opacity-0 ">Your Business, Our Priority</h1>
        <h2 ref={Heading2} className=" text-md md:text-2xl dark:text-slate-400 text-slate-600 opacity-0  ">Marketing | Development | Editing</h2>
      </section>
      {/* <button className="absolute bottom-2  flex items-center dark:text-white"><AiOutlineDown size={24}/></button> */}
      {/* <aside className="absolute bottom-6 left-6 "> </aside> */}

    </main>
   
  );
}

export default Hero;
