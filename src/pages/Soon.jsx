import React from 'react'
import { Link } from 'react-router-dom'

const Soon = () => {
  return (
    <section className=" flex justify-center items-center  ">
        <div className=" md:mt-12 px-6 md:px-12 py-14 mx-auto flex  max-md:flex-col-reverse lg:items-center lg:gap-12">
          <div className="max-md:mt-10 flex-col flex gap-8 max-md:items-center lg:w-1/2  ">
            <h1 className=" text-2xl  font-semibold text-black dark:text-white md:text-4xl">
                Coming Soon
            </h1>
            <p className=' text-slate-600 dark:text-gray-400'>
            Something amazing is on its way! We're working diligently to unveil our website. Stay tuned for updates, and get ready to explore our world of creativity and innovation.
            </p>
              <Link to={"/"}>
                <button className="  px-5 py-3 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
                  Back To Home
                </button>
              </Link>
            </div>

          <div className="relative w-full mt-8 lg:w-1/2 lg:mt-0">
            <img
              className=" w-full lg:h-[32rem] h-80 md:h-96 rounded-lg object-cover"
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt=""
            />
          </div>
        </div>
      </section>
  )
}

export default Soon