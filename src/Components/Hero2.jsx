import React from "react";
import exampleImage from "/src/assets/Subtract.png"; // replace with your image path

const InfoSection = () => {
  return (
    <section className="bg-[#ADB0F5] py-12 px-4 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center relative">
        {/* Left Image */}
        <div className="md:w-1/2 h-full">
          <img src={exampleImage} alt="AI Visualization" className="" />
        </div>

        {/* Right Text Card */}
        <div className="md:w-1/2 h-full relative">

          <div className="bg-white h-full p-8 md:p-12 rounded-xl shadow-lg">
            <div className="space-y-6">
              <div>
                <h3 className="font-be-vietnam font-semibold text-lg text-blue-600">
                  Intelligent Learning Systems
                </h3>
                <p className="font-be-vietnam text-gray-700 mt-2">
                  AI-driven platforms that personalize learning, track progress,
                  and enhance engagement, making education smarter and more
                  inclusive.
                </p>
              </div>

              <div>
                <h3 className="font-be-vietnam font-semibold text-lg text-blue-600">
                  Smart Assistants & Chatbots
                </h3>
                <p className="font-be-vietnam text-gray-700 mt-2">
                  From classrooms to businesses, our virtual assistants
                  understand, learn, and adapt to deliver real-time support and
                  interaction.
                </p>
              </div>

              <div>
                <h3 className="font-be-vietnam font-semibold text-lg text-blue-600">
                  Predictive AI Solutions
                </h3>
                <p className="font-be-vietnam text-gray-700 mt-2">
                  Transform raw data into insights. Our predictive analytics
                  tools forecast trends, identify gaps, and drive informed
                  decision-making.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
