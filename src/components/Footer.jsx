import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 md:px-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Arun Panigrahi</h2>
          <p className="text-sm">
            Building trusted real estate solutions with transparency, quality,
            and client satisfaction at the core.
          </p>
        </div>

        {/* Buy Section */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Buy</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                Apartments
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Villas
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Plots
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Commercial Properties
              </a>
            </li>
          </ul>
        </div>

        {/* Rent Section */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Rent</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                Residential
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Office Spaces
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Shops
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Warehouses
              </a>
            </li>
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Arun Panigrahi. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
