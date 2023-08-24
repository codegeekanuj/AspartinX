
import React from "react";
import { Link } from "react-router-dom";


const Hero = () => {
 

  return (
 
    <main id="hero"  className="flex  h-screen items-center justify-center ">
      <section className=" flex flex-col items-center justify-center text-center space-y-2  p-4 ">
      <div className=" rounded-full px-3 py-1 text-sm leading-6 text-slate-800 dark:text-slate-200 ring-1 ring-gray-900/20 dark:ring-slate-200/20 max-md:-mt-16">
      Join us on the road to success. <Link to="/about" className="font-semibold hover:text-indigo-700 text-indigo-600">Learn more &rarr;</Link>
        </div>
        <h1 className=" text-4xl max-md:px-3 py-2 md:text-6xl font-bold heading1  " >Your Business, Our Priority</h1>
        <h2  className=" text-md md:text-2xl dark:text-slate-200 text-slate-800 ">Marketing | Development | Editing</h2>
      </section>
    </main>
   
  );
}

export default Hero;
