import React from "react";
import image1 from "/src/assets/8.png"
import image2 from "/src/assets/9.png"
import image3 from "/src/assets/18.png"

// Reusable Arrow Icon Component
const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-blue-600 group-hover:translate-x-2 transition-transform duration-300 ease-in-out"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    />
  </svg>
);

// Reusable InfoCard Component
const InfoCard = ({ imageUrl, title, description }) => {
  return (
    <div className="group bg-gray-50 rounded-2xl p-6 transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-2 cursor-pointer">
      {/* Card Image */}
      <div className="mb-4 overflow-hidden rounded-lg">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-contain transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://placehold.co/400x300/f3f4f6/333333?text=Image+Error";
          }}
        />
      </div>

      {/* Card Title and Arrow */}
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-3xl font-bold text-blue-600 capitalize">{title}</h3>
        <ArrowIcon />
      </div>

      {/* Card Description */}
      <p className="text-gray-600 text-lg">{description}</p>
    </div>
  );
};

// Main CareerSection Component
const CareerSection = () => {
  const cardData = [
    {
      imageUrl: image1,
      title: "school",
      description: "Nurture curiosity and build strong learning foundations..",
    },
    {
      imageUrl: image2,
      title: "corporates",
      description: "Empower your workforce with future-ready skills.",
    },
    {
      imageUrl: image3,
      title: "colleges",
      description: "Bridge the gap between academics and the real world.",
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-800 mb-12">
          Ready to reimagine your career?
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardData.map((card, index) => (
            <InfoCard
              key={index}
              imageUrl={card.imageUrl}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default CareerSection;
