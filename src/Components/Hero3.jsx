import React from "react";
import heroImage from "/src/assets/sphere.png"; // replace with your uploaded image path

const AIWorkEducation = () => {
  return (
    <section className="bg-[#E8E8FD]  py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img
            src={heroImage}
            alt="AI abstract"
            className="size-full scale-125 mt-6 object-contain"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 md:pl-12 text-center md:text-left">
          <h2 className="text-blue-600 font-semibold text-xl md:text-3xl mb-15">
            AI & The Future of Work & Education
          </h2>
          <p className="text-blue-600 text-base md:text-xl leading-relaxed">
            Artificial Intelligence is transforming both workplaces and
            classrooms. In this session, participants will explore how AI is
            reshaping industries, creating new career paths, and redefining
            teaching and learning methods. We discuss the skills of tomorrow,
            the role of AI in decision-making, and how to adapt to an
            ever-changing landscape.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AIWorkEducation;
