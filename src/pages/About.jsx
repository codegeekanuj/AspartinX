import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  return (
    <>
      <div className=" h-screen  top-14 relative flex md:flex-row flex-col gap-16">
        <div className=" md:w-1/2 w-full h-full flex flex-col item-center justify-center text-center gap-8 px-5 py-7">
          <span className="  text-black-600  text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Welcome to ASPARTINX - Your Partner in Website Services and Video
            Editing
          </span>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            We are a dedicated team of creative professionals who are passionate
            about transforming your ideas into reality. With years of industry
            experience, our experts have honed their skills to perfection.
            Whether you're a business owner, content creator, or an individual
            looking to enhance your online visibility, we're here to cater to
            your unique needs.
          </p>
          <span className="flex w-full justify-center gap-7">
            <button
              type="button"
              className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
            >
              Websites
            </button>
            <button className="inline-flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600">
              {" "}
              Videos
            </button>
          </span>
        </div>
        <div className=" h-full  md:w-1/2 flex flex-col  md:flex-row px-6 gap-4">
          <div className=" md:w-1/2 h-fit md:h-full flex flex-col justify-center gap-14 ">
            <div className="w-full  border-black border-2 md:h-1/3 h-52  "></div>
            <div className="w-full border-black  border-2 md:h-1/3 h-52 "></div>
          </div>
          <div className="md:w-1/2   h-full flex justify-center items-center ">
            <div className="w-full border-black border-2 md:h-1/3 h-52   "></div>
          </div>
        </div>
      </div>
      <div className="h-screen  flex flex-col gap-3 pt-9 ">
        <div className="h-28 flex items-center justify-center ">
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 "
          >
            Our Team
          </button>
        </div>
        <div className=" h-full  flex px-32 py-2 gap-48">
          <div className="h-full w-1/2  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col gap-4 px-6 py-4">
            <div className="border-2 border-black h-1/2 w-full">
              <img src="" alt="" />
            </div>
            <div className="h-1/2 w-full flex flex-col gap-2 ">
              <div className=" flex justify-between">
                <h1 className=" mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <span className="font-semibold">Anuj</span> <br /> Founder
                </h1>
                <div className=" text-3xl h-full flex items-center gap-4 justify-center dark:text-white">
                  <a href="">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                  <a href="">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href="">
                    <i className="fa-regular fa-envelope"></i>
                  </a>
                </div>
              </div>
              <div className=" h-full w-full mb-3 font-normal text-gray-700 dark:text-gray-400">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Voluptatibus sequi, facere asperiores temporibus fuga rem
                  itaque consectetur delectus beatae iste numquam, totam amet
                  quidem eaque in praesentium ullam,
                </p>
              </div>
            </div>
          </div>
          <div className="h-full  w-1/2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col gap-4 px-6 py-4">
            <div className="border-2 border-black h-1/2 w-full">
              <img src="" alt="" />
            </div>
            <div className=" h-1/2 w-full flex flex-col gap-2">
              <div className=" flex justify-between">
                <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <span className="font-semibold">Shiva</span> <br /> Founder
                </h1>
                <div className=" text-3xl h-full flex items-center gap-4 justify-center dark:text-white">
                  <a href="">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                  <a href="">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href="">
                    <i className="fa-regular fa-envelope"></i>
                  </a>
                </div>
              </div>
              <div className=" h-full w-full mb-3 font-normal text-gray-700 dark:text-gray-400">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Voluptatibus sequi, facere asperiores temporibus fuga rem
                  itaque consectetur delectus beatae iste numquam, totam amet
                  quidem eaque in praesentium ullam,
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
