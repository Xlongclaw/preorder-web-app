import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Dot from "./Dot";
import SliderData from "../constants/ImageSlider";
import {motion} from "framer-motion"

const HeroSlider: React.FC = () => {
  const [selected, setSelected] = useState(0);
  return (
    <div className="flex relative">
      <div className="flex justify-center h-[100vh] items-start overflow-hidden w-[40vw]">
        {
          SliderData.map((image)=>
          <motion.img animate={{x:`${selected*-40+60}vw`}} transition={{type:"spring",stiffness:30}} className="" src={image.imgpath} alt="" />
          )
        }
      </div>
      <div className="w-24 flex flex-col justify-center items-center gap-4">
        {SliderData.map((image, i) => (
          <Dot selected={selected === i} />
        ))}
      </div>
      <div className=" absolute bottom-0 right-0 flex">
        <button
          onClick={() => {
            setSelected((selected) =>
              selected === 0 ? selected : selected - 1
            );
          }}
          className="bg-white w-24 h-24 flex justify-center items-center"
        >
          <FiChevronLeft size={32} />
        </button>
        <button
         onClick={() => {
          setSelected((selected) =>
            selected === SliderData.length-1 ? selected : selected + 1
          );
        }}
          className="bg-zinc-800 w-24 h-324 flex justify-center items-center"
        >
          <FiChevronRight size={32} color="#FF4D00" />
        </button>
      </div>
    </div>
  );
};

export default HeroSlider;
