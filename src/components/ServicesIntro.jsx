import React from "react";
import { Link } from "react-router-dom";

const ServicesIntro = () => {
  return (
    <section >
      <div className="container px-6 py-10  max-md:w-[90%] mx-auto dark:text-white bg-white/70 rounded-2xl shadow-2xl dark:bg-white/10">

        <div className="text-center mb-10">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 ">
            Our Services
          </h1>
          <p className='text-sm md:text-md font-semibold  text-slate-600 dark:text-slate-400'>From development to marketing to editing,<br/> AspartinX offers a complete range of services designed to ignite your brand's potential. Let us help you rise to new heights.</p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
          </div>
        </div>

        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:py-6  md:space-y-0 space-y-6 max-md:mb-2">
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center ">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 text-indigo-500 mb-5 flex-shrink-0">
              <img src={"https://cdn-icons-png.flaticon.com/128/1336/1336494.png"} className="object-contain w-14 h-14"/>
            </div>
            <div className="flex-grow">
              <h2 className=" dark:text-white text-lg  font-semibold mb-3">
                Developement
              </h2>
              <p className="dark:text-slate-400 px-6">
              From websites to apps, AspartinX turns ideas into digital reality. Elevate your online presence with our expert development
              </p>
              
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div className="w-20 h-20 inline-flex items-center justify-center rounded-full  dark:bg-indigo-500 text-indigo-500 mb-5 flex-shrink-0">
              <img src={"https://cdn-icons-png.flaticon.com/128/3141/3141158.png"} className="object-contain w-14 h-14"/>
            </div>
            <div className="flex-grow">
              <h2 className=" dark:text-white text-lg  font-semibold mb-3">
              Marketing
              </h2>
              <p className="dark:text-slate-400 px-6">
              Maximize impact with AspartinX's ad expertise. Elevate your brand through strategic campaigns.
              </p>
              
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center ">
          <div className="w-20 h-20 inline-flex items-center justify-center rounded-full  dark:bg-indigo-500 text-indigo-500 mb-5 flex-shrink-0">
              <img src={"https://cdn-icons-png.flaticon.com/128/8242/8242575.png"} className="object-contain w-12 h-12 "/>
            </div>
            <div className="flex-grow">
              <h2 className=" dark:text-white text-lg  font-semibold mb-3">
              Editing
              </h2>
              <p className="dark:text-slate-400 px-6">
              Elevate your content with AspartinX's video editing. We bring your visuals to life with storytelling finesse.
              </p>
              
            </div>
          </div>
        </div>
        {/* <Link to={"/services"}><button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-700 rounded-xl text-lg">
          Read More
        </button></Link> */}
      </div>
    </section>
  );
};

export default ServicesIntro;
