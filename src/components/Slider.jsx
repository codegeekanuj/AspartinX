import React from "react";
import { sliderItem } from "../Data/data";
import Marquee from "react-fast-marquee";

const Slider = () => {
  return (
   <Marquee play={true} pauseOnClick={true} direction="left" speed={60} className="w-[94%] mx-auto">
    <div className=" py-2   flex">
          {sliderItem.map((item) => {
            return (
              <img
              src={item.img}
              key={item.img}
              className=" w-16 h-16 md:w-20 md:h-24 object-contain ml-8 md:ml-32"
              />
              );
            })}
    </div>
    </Marquee>
             
  );
};

export default Slider;
