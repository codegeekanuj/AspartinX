import React, { useEffect, useState } from "react";
import { menuItems } from "../Data/data";
import {MdSunny,MdDarkMode} from "react-icons/md"
import {HiMoon} from "react-icons/hi"
import {AiOutlineMenu,AiOutlineClose} from "react-icons/ai"

const Navbar = () => {

  const [theme, setTheme] = useState("light");
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
   
<header className=" flex justify-center z-10">
  
  <nav className=" absolute max-w-[1536px] w-full px-6 py-2   items-center flex justify-between dark:text-white">

      <a  href="#" className="font-bold text-xl py-2  "  >Aspartin X</a>

      <div className={` font-semibold text-sm   ${menu==="open"?"absolute flex flex-col top-[100%] right-[1rem] max-sm:rounded-lg max-sm:px-4 max-sm:w-[30%] max-sm:py-3 max-sm:bg-darkBg dark:max-sm:bg-lightBg max-sm:text-center dark:max-sm:text-black max-sm:text-white max-sm:space-y-6 ":"hidden"}   sm:static sm:flex sm:flex-row  sm:justify-evenly sm:w-1/2 lg:w-1/3  `}>

        {menuItems.map((item)=>{
          return<a className="max-sm:border-b max-sm:border-slate-400 sm:rounded-lg p-2 sm:hover:purple1  ease-in-out duration-100 " onClick={()=>setMenu("close")} href={item.link} key={item.name}>{item.name}</a>;
        })}

      </div>

      <div className="flex  space-x-3  ">

        <button onClick={ToggleTheme} className="flex items-center p-2 purple1 rounded-full duration-100 ease-in-out">
        {
          theme==="dark"? <MdSunny size={22}/>:<HiMoon size={22}/>
        }
        </button>

        <button className="sm:hidden  flex p-2 rounded-full" onClick={ToggleMenu}>{menu==="close"?<AiOutlineMenu size={22}/>:<AiOutlineClose size={22}/>}</button>

      </div>
  </nav>
  
</header>
  )
};

export default Navbar;
