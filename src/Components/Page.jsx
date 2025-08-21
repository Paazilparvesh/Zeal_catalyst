import React from "react";
import Navbar from "/src/Components/Navbar.jsx";
import Hero from "../Components/Hero";
import Hero2 from "../Components/Hero2";
import Hero3 from "../Components/Hero3";
import Hero4 from "../Components/Hero4";
import Hero5 from "../Components/Hero5";
import Hero6 from "../Components/Hero6";
import TestimonialSlider from "/src/Components/Test.jsx";

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <Hero2 />
      <Hero3 />
      <Hero4 />
      <Hero5 />
      <Hero6 />
      <TestimonialSlider />
    </>
  );
}
