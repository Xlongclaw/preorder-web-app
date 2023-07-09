import React from "react";
import Button from "./Button";
import {FiChevronRight} from "react-icons/fi"

const HeroText: React.FC = () => {
  return (
    <div className="flex mt-64 gap-4">
    <div className="h-[1px] w-28 mt-4 bg-black"></div>
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-2">    
          <h4 className="font1 text-3xl font-medium">Discover your taste</h4>
        </div>

        <h1 className="text-6xl font-semibold max-w-[40rem] leading-[4.5rem]">
          Eat healthy and Natural Food
        </h1>
        <div className="">
          <Button variant="FILLED">Discover Restaurants<FiChevronRight size={24}/></Button>
          
        </div>
      </div>
    </div>
  );
};

export default HeroText;
