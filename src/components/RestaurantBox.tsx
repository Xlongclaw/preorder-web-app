import React from "react";
import { motion } from "framer-motion";

const RestaurantBox: React.FC = () => {
  return <motion.div whileHover={{scale:1.1,transition:{type:"spring",stiffness:150}}} className=" w-[23rem] flex flex-col shadow3 flex-shrink-0 cursor-pointer relative">
    <div className="overflow-hidden flex items-center justify-center w-full h-[20rem] relative">
        <img className="" src="images/burger.jpg" alt="" />
    <img className="w-[4rem] bg-white p-5 absolute top-4 right-0" src="images/heart-black.png" alt="" />
    </div>
    <div className=" p-6">
        <h3 className="text-customorange">Continental,Pan-Asian,Indian</h3>
        <h1 className=" text-2xl font-bold playfair-font tracking-wider">CAMPUS CAFE</h1>
        <h4 className="text-xs tracking-wider">NIT Jalandhar, Punjab</h4>
        <div>
            
        </div>
    </div>
  </motion.div>;
};

export default RestaurantBox;
