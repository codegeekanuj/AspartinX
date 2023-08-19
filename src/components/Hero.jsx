import React from "react";
import {AiOutlineDown} from "react-icons/ai"




const Hero = () => {

  
  return (
 
    <main className="flex  h-screen items-center justify-center  ">

      <section className=" flex flex-col items-center justify-center text-center space-y-2  p-4 ">
        <h1 className=" text-4xl max-md:px-3 py-2 md:text-6xl font-bold heading1 ">Your Business, Our Priority</h1>
        <h2 className=" text-md md:text-2xl dark:text-slate-400 text-slate-600   ">Marketing | Development | Editing</h2>
      </section>
      {/* <button className="absolute bottom-2  flex items-center dark:text-white"><AiOutlineDown size={24}/></button> */}
      {/* <aside className="absolute bottom-6 left-6 "> </aside> */}

    </main>
   
  );
}

export default Hero;
