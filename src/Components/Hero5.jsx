import React from "react";
import abstractImage from "/src/assets/glass.png"; // replace with your image path

const FutureSkillsSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center bg-[#ADB0F5] p-6 md:p-16">
      {/* Left Image */}
      <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
        <img
          src={abstractImage}
          alt="Abstract Design"
          className="w-full h-auto scale-125 object-cover"
        />
      </div>

      {/* Right Text */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-white text-2xl md:text-4xl font-semibold mb-12">
          Future Skills for Students & Professionals
        </h2>
        <p className="text-white text-base md:text-xl leading-relaxed">
          As AI automates routine tasks, the value of human creativity,
          critical thinking, and problem-solving becomes even greater. This
          session equips participants with insights on future-ready skills —
          from digital literacy and AI awareness to adaptability and innovation
          — to help them succeed in the AI-driven world.
        </p>
      </div>
    </section>
  );
};

export default FutureSkillsSection;
