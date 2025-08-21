import React from "react";
import cardimage from "/src/assets/Rectangle 161124229.png";
import cardimage2 from "/src/assets/Rectangle 161124229 (1).png";
import cardimage3 from "/src/assets/Subtract (2).png";
// --- Reusable Icon Components ---

// Arrow icon for the "Learn more" button
const ExternalLinkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
  </svg>
);

// --- Main Section Components ---

// 1. Left Card: Image and Numbered List
const InfoListCard = () => {
  const listItems = [
    { number: "01", text: "School Students" },
    { number: "02", text: "Colleges student" },
    { number: "03", text: "Individuals" },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 h-full">
      <div className="p-4">
        <img
          src={cardimage3}
          alt="Teacher with students in a classroom"
          className="w-full h-auto object-cover rounded-2xl"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://placehold.co/600x400/e2e8f0/333333?text=Classroom";
          }}
        />
      </div>
      <div className="p-6 pt-2">
        <ul>
          {listItems.map((item, index) => (
            <li
              key={item.number}
              className={`flex items-center justify-between py-3 ${
                index < listItems.length - 1 ? "border-b border-gray-200" : ""
              }`}
            >
              <span className="text-lg font-bold text-gray-400 mr-6">
                {item.number}
              </span>
              <span className="text-lg text-blue-600 font-medium">
                {item.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// 2. Center Card: Main Text and CTA Button
const CallToActionCard = () => (
  <div className="bg-violet-100 rounded-2xl p-8 flex flex-col justify-between gap-26 h-full">
    <div className=" w-full flex justify-end items-center ">
      <button className="group inline-flex items-center bg-white text-gray-700 font-semibold py-2 px-4 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 transition-colors duration-300">
        Learn more
        <ExternalLinkIcon />
      </button>
    </div>
    <div className="flex-grow">
      <h2 className="text-4xl font-medium text-gray-800 leading-tight">
        we have created the most advanced AI platform in the world
      </h2>
    </div>
  </div>
);

// 3. Right Cards: Vision and Mission
const VisionMissionCard = ({ title, imageUrl, altText }) => (
  <div className="bg-white rounded-2xl shadow-md p-6 border border-blue-200 flex items-center space-x-6 h-full">
    <img
      src={imageUrl}
      alt={altText}
      className="w-24 h-24 object-cover rounded-xl"
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = "https://placehold.co/100x100/e0e7ff/333333?text=Image";
      }}
    />
    <h3 className="text-3xl font-bold text-blue-600 capitalize">{title}</h3>
  </div>
);

// --- Main App Component ---
export default function App() {
  return (
    <div className="min-h-screen  flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-1">
            <InfoListCard />
          </div>

          {/* Center Column */}
          <div className="lg:col-span-1">
            <CallToActionCard />
          </div>

          {/* Right Column */}
          <div className="lg:col-span-1 flex flex-col gap-8">
            <VisionMissionCard
              title="Vision"
              imageUrl={cardimage}
              altText="Abstract blue wave"
            />
            <VisionMissionCard
              title="mission"
              imageUrl={cardimage2}
              altText="Abstract dark crystal"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
