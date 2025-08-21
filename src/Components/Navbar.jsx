import React, { useState, useEffect, useRef } from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Routes,
  Route,
} from "react-router-dom";

// Simple Chevron Down Icon for the dropdown
const ChevronDownIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`h-5 w-5 ml-1 transition-transform duration-300 ${className}`}
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

// The Navbar Component
function Navbar() {
  // State for the mobile menu (hamburger menu)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // State for the services dropdown
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Function to determine NavLink class for active state
  const getNavLinkClass = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
      : "text-black hover:text-blue-500 transition-colors duration-300";

  // Close dropdown if clicking outside of it
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <nav className="bg-white shadow-sm py-3 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-blue-600">
          LOGO
        </a>

        {/* Mobile Menu Toggler & Login Button */}
        <div className="flex items-center lg:hidden">
          <button className="bg-blue-600 text-white px-3 py-2 rounded-md text-sm font-medium mr-3 hover:bg-blue-700 transition-colors">
            Login
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            aria-controls="mobile-menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {/* Icon for hamburger menu */}
            <svg
              className="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  !isMobileMenuOpen
                    ? "M4 6h16M4 12h16m-7 6h7"
                    : "M6 18L18 6M6 6l12 12"
                }
              />
            </svg>
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className={`hidden lg:flex lg:items-center lg:space-x-4`}>
          <ul className="flex items-center space-x-5">
            <li>
              <NavLink to="/" className={getNavLinkClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/course" className={getNavLinkClass}>
                Courses
              </NavLink>
            </li>

            {/* Dropdown Menu Item */}
            <li
              className="relative"
              ref={dropdownRef}
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center text-black hover:text-blue-500 transition-colors duration-300 focus:outline-none"
              >
                Services
                <ChevronDownIcon
                  className={isDropdownOpen ? "rotate-180" : ""}
                />
              </button>
              <div
                className={`absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition-all duration-300 ease-in-out
                    ${
                      isDropdownOpen
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-95 pointer-events-none"
                    }`}
              >
                <div className="py-1" role="none">
                  <NavLink
                    to="/services/web-dev"
                    className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Web Development
                  </NavLink>
                  <NavLink
                    to="/services/mobile-app"
                    className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Mobile App Dev
                  </NavLink>
                  <NavLink
                    to="/services/ui-ux"
                    className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    UI/UX Design
                  </NavLink>
                  <NavLink
                    to="/services/digital-marketing"
                    className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Digital Marketing
                  </NavLink>
                  <NavLink
                    to="/services/seo"
                    className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    SEO Services
                  </NavLink>
                  <NavLink
                    to="/services/consulting"
                    className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    IT Consulting
                  </NavLink>
                </div>
              </div>
            </li>

            <li>
              <NavLink to="/about" className={getNavLinkClass}>
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={getNavLinkClass}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Desktop Login Button */}
        <div className="hidden lg:block ml-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
            Login
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${isMobileMenuOpen ? "block" : "hidden"} lg:hidden`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md text-base font-medium ${
                isActive
                  ? "bg-blue-100 text-blue-700"
                  : "text-gray-700 hover:bg-gray-50"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/course"
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md text-base font-medium ${
                isActive
                  ? "bg-blue-100 text-blue-700"
                  : "text-gray-700 hover:bg-gray-50"
              }`
            }
          >
            Courses
          </NavLink>
          {/* You can add a simplified dropdown/accordion for mobile if needed */}
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md text-base font-medium ${
                isActive
                  ? "bg-blue-100 text-blue-700"
                  : "text-gray-700 hover:bg-gray-50"
              }`
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md text-base font-medium ${
                isActive
                  ? "bg-blue-100 text-blue-700"
                  : "text-gray-700 hover:bg-gray-50"
              }`
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md text-base font-medium ${
                isActive
                  ? "bg-blue-100 text-blue-700"
                  : "text-gray-700 hover:bg-gray-50"
              }`
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
