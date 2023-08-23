import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  return (
    <>
      <div className=" h-screen flex w-full " >
        <div className="text absolute top-56 h-80 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-lg p-6 shadow-lg w-1/2">
          <h3 className="aboutheading text-3xl font-semibold mb-4 leading-tight tracking-tight font-serif">
            Welcome to AspartinX - Your Partner in <br /> Website Services and
            Video Editing
          </h3>
          <br />
          <p className="text-gray-300 w-full">
            At  <span className="text-black text-xl font-semibold">  AspartinX  </span>, we believe in the power of a captivating online
            presence. In <br /> an era driven by visual and digital experiences, a
            well-maintained website and engaging video content can make all the
            difference. Our agency specializes in offering top-notch website
            services and professional video editing to help you stand out in the
            digital landscape.
          </p>
        </div>
        <div className="photos border-2 "> 
          <div className="img1 "></div>
     

        </div>
      </div>
      <div className="profilecards h-screen  border-2 border-black w-screen "></div>
    </>
  );
};

export default About;
