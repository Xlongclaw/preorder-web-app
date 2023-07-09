import React from "react";
import HeroText from "./HeroText";
import HeroSlider from "./HeroSlider";
import SocialIcons from "./SocialIcons";

const HeroSection: React.FC = () => {
  return (
    <div className="w-full flex justify-between">
      <div className="flex flex-col gap-48">
        <HeroText />
        <SocialIcons/>
      </div>
      <HeroSlider />
    </div>
  );
};

export default HeroSection;
