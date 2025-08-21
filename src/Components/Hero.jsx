import React from "react";
import one from "/src/assets/Intersect.png";
import two from "/src/assets/Intersect (1).png";
import center from "/src/assets/center.png";

const Hero = () => {
  return (
    <div className="w-full flex justify-center my-12 mb-30 px-4">
      <div className="w-full mx-30 relative flex flex-col md:flex-row items-center justify-between bg-[#ADB0F5] rounded-2xl p-6 md:p-8">
        {/* Left Image */}
        <div className="mb-4 md:mb-0 md:mr-6">
          <img
            src={one}
            alt="VR Work"
            className="rounded-2xl max-w-[300px] w-full"
          />
        </div>

        {/* Text */}
        <div className="text-center text-white text-2xl md:text-3xl lg:text-5xl scale-110 font-medium px-3 leading-20 -mt-30 z-20">
          AI & The Future <br /> of Work & <br /> Education
        </div>

        {/* Right Image */}
        <div className="mt-4 md:mt-0 md:ml-6">
          <img
            src={two}
            alt="Student Learning"
            className="rounded-2xl max-w-[300px] w-full"
          />
        </div>

        {/* Bottom Center Icon */}
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-18 z-10 bg-[#ADB0F5] rounded-4xl">
          <img src={center} alt="Atom Icon" className="w-120" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
