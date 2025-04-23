import React, { useState } from "react";
import img1 from "../assets/logo.png";

function Navbar() {
  const [isopen, setIsopen] = useState(false);

  const Menuetoggle = () => {
    setIsopen(!isopen);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="bg-indigo-600 text-white p-4">
        <div className="flex items-center justify-between">
          <div className="w-30 h-15 bg-red-500 ">
            <img
              className="w-full h-full object-contain"
              src={img1}
              alt="Logo"
            />
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="#" className="text-white">
              HOME
            </a>
            <a href="#" className="text-white">
              SERVICES
            </a>
            <a href="#" className="text-white">
              ABOUT US
            </a>
            <a href="#" className="text-white">
              CONTACT US
            </a>
            <a href="#" className="text-white">
              CAREERS
            </a>
          </div>
        </div>
      </nav>

      <button
        onClick={Menuetoggle}
        className="fixed top-4 right-4 z-50 text-white bg-indigo-700 p-2 rounded md:hidden"
      >
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
          className="w-6 h-6"
        >
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {isopen && (
        <aside
          className={`fixed top-0 right-0 w-full h-full bg-white 
       transition-transform duration-[2000ms] ease-in-out transform 
       ${isopen ? "translate-x-0" : "translate-x-full"} 
       z-40 md:hidden p-4`}
        >
          <ul className="flex flex-col space-y-4 text-black">
            <li>
              <a href="#" className="py-2 block">
                HOME
              </a>
            </li>
            <li>
              <a href="#" className="py-2 block">
                SERVICES
              </a>
            </li>
            <li>
              <a href="#" className="py-2 block">
                ABOUT US
              </a>
            </li>
            <li>
              <a href="#" className="py-2 block">
                CONTACT US
              </a>
            </li>
            <li>
              <a href="#" className="py-2 block">
                CAREERS
              </a>
            </li>
          </ul>
        </aside>
      )}
    </>
  );
}

export default Navbar;
