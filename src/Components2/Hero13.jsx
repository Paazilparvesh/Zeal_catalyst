import React from "react";
import image1 from "/src/assets/Image abstract - 10.png";

// // --- Reusable Text Block Component ---
// const InfoBlock = ({ children, className }) => (
//   <div className={`text-lg text-gray-600 leading-relaxed ${className}`}>
//     {children}
//   </div>
// );

// // --- Main Section Component ---
// export default function App() {
//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 sm:p-8 font-sans">
//       <div className="w-full max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-x-16 gap-y-12 items-center">

//           {/* --- Top-Left Text --- */}
//           <InfoBlock className="lg:text-right">
//             we help colleges bridge the gap between academics and the real world, preparing students to transition smoothly from the classroom to their careers.
//           </InfoBlock>

//           {/* --- Top-Right Text --- */}
//           <InfoBlock>
//             We also place a strong focus on placement readiness.
//           </InfoBlock>

//           {/* --- Bottom-Left Text --- */}
//           <InfoBlock className="lg:text-right">
//             Prepare students for tomorrow. Empower them with the knowledge and skills to succeed beyond academics.
//           </InfoBlock>

//           {/* --- Bottom-Right Text --- */}
//           <InfoBlock>
//             a student community that stands out in the competitive job market.
//           </InfoBlock>

//           {/* --- Central Image (Absolute positioning relative to grid) --- */}
//           {/* This div sits on top of the grid to center the image perfectly */}
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center justify-center">
//             <div className="relative w-64 h-64">
//               {/* Top part of the image */}
//               <div
//                 className="absolute top-0 left-0 w-full h-1/2 bg-cover bg-center"
//                 style={{
//                   backgroundImage: image1,
//                   clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0 100%)' // Angled cut
//                 }}
//               ></div>

//               {/* Bottom part of the image, slightly offset */}
//               <div
//                 className="absolute bottom-0 left-0 w-full h-1/2 bg-cover bg-center"
//                 style={{
//                   backgroundImage: image1,
//                   backgroundPosition: 'bottom', // Use a different part of the image
//                   clipPath: 'polygon(0 10%, 100% 0, 100% 100%, 0 100%)' // Angled cut
//                 }}
//               ></div>

//               {/* "Future starts here" text overlay with blur effect */}
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <div className="bg-white/30 backdrop-blur-md py-2 px-6 rounded-lg">
//                   <span className="text-white text-lg font-semibold tracking-wider">
//                     Future starts here
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* --- Image for Mobile (rendered within the flow) --- */}
//           <div className="lg:hidden flex flex-col items-center justify-center my-8">
//             <div className="relative w-56 h-56">
//                 {/* Simplified image for mobile */}
//                 <img
//                     src="https://images.unsplash.com/photo-1617791160536-595a724029a8?q=80&w=1887&auto.format&fit=crop"
//                     alt="Abstract futuristic graphic"
//                     className="w-full h-full object-cover rounded-2xl shadow-lg"
//                 />
//                 <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-2xl">
//                     <span className="text-white text-lg font-semibold">
//                         Future starts here
//                     </span>
//                 </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

// --- Reusable Content Card Component ---
// This component creates the lavender-colored boxes with rounded corners.
const ContentCard = ({ children, className = "" }) => (
  <div
    className={`bg-violet-200/80 backdrop-blur-sm rounded-3xl p-6 text-violet-900 leading-relaxed shadow-lg ${className}`}
  >
    {children}
  </div>
);

// --- Main Section Component ---
export default function App() {
  return (
    <div className="min-h-screen w-full bg-gray-100 flex items-center justify-center p-4 sm:p-8 font-sans">
      <div className="relative w-full max-w-6xl mx-auto">
        {/* --- Grid Layout for Desktop --- */}
        {/* We use a 3x3 grid and place items in specific cells */}
        <div className="hidden lg:grid grid-cols-3 grid-rows-2 gap-8 items-center">
          {/* Row 1 */}
          <ContentCard className="col-start-1">
            Our corporate learning solutions are carefully designed to do more
            than train employees. We focus on closing skill gaps, enhancing
            collaboration, and boosting overall productivity.
          </ContentCard>
          <div className="col-start-2"></div> {/* Empty cell for spacing */}
          <ContentCard className="col-start-3">
            customized training modules tailored to your industry and business
            goals.
          </ContentCard>
          {/* Row 2 */}
          <ContentCard className="col-start-1">
            we help organizations empower their workforce with future-ready
            skills that keep them ahead of the curve.
          </ContentCard>
          <div className="col-start-2"></div> {/* Empty cell for spacing */}
          <ContentCard className="col-start-3">
            practical applications through case studies, simulations, and
            hands-on projects, ensuring that employees can apply what they learn
            directly in the workplace.
          </ContentCard>
        </div>

        {/* --- Central Image (Absolute positioning) --- */}
        {/* This is placed on top of the grid for perfect centering */}
        <div className="hidden lg:flex absolute inset-0 items-center justify-center">
          <div className="relative w-72 h-48 flex items-center justify-center">
            <img
              src={image1}
              alt="Abstract swirling colors"
              className="absolute w-full h-full scale-125 object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/300x200/e9d5ff/333333?text=Image";
              }}
            />
            <div className="relative bg-white/30 backdrop-blur-md py-3 px-8 rounded-2xl">
              <span className="text-white text-lg font-semibold tracking-wide">
                Success Map Coaching
              </span>
            </div>
          </div>
        </div>

        {/* --- Stacked Layout for Mobile --- */}
        <div className="lg:hidden flex flex-col items-center space-y-8">
          <div className="relative w-full max-w-sm h-48 flex items-center justify-center mb-8">
            <img
              src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=1887&auto.format&fit.crop"
              alt="Abstract swirling colors"
              className="absolute w-full h-full object-cover rounded-3xl shadow-2xl"
            />
            <div className="relative bg-white/30 backdrop-blur-md py-3 px-8 rounded-2xl">
              <span className="text-white text-lg font-semibold tracking-wide">
                Success Map Coaching
              </span>
            </div>
          </div>
          <ContentCard>
            Our corporate learning solutions are carefully designed to do more
            than train employees. We focus on closing skill gaps, enhancing
            collaboration, and boosting overall productivity.
          </ContentCard>
          <ContentCard>
            customized training modules tailored to your industry and business
            goals.
          </ContentCard>
          <ContentCard>
            we help organizations empower their workforce with future-ready
            skills that keep them ahead of the curve.
          </ContentCard>
          <ContentCard>
            practical applications through case studies, simulations, and
            hands-on projects, ensuring that employees can apply what they learn
            directly in the workplace.
          </ContentCard>
        </div>
      </div>
    </div>
  );
}
