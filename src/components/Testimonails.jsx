import React, { useState, useEffect } from "react";
import { testimonialsData, assets } from "../assets/assets";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  // ✅ Update visible cards on screen resize
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

  return (
    <div
      className="container mx-auto py-10 lg:px-32 w-full overflow-hidden min-h-screen scroll-mt-24"
      id="Testimonials"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Customer{" "}
        <span className="underline underline-offset-4 decoration-1 font-light">
          Testimonials
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">
        Real Stories from Those Who Found Home with Us
      </p>

      {/* Carousel wrapper */}
      <div className="relative">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
            width: `${(testimonialsData.length / visibleCards) * 100}%`,
          }}
        >
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-4"
            >
              <div className="border shadow-lg rounded px-6 py-10 text-center h-full bg-white">
                <img
                  className="w-20 h-20 rounded-full mx-auto mb-4"
                  src={testimonial.image}
                  alt={testimonial.alt}
                />
                <h2 className="text-xl text-gray-700 font-medium">
                  {testimonial.name}
                </h2>
                <p className="text-gray-500 mb-4 text-sm">
                  {testimonial.title}
                </p>
                <div className="flex justify-center gap-1 text-red-500 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <img key={i} src={assets.star_icon} alt="star" />
                  ))}
                </div>
                <p className="text-gray-600">{testimonial.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Prev & Next buttons */}
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow disabled:opacity-50"
        >
          ◀
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex >= testimonialsData.length - visibleCards}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow disabled:opacity-50"
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
