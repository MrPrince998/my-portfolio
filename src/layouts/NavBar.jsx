import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-scroll";

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNavLink, setActiveNavLink] = useState("Home");

  const navLinks = [
    { title: "Home", to: "home" },
    { title: "Service", to: "service" },
    { title: "About Me", to: "about" },
    { title: "Projects", to: "projects" },
    { title: "Contact me", to: "contact" },
  ];

  
  return (
    <nav className="bg-white/80 border-b border-gray-200 sticky top-0 z-50 transition-colors duration-300 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo/Name */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              to="/"
              className="text-xl font-bold bg-gradient-to-r from-[#815C00] via-[#FFB600] to-[#C19600] bg-clip-text text-transparent hover:opacity-80 transition-opacity duration-300"
            >
              Bharat Rana
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-4">
              {navLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.to} spy={true} offset={-70} duration={500}
                    onSetActive={()=> setActiveNavLink(link.title)}
                    className={`px-3 py-2 font-medium transition-colors duration-300 relative
                      after:content-[''] after:absolute after:bottom-0 after:left-0
                      after:w-0 after:h-0.5 after:bg-[#FFB600] after:transition-all after:duration-300
                      hover:after:w-full ${
                        activeNavLink === link.title
                          ? "text-[#FFB600] after:w-full"
                          : "text-gray-700 hover:text-[#FFB600]"
                      }`}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full text-gray-700 hover:bg-gray-100 focus:outline-none transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-8 w-8" />
              ) : (
                <Bars3Icon className="h-8 w-8" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <ul className="pt-2 pb-3 space-y-1 bg-white/80 transition-colors duration-300 backdrop-blur-sm absolute w-full top-[65px] shadow-md">
            {navLinks.map((link, i) => (
              <li key={i}>
                <Link
                  to={link.to}
                  onClick={() => setActiveNavLink(link.title)}
                  className={`block px-4 py-3 font-medium transition-colors duration-300 ${
                    activeNavLink === link.title
                      ? "text-[#FFB600] bg-gray-100"
                      : "text-gray-900 hover:text-[#FFB600] hover:bg-gray-100"
                  }`}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
