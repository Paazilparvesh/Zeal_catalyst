import React from "react";
import image1 from "/src/assets/Group 1686551832 (2).png";

// --- Reusable Components ---

// Pill-shaped tag component
const Tag = ({ children }) => (
  <div className="border border-gray-400 capitalize flex justify-center rounded-full py-2 px-5 text-sm text-gray-600 bg-white/80 backdrop-blur-sm">
    {children}
  </div>
);

// Arrow icon for the "Learn more" link
const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13 7l5 5m0 0l-5 5m5-5H6"
    />
  </svg>
);

// --- Main Hero Section Component ---
export default function App() {
  return (
    <div className="relative min-h-screen w-full bg-gray-50 font-sans overflow-hidden">
      <div className="flex items-center justify-center min-h-screen p-4">
        {/* --- Corner Elements for Desktop --- */}

        {/* Top-Left Tags */}
        <div className="hidden md:flex flex-col space-y-3 absolute top-8 left-8 lg:top-12 lg:left-12">
          <Tag>interesting</Tag>
          <Tag>trends of Ai</Tag>
        </div>

        {/* Top-Right Tags */}
        <div className="hidden md:flex flex-col space-y-3 absolute top-8 right-8 lg:top-12 lg:right-12 text-right">
          <Tag>The future</Tag>
          <Tag>belongs to AI</Tag>
        </div>

        {/* Bottom-Left Text */}
        <div className="hidden md:block absolute bottom-8 left-8 lg:bottom-12 lg:left-12 max-w-xs">
          <p className="text-gray-600">
            vanda Ai an artificial intelligence platform that allows developers
            to create high-performance intelligent systems
          </p>
        </div>

        {/* Bottom-Right Link */}
        <div className="hidden md:block absolute bottom-8 right-8 lg:bottom-12 lg:right-12">
          <a
            href="#"
            className="group flex items-center text-gray-800 text-2xl font-medium"
          >
            Learn more
            <ArrowIcon />
          </a>
        </div>

        {/* --- Centered Content for All Screens --- */}
        <div className="relative text-center w-full">
          {/* Main Heading Text */}
          <h1 className="text-6xl sm:text-8xl lg:text-9xl font-medium text-gray-800 tracking-tighter md:tracking-widest break-words">
            ZEAL ASSESSMENT
          </h1>

          {/* Abstract Image Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src={image1}
              alt="Abstract AI graphic"
              className="w-40 h-40 sm:w-52 sm:h-52 object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/300x300/e2e8f0/333333?text=Image";
              }}
            />
          </div>

          {/* --- Stacked Content for Mobile --- */}
          <div className="md:hidden mt-48 space-y-8">
            <p className="text-gray-600 max-w-md mx-auto">
              vanda Ai an artificial intelligence platform that allows
              developers to create high-performance intelligent systems
            </p>
            <a
              href="#"
              className="group inline-flex items-center text-gray-800 font-medium"
            >
              Learn more
              <ArrowIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
