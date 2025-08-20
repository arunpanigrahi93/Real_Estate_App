import React, { useState, useEffect } from "react";
import { testimonialsData, assets } from "../assets/assets";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1); // mobile
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2); // tablet
      } else {
        setVisibleCards(3); // desktop
      }
    };

    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  const handleNext = () => {
    if (currentIndex < testimonialsData.length - visibleCards) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  // ✅ Different transform logic for mobile vs others
  const translateX =
    visibleCards === 1
      ? (currentIndex * 100) / testimonialsData.length // mobile → one by one
      : (currentIndex * 100) / visibleCards; // tablet/desktop → group

  const trackWidth =
    visibleCards === 1
      ? `${testimonialsData.length * 100}%`
      : `${(testimonialsData.length / visibleCards) * 100}%`;

  const slideWidth =
    visibleCards === 1
      ? `${100 / testimonialsData.length}%`
      : `${100 / testimonialsData.length}%`; // same, but distinction kept for clarity

  return (
    <div
      className="container mx-auto py-10 px-4 sm:px-8 lg:px-32 w-full overflow-hidden min-h-screen scroll-mt-24"
      id="Testimonials"
    >
      {/* Section Heading */}
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Customer{" "}
        <span className="underline underline-offset-4 decoration-blue-600 font-light">
          Testimonials
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-12 max-w-md mx-auto">
        Real Stories from Those Who Found Home with Us
      </p>

      {/* Carousel Wrapper */}
      <div className="relative">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${translateX}%)`,
            width: trackWidth,
          }}
        >
          {testimonialsData.map((testimonial, index) => (
            <div key={index} style={{ width: slideWidth }} className="px-3">
              <div className="border shadow-md rounded-xl px-6 py-8 sm:py-10 text-center h-full bg-white hover:shadow-lg transition">
                <img
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                  src={testimonial.image}
                  alt={testimonial.alt}
                />
                <h2 className="text-lg sm:text-xl text-gray-700 font-semibold">
                  {testimonial.name}
                </h2>
                <p className="text-gray-500 mb-4 text-sm sm:text-base">
                  {testimonial.title}
                </p>
                <div className="flex justify-center gap-1 text-red-500 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <img
                      key={i}
                      src={assets.star_icon}
                      alt="star"
                      className="w-4 h-4 sm:w-5 sm:h-5"
                    />
                  ))}
                </div>
                <p className="text-gray-600 text-sm sm:text-base">
                  {testimonial.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white p-2 sm:p-3 rounded-full shadow hover:bg-gray-100 transition disabled:opacity-50"
        >
          ◀
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex >= testimonialsData.length - visibleCards}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white p-2 sm:p-3 rounded-full shadow hover:bg-gray-100 transition disabled:opacity-50"
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
