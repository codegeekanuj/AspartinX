import React from "react";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineTwitter,
  AiOutlineWhatsApp,
  
} from "react-icons/ai";
import {MdCall,MdMail} from "react-icons/md"


const Contact = () => {
  return (
    <section className=" flex justify-center items-center md:mb-8 ">
      <div className=" md:mt-16 md:w-[90%] px-6  py-14 mx-auto flex max-md:flex-col ">
        <div className="flex flex-col justify-center w-full py-8  md:w-2/3">
          <h1 className="text-2xl font-semibold text-gray-800  dark:text-white md:text-3xl">
            Hire Us.
          </h1>
          <p className="mt-4 text-gray-700 dark:text-gray-400">
            Ask us everything and we would love to hear from you
          </p>
          <div className="flex flex-col dark:text-slate-400 ">
            <div className="flex justify-left items-center gap-4 mt-4 ">
                <MdCall size={28}/>
                <p>+91 72688-54798, +91 83035-57404</p>
              </div>
              <div className="flex justify-left items-center gap-4 mt-4">
                <MdMail size={28}/>
                <p>business.aspartinx@gmail.com</p>
              </div>
          <div className="mt-6 ">
            <h3 className="font-medium text-gray-600 dark:text-gray-300 ">
              Follow us
            </h3>
            <div className="flex gap-6 py-4 dark:text-slate-400">
              <a href="https://www.instagram.com/aspartinx">
                <AiFillInstagram size={28} />
              </a>
              <a href="https://www.linkedin.com/company/aspartinx">
                <AiFillLinkedin size={28} />
              </a>
              <a href="https://twitter.com/aspartinx">
                <AiOutlineTwitter size={28} />
              </a>
              <a href="#">
                <AiOutlineWhatsApp size={28} />
              </a>
            </div>
            
              
            
            </div>
          </div>
        </div>

        <div className=" md:w-1/2 bg-white flex flex-col py-8 rounded-xl shadow-xl px-6 w-full ">
          <div className=" mb-4">
            <label  className="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="w-full bg-white rounded border border-gray-400   text-base outline-none text-gray-700 py-1 px-3 leading-8"
            />
          </div>
          <div className="relative mb-4">
            <label className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="w-full bg-white rounded border border-gray-400   text-base outline-none text-gray-700 py-1 px-3 leading-8"
            />
          </div>
          <div className="relative mb-4">
            <label  className="leading-7 text-sm text-gray-600">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-white rounded border border-gray-400  h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 "
            ></textarea>
          </div>
          <button className="text-white bg-indigo-500  py-2 focus:outline-none hover:bg-indigo-700 rounded-md font-semibold text-lg">
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
