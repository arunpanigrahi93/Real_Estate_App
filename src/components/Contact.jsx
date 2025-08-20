import React from "react";

const Contact = () => {
  return (
    <div
      className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden bg-gray-50"
      id="Contact"
    >
      {/* Title */}
      <h1 className="text-2xl sm:text-4xl font-bold mb-4 text-gray-800">
        Contact{" "}
        <span className="underline underline-offset-4 decoration-blue-600 font-light">
          With Us
        </span>
      </h1>

      {/* Subtitle */}
      <p className="text-center text-gray-500 mb-12 max-w-md mx-auto">
        Ready to Make a Move? Let's Build Your Future Together
      </p>

      {/* Contact Form */}
      <form className="max-w-2xl mx-auto text-gray-700">
        <div className="flex flex-wrap -mx-2">
          {/* Name */}
          <div className="w-full md:w-1/2 px-2 mb-6">
            <label className="block text-left text-sm font-medium text-gray-600">
              Your Name
            </label>
            <input
              className="w-full border border-gray-300 rounded-lg py-3 px-4 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              type="text"
              name="Name"
              placeholder="Your Name"
              required
            />
          </div>

          {/* Email */}
          <div className="w-full md:w-1/2 px-2 mb-6">
            <label className="block text-left text-sm font-medium text-gray-600">
              Your Email
            </label>
            <input
              className="w-full border border-gray-300 rounded-lg py-3 px-4 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              type="email"
              name="Email"
              placeholder="Your Email"
              required
            />
          </div>
        </div>

        {/* Message */}
        <div className="mb-6 px-2">
          <label className="block text-left text-sm font-medium text-gray-600">
            Message
          </label>
          <textarea
            className="w-full border border-gray-300 rounded-lg py-3 px-4 mt-2 h-40 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            name="Message"
            placeholder="Write your message here..."
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="px-2">
          <button
            type="submit"
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg shadow-md transition"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
