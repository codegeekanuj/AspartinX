import React from 'react'
import {AiFillInstagram, AiFillLinkedin, AiOutlineTwitter, AiOutlineWhatsApp} from "react-icons/ai"
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    
    
<main className='w-full min-h-[30vh]  flex max-md:flex-col-reverse dark:text-white justify-between '>
  
  <div className="flex flex-col px-12 sm:py-6 max-sm:items-center max-md:mb-4">
    <h1 className='font-bold text-2xl py-2'><Link to={"/"}>
      AspartinX
    </Link></h1>
    <p className='text-sm dark:text-slate-400'>Empowering Your Business </p>
    <p className='text-sm dark:text-slate-400'>Marketing | Development | Editing</p>
    <div className='flex gap-6  py-4 dark:text-slate-400'>
      <a href='https://www.instagram.com/aspartinx'><AiFillInstagram size={28}/></a>
      <a href='https://www.linkedin.com/company/aspartinx'><AiFillLinkedin size={28}/></a>
      <a href='https://twitter.com/aspartinx'><AiOutlineTwitter size={28}/></a>
      <a href='#'><AiOutlineWhatsApp size={28}/></a>
    </div>
    <p className='text-xs dark:text-slate-400'>© 2023 AspartinX - All Right Reserved</p>
  </div>

  <div className="flex max-sm:flex-col  max-sm:items-center text-center  px-12 py-6 gap-4 sm:gap-16 sm:text-left text-sm">
    <section className=' px-4'>
      <h1 className='font-bold py-2 text-base'>Services</h1>
      <ul className='flex  flex-col gap-1 dark:text-slate-400 '>
        <li><Link to={"/marketing"}>Digital Marketing</Link></li>
        <li><Link to={"/webdev"}>Web Development</Link></li>
        <li><Link to={"/appdev"}>App Development</Link></li>
        <li><Link to={"/editing"}>Video Editing</Link></li>
      </ul>
    </section>
    <section className=' px-4'>
      <h1 className='font-bold py-2 text-base'>Company</h1>
      <ul className='flex  flex-col gap-1 dark:text-slate-400 '>
        <li><Link to={"/about"}>About Us</Link></li>
        <li><Link to={"/contact"}>Contact Us</Link></li>
        <li><Link to={"/privacy-policy"}>Privacy Policy</Link></li>
        {/* <li><Link to={"/terms&condition"}>Terms of Service</Link></li> */}
      </ul>
    </section>
    <section className=' px-4'>
      <h1 className='font-bold py-2 text-base'>Helpful Links</h1>
      <ul className='flex  flex-col gap-1  dark:text-slate-400'>
        <li><Link to={"/pricing"}>Pricing</Link></li>
        <li><Link to={"/portfolio"}>Portfolio</Link></li>
        <li><Link to={"/testimonial"}>Testimonials</Link></li>
        {/* <li><Link to={"/getstarted"}>Let's Get Started</Link></li> */}
      </ul>
    </section>
  </div>
  
    
</main>
  )
}

export default Footer