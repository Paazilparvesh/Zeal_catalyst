import React, { useState, useEffect, useRef } from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Routes,
  Route,
} from "react-router-dom";
import logo from "/src/assets/logo.png"; // Adjust the path as necessary

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
        <img src={logo} alt="" />

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
            {/* <li>
              <NavLink to="/" className={getNavLinkClass}>
                Home
              </NavLink>
            </li> */}
            {/* <li>
              <NavLink to="/course" className={getNavLinkClass}>
                Courses
              </NavLink>
            </li> */}
            <li>
              <NavLink to="/" className={getNavLinkClass}>
                AI Product
              </NavLink>
            </li>
            <li>
              <NavLink to="/assessment" className={getNavLinkClass}>
                Zeal Assessment
              </NavLink>
            </li>
            <li>
              <NavLink to="/lms" className={getNavLinkClass}>
                Zeal LMS
              </NavLink>
            </li>
            {/* Dropdown Menu Item */}
            {/* <li
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
                    to="/"
                    className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    AI Product
                  </NavLink>
                  <NavLink
                    to="/assessment"
                    className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Zeal Assessment
                  </NavLink>
                  <NavLink
                    to="/lms"
                    className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Zeal LMS
                  </NavLink>
                </div>
              </div>
            </li> */}

            {/* <li>
              <NavLink to="/about" className={getNavLinkClass}>
                About Us
              </NavLink>
            </li> */}
            {/* <li>
              <NavLink to="/contact" className={getNavLinkClass}>
                Contact
              </NavLink>
            </li> */}
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

// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import logo from "/src/assets/logo.png"; // Adjust the path as necessary

// export default function Navbar() {
//   const navigate = useNavigate();

//   const handleLoginClick = () => {
//     navigate("/login");
//   };

//   return (
//     <div className="navbar navbar-expand-lg py-3 px-0 px-lg-5 px-md-5 vietnam">
//       <div className="container ">
//         <div className="navbar-brand">
//           <img src={logo} alt="Logo" width="80%" />
//         </div>

//         {/* <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarCollapse"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button> */}

//         <div className="d-flex align-items-end">
//           <button className="btn btn-primary px-3 get_in_touch_btn me-3 d-lg-none">
//             Login
//           </button>
//           <button
//             className="navbar-toggler me-0"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarCollapse"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//         </div>

//         <div
//           className="collapse navbar-collapse justify-content-start "
//           // id="navbarCollapse"
//         >
//           <ul className="navbar-nav mb-2 mb-lg-0">
//             <li className="nav-item px-3">
//               <Link
//                 to="/"
//                 className={({ isActive }) =>
//                   isActive ? "nav-link active-link" : "nav-link text-black"
//                 }
//               >
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item px-3">
//               <a
//                 href="https://zealcatalyst.com/#/explorecourses"
//                 className={({ isActive }) =>
//                   isActive ? "nav-link active-link" : "nav-link text-black"
//                 }
//               >
//                 Courses
//               </a>
//             </li>
//             <li className="nav-item px-3">
//               <a
//                 href="https://zealcatalyst.com/#/about"
//                 className={({ isActive }) =>
//                   isActive ? "nav-link active-link" : "nav-link text-black"
//                 }
//               >
//                 About Us
//               </a>
//             </li>
//             <li className="nav-item px-3">
//               <a
//                 href="https://zealcatalyst.com/#/contact"
//                 className={({ isActive }) =>
//                   isActive ? "nav-link active-link" : "nav-link text-black"
//                 }
//               >
//                 Contact
//               </a>
//             </li>
//           </ul>
//         </div>
//         <button
//           className="btn btn-primary px-3  d-none d-lg-block"
//           onClick={handleLoginClick}
//         >
//           Login
//         </button>
//       </div>
//     </div>
//   );
// };
