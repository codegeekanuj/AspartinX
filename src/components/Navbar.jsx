import React, { useEffect, useState } from "react";
import { menuItems } from "../Data/data";
import {MdSunny} from "react-icons/md"
import {HiMoon} from "react-icons/hi"
import {AiOutlineMenu,AiOutlineClose} from "react-icons/ai"
import { Link, NavLink } from "react-router-dom";


const Navbar = () => {

  const [theme, setTheme] = useState("dark");
  const [menu,setMenu] =useState("close")

  useEffect(() => {

    if (theme === "dark") document.body.classList.add("dark");
    else document.body.classList.remove("dark");

  }, [theme]);

  const ToggleTheme =()=>{

    if(theme === "dark") setTheme("light")
    else setTheme("dark")

  }
  const ToggleMenu=()=>{
    if(menu==="open") setMenu("close")
    else setMenu("open")
  }

  return (
   
<header  className=" flex justify-center z-10  ">
  
  <nav  className=" absolute max-w-[1536px] w-full px-6 py-2   items-center flex justify-between dark:text-white">

      <Link  to="/" className="font-bold text-xl py-2 "  >Aspartin X</Link>

      <div className={` font-semibold text-sm z-30
      
      ${menu==="open"?"absolute flex flex-col top-[100%] right-[1rem] max-sm:rounded-lg max-sm:px-4 max-sm:w-[30%] max-sm:py-3 max-sm:bg-darkBg dark:max-sm:bg-lightBg max-sm:text-center dark:max-sm:text-black max-sm:text-white max-sm:space-y-6 ":"hidden"}   

      sm:static sm:flex sm:flex-row  sm:justify-evenly sm:w-1/2 lg:w-2/3 `}>

      {menuItems.map((item)=>{
          return <NavLink  className={ ` ${({isActive})=> isActive ? "active":""} max-sm:border-b max-sm:border-slate-400 sm:rounded-lg p-2 sm:hover:bg-white/50 dark:sm:hover:bg-white/20  ease-in-out duration-100 `} onClick={()=>setMenu("close")} to={item.link} key={item.name}>{item.name}</NavLink>;
        })}

      </div>
      

      <div className="flex  space-x-3   ">

        <label  className="swap swap-rotate">
        <input type="checkbox" onChange={ToggleTheme} />
        <MdSunny size={22} className="swap-off "/>
        <HiMoon size={22} className="swap-on "/>
        </label>
        
        <label className="sm:hidden  swap swap-rotate " >
        <input type="checkbox" onChange={ToggleMenu} />
        <AiOutlineMenu size={22} className="swap-off"/>
        <AiOutlineClose size={22} className="swap-on"/>
        </label>

        

      </div>
  </nav>
  
</header>
  )
};

export default Navbar;
