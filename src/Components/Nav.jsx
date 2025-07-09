import React from "react";
import logo from "/img.svg"; // Replace with your logo path

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-12 py-4 bg-white shadow-md font-sans text-gray-700">
      {/* Left: Logo + Links */}
      <div className="flex items-center space-x-12">
        {/* Logo */}
        <img src={logo} alt="Asana Logo" className="h-6 cursor-pointer" />

        {/* Nav Links */}
        <div className="hidden md:flex space-x-10 font-semibold text-sm">
          <a href="#product" className="flex items-center hover:text-black cursor-pointer select-none">
            Product <span className="ml-1 text-xs">▾</span>
          </a>
          <a href="#solutions" className="flex items-center hover:text-black cursor-pointer select-none">
            Solutions <span className="ml-1 text-xs">▾</span>
          </a>
          <a href="#resources" className="flex items-center hover:text-black cursor-pointer select-none">
            Resources <span className="ml-1 text-xs">▾</span>
          </a>
          <a href="#pricing" className="hover:text-black cursor-pointer">Pricing</a>
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center space-x-6">
       
        {/* Language Selector */}
        <button aria-label="Language selector" className="text-gray-600 hover:text-black focus:outline-none">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-10 w-10"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10
             10-4.477 10-10S17.523 2 12 2zm5.93 6h-2.179a15.89
             15.89 0 00-1.266-3.352A8.015 8.015 0 0117.93 8zm-5.93
             10a7.957 7.957 0 01-4.276-1.266A14.42 14.42 0 0112 14v4zm-5.927-6a7.97
             7.97 0 010-2h4v2H6.073zm.792 3.178a7.936 7.936 0 01-1.013-1.885
             17.011 17.011 0 001.013-3.645 17.014 17.014 0 00-1.013-3.645A7.936
             7.936 0 016.865 6.82 8.013 8.013 0 004.07 12a8.014 8.014 0 002.795
             5.178zm6.234-7.178H7.927a15.47 15.47 0 00.787-3.178h3.302v3.178zm0
             2v3.178h-3.302a15.47 15.47 0 01-.787-3.178h4.089zm1.824 3.178v-3.178h4.089a15.47
             15.47 0 01-.787 3.178h-3.302zm1.394-4.392a15.838 15.838 0 00-1.216-3.29 7.935
             7.935 0 011.013 1.885 17.01 17.01 0 001.013 3.645 17.01 17.01 0 00-1.013
             3.645 7.935 7.935 0 01-1.013 1.885 15.837 15.837 0 001.216-3.29
             15.839 15.839 0 000-3.78z" />
  </svg>
</button>


        {/* Contact Sales */}
        <button className="text-gray-700 font-semibold hover:text-black focus:outline-none">
          Contact Sales
        </button>
        {/* Log in */}
         <button className="text-gray-700 font-semibold hover:text-black focus:outline-none">
          Log in
        </button>

        {/* Get Started */}
        <button className="bg-black text-white px-5 py-2 rounded-md font-semibold hover:bg-[#F06A6A] hover:text-[black] focus:outline-none">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
