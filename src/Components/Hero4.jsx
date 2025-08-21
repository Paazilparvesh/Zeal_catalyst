import React from "react";
import smartLearningImg from "/src/assets/Subtract (1).png"; // replace with your image path

const SmartLearning = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-8 px-6 md:px-12">
        {/* Left Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-blue-600 font-semibold text-lg md:text-3xl mb-12">
            Smart Learning with AI
          </h2>
          <p className="text-blue-600 text-base md:text-xl leading-relaxed">
            Education is no longer “one-size-fits-all.” This session
            demonstrates how AI can personalize learning experiences, adapt
            lessons to individual strengths, and make classrooms more
            interactive and inclusive. Participants will see practical tools and
            case studies of AI-driven learning platforms in action.
          </p>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={smartLearningImg}
            alt="Smart Learning with AI"
            className="w-full max-w-md rounded-3xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default SmartLearning;
