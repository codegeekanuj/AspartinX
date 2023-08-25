import React from 'react'
import { Link } from 'react-router-dom'

const GetStarted = () => {
  return (
 
<div className="container my-12 mx-auto md:px-6 ">

  <section className='' >
    <div
      className="relative shadow-2xl max-md:w-[90%] mx-auto rounded-xl overflow-hidden bg-cover bg-no-repeat bg-[50%] bg-[url('https://mdbcdn.b-cdn.net/img/new/slides/006.webp')] h-[30vh] md:h-[60vh]">
      <div
        className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.55)] bg-fixed">
        <div className="flex h-full items-center justify-center ">
          <div className=" text-center text-white md:px-12">
            <h2 className="mb-12 max-md:text-2xl text-4xl font-semibold leading-tight tracking-tight">
            Let's kickstart your journey <br/> with AspartinX!
            </h2>
            <Link to={"/contact"} ><button type="button"
              className="rounded-lg border-2 border-neutral-50 px-4 py-2 ease-in-out duration-100 hover:bg-white/10">
              Get started
            </button></Link>
          </div>
        </div>
      </div>
    </div>
  </section>

</div>

  )
}

export default GetStarted