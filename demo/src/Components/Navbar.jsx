import React, { useState } from "react";
import Logo from "../assets/LOGO.png";

function Navbar() {
  const [isopen, setIsopen] = useState(false);

  const Menuetoggle = () => {
    setIsopen(!isopen);
  };

  return (
    <div className="min-w-[375px] overflow-x-auto relative">
      {/* Navbar */}
      <nav className="bg-indigo-600 text-white p-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="md:w-[226px] md:h-[49.62px] w-[152px] h-[33.37px] ml-[15px]">
            <img
              className="w-full h-full object-contain"
              src={Logo}
              alt="Logo"
            />
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-4">
            <a href="#">HOME</a>
            <a href="#">SERVICES</a>
            <a href="#">ABOUT US</a>
            <a href="#">CONTACT US</a>
            <a href="#">CAREERS</a>
          </div>
        </div>
      </nav>

      {/* Toggle Button - same icon position, changes appearance */}
      <button
        onClick={Menuetoggle}
        className="absolute decoration-violet-50 top-4 right-4 z-50 text-white bg-indigo-600  md:bg-indigo-600 p-2 rounded md:hidden"
      >
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
          className="w-6 h-6"
        >
          {isopen ? (
            <path d="M6 18L18 6M6 6l12 12" /> // X icon
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" /> // Hamburger icon
          )}
        </svg>
      </button>

      {/* Sidebar */}
      {isopen && (
        <aside className="fixed top-0 right-0 w-full h-full bg-white z-40 p-4 md:hidden transition-transform duration-500 ease-in-out">
          <ul className="flex flex-col space-y-4 text-black mt-12 text-lg">
            <li>
              <a href="#" onClick={() => setIsopen(false)}>
                HOME
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setIsopen(false)}>
                SERVICES
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setIsopen(false)}>
                ABOUT US
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setIsopen(false)}>
                CONTACT US
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setIsopen(false)}>
                CAREERS
              </a>
            </li>
          </ul>
        </aside>
      )}
    </div>
  );
}

export default Navbar;
