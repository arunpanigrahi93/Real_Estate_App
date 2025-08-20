import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div
      id="About"
      className="container mx-auto flex flex-col items-center justify-center px-6 md:px-20 lg:px-32 py-16 w-full"
    >
      {/* Title Section */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
        About <span className="text-indigo-600">Our Brand</span>
      </h1>
      <p className="text-lg text-gray-600 text-center mb-12">
        Passionate About Properties, Dedicated to Your Vision
      </p>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-20">
        {/* Image */}
        <img
          src={assets.brand_img}
          alt="brand"
          className="w-full sm:w-1/2 max-w-lg rounded-lg shadow-md"
        />

        {/* Text & Stats */}
        <div className="flex flex-col items-center md:items-start text-gray-600">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-8 md:gap-12 w-full max-w-lg">
            <div className="text-center md:text-left">
              <p className="text-4xl font-semibold text-gray-800">10+</p>
              <p className="text-sm">Years of Excellence</p>
            </div>
            <div className="text-center md:text-left">
              <p className="text-4xl font-semibold text-gray-800">12+</p>
              <p className="text-sm">Projects Completed</p>
            </div>
            <div className="text-center md:text-left">
              <p className="text-4xl font-semibold text-gray-800">20+</p>
              <p className="text-sm">Mn. Sq. Ft. Delivered</p>
            </div>
            <div className="text-center md:text-left">
              <p className="text-4xl font-semibold text-gray-800">25+</p>
              <p className="text-sm">Ongoing Projects</p>
            </div>
          </div>

          {/* Description */}
          <p className="mt-10 max-w-lg leading-relaxed text-center md:text-left">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
