import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  return (
    <>
    <div  className=" h-doublescreen px-20 py-20 flex-col flex  lg:flex-row  gap-24 md:h-largescreen top-14 border-black border-2 relative  md:justify-around  justify-centre">
      <div className=" h-1/2 lg:h-96  md:w-1/3 border-black border-2 px-4 font-semibold">
      <span className="text-3xl text-center" >Welcome to <br />ASPARTINX</span>
      <p>
      We are a dedicated team of creative professionals who are passionate about transforming your ideas into reality. With years of industry experience, our experts have honed their skills to perfection. Whether you're a business owner, content creator, or an individual looking to enhance your online visibility, we're here to cater to your unique needs.

      </p>
      </div>
      <div className=" h-1/2 md:h-1/2  md:w-1/2 border-black border-2 ">
        <div className=" ">
          <img src="" alt="" />
        </div>
        <div className=" ">
          <img src="" alt="" />
        </div>
        <div className=" ">
          <img src="" alt="" />
        </div>

      </div>
    </div> 
    <div className="h-screen">

    </div>
    </>
  );
};

export default About;
