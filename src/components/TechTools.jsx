import React from 'react'
import Slider from "./Slider"


const TechTools = () => {
  return (
    <main className='flex  flex-col items-center justify-center h-[45vh] md:h-[80vh] gap-8 md:gap-14 text-center text-black dark:text-white '>
        <h1 className="text-2xl md:text-3xl font-bold ">Our Tech Toolbox</h1>
        <p className='text-sm md:text-md font-semibold max-md:w-[90%] text-slate-600 dark:text-slate-400'>Innovative solutions require innovative tools.<br/>At AspartinX, we blend creativity with the latest technological marvels to craft solutions that leave a mark.</p>
        <Slider/>
        <div className=' py-2 max-md:text-sm bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 text-black font-semibold w-full '>
        "Transforming Visions with the Magic of Tech."<br/> - AspartinX Team
        </div>
    </main>
  )
}

export default TechTools