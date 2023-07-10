import React from "react";
import Button from "./Button";

const AboutUsSection: React.FC = () => {
  return (
    <div className="flex h-[35rem] my-[13rem]">
      <div className="w-1/2 overflow-hidden flex items-end relative top-[-5rem] shadow5">
        <img className="w-full" src="images/juice.jpg" alt="" />
      </div>
      <div className="w-1/2 bg-zinc-800 relative top-[5rem] flex gap-8 justify-end items-center shadow5">
        <div className="flex flex-col justify-start items-end max-w-[30rem]">
          <h3 className="text-customorange text-4xl font1">Welcome</h3>
          <h1 className="text-white text-5xl tracking-wider font-semibold">
            About Us
          </h1>
          <p className="text-end text-white mt-10">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error,
            repudiandae. Sint molestiae at fugit, ducimus repellendus
            voluptates.
          </p>
          <p className="text-end text-white mt-4 mb-10">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error,
            repudiandae. Sint molestiae at fugit.
          </p>
          <Button variant="FILLED">Explore Restaurants</Button>
        </div>
        <div className="bg-white mt-3 h-[1px] w-[5rem]" />
      </div>
    </div>
  );
};

export default AboutUsSection;
