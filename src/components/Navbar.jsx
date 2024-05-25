import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo_biasa.png";
import { FiSun, FiMoon } from "react-icons/fi";
import Baju from "../assets/Logo2.png";

const Navbar = () => {
  const storedTheme = localStorage.getItem("preferredMode");
  const [theme, setTheme] = useState(storedTheme || "light");
  const [darkMode, setDarkMode] = useState(theme === "dark");

  const [isNavbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen(!isNavbarOpen);
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="text-white">
      <nav className="bg-black fixed w-full z-40 top-0 left-0 bg-opacity-60 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <NavLink to="/" className="flex items-center">
            <img src={Baju} className="h-12 mr-3" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-tema1 font-semibold whitespace-nowrap">
              AcV
            </span>
          </NavLink>
          <div className="flex md:order-2">
            <button
              type="button"
              onClick={toggleNavbar}
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-black 
              rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200
               dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
              isNavbarOpen ? "" : "hidden"
            }`}
            id="navbar-sticky"
          >
            <ul
              className={`flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:flex-row 
            md:space-x-8 md:mt-0 md:border-0 font-tema3 text-lg
              ${isNavbarOpen ? "bg-gray-900" : ""}`}
            >
              <li>
                <NavLink
                  to="/"
                  className=" block py-2 pl-3 pr-4 text-white  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/portofolio"
                  className=" block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Portofolio
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className=" block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
