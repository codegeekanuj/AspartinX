import React from "react";
import { AiFillInstagram, AiFillLinkedin, AiFillMail, AiOutlineMail, AiOutlineTwitter, AiOutlineWhatsApp } from "react-icons/ai";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
    {/* Hero Section  */}
      <section className=" flex justify-center items-center  ">
        <div className=" md:mt-12 px-6 md:px-12 py-14 mx-auto flex max-md:flex-col-reverse lg:items-center lg:gap-12">
          <div className="max-md:mt-4 lg:w-1/2 ">
            <h1 className="mt-3 text-2xl font-bold text-black dark:text-white md:text-4xl">
            Discover AspartinX
            </h1>
            <p className="mt-4 md:w-[80%] text-slate-700 dark:text-gray-400 ">
            At AspartinX, we are more than just an agency – we are your dedicated partner in turning ideas into reality. With a passion for innovation and a commitment to excellence, we provide a comprehensive suite of services in development, editing, and marketing. Our journey began with a simple idea: to empower businesses and individuals to thrive in the digital landscape.
            </p>

            <div className="flex items-center mt-6 gap-x-3 max-md:justify-evenly">
              <Link to={"/contact"}>
                <button className=" px-5 py-3 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
                  Contact Us
                </button>
              </Link>
              <Link to={"/services"}>
                <button className=" px-5 py-3 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
                  Explore More
                </button>
              </Link>
            </div>
          </div>

          <div className="relative w-full mt-8 lg:w-1/2 lg:mt-0">
            <img
              className=" w-full lg:h-[32rem] h-80 md:h-96 rounded-lg object-cover "
              src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
              alt=""
            />
          </div>
        </div>
      </section>
      {/* Team Section  */}
      
  <section className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
      <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          <h2 className="mb-4 text-4xl max-md:text-3xl tracking-tight font-bold text-gray-900 dark:text-white">Our Team</h2>
          <p className="font-medium text-gray-700 sm:text-lg dark:text-gray-400">Discover the skilled individuals who make AspartinX thrive. Our team is a blend of creativity, expertise, and dedication, working together to bring your ideas to life.</p>
      </div> 
      <div className="flex justify-around py-6 max-md:flex-col max-md:gap-16">
          <div className="text-center  dark:text-slate-400">
              <img className="mx-auto mb-4 w-36 h-36 rounded-full" src="https://media.licdn.com/dms/image/D4D03AQG8RSD4paYgzg/profile-displayphoto-shrink_400_400/0/1685192925719?e=1699488000&v=beta&t=qpvj4y04amDUCkWmBbtgo_y77rZhkZdSn5zsNQjnTow" alt="Profile Image"/>
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Shiva Yadav
              </h3>
              <p>Founder</p>
              <div className="flex justify-center mt-4 space-x-4 dark:text-slate-400">
              <a href='https://www.instagram.com/shivay1256'><AiFillInstagram size={24}/></a>
              <a href='https://www.linkedin.com/shivaydv'><AiFillLinkedin size={24}/></a>
              <a href='https://twitter.com/shivay1256'><AiOutlineTwitter size={24}/></a>
              <a href='mailto: shivaydv1256@gmail.com'><AiOutlineMail size={24}/></a>
              </div>
          </div>
          
          <div className="text-center  dark:text-slate-400">
              <img className="mx-auto mb-4 w-36 h-36 rounded-full" src="https://media.licdn.com/dms/image/D4D03AQFZxo3TB_QGfg/profile-displayphoto-shrink_400_400/0/1687939490042?e=1699488000&v=beta&t=9m5LHwK3XNXbjDcLu0vi4Y-NvNhGY9fdLESZ1SYy15I" alt="Profile Image"/>
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Anuj Tripathi
              </h3>
              <p>Founder</p>
              <div className="flex justify-center mt-4 space-x-4 dark:text-slate-400">
              <a href='https://www.instagram.com/anuj_tripathiii/'><AiFillInstagram size={24}/></a>
              <a href='https://www.linkedin.com/in/anuj-tripathi-4311651b6/'><AiFillLinkedin size={24}/></a>
              <a href='https://twitter.com/'><AiOutlineTwitter size={24}/></a>
              <a href='mailto: atripathi1253@gmail.com'><AiOutlineMail size={24}/></a>
              </div>
          </div>
   
      </div>  
  </section>

    </>
  );
};

export default About;
