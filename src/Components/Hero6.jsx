import React from "react";
import hashtagImage from "/src/assets/hash.png";

const EverydayInnovation = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-[#4F46E5] pt-10 pl-20">
      {/* Left Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
        <h2 className="text-white text-xl md:text-3xl font-semibold mb-12">
          AI for Everyday Innovation
        </h2>
        <p className="text-white text-base md:text-2xl leading-relaxed">
          AI isn’t just for tech companies — it’s everywhere. From healthcare
          and finance to education and entertainment, AI is powering simple,
          everyday innovations that make life easier and smarter. This session
          highlights real-world applications of AI and how individuals and
          organizations can embrace it to drive creativity and growth.
        </p>
      </div>

      {/* Right Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={hashtagImage}
          alt="AI Innovation Hashtag"
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default EverydayInnovation;
