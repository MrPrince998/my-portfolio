import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    setActiveLink(location.hash || "#home");
  }, [location]);

  const navLinks = [
    { title: "Home", href: "#home" },
    { title: "Service", href: "#service" },
    { title: "About Me", href: "#about" },
    { title: "Projects", href: "#projects" },
    { title: "Contact me", href: "#contact" },
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
                  <a
                    href={link.href}
                    className={`px-3 py-2 font-medium transition-colors duration-300 relative
                      after:content-[''] after:absolute after:bottom-0 after:left-0
                      after:w-0 after:h-0.5 after:bg-[#FFB600] after:transition-all after:duration-300
                      hover:after:w-full ${
                        activeLink === link.href
                          ? "text-[#FFB600] after:w-full"
                          : "text-gray-700 hover:text-[#FFB600]"
                      }`}
                  >
                    {link.title}
                  </a>
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
                <a
                  href={link.href}
                  className={`block px-4 py-3 font-medium transition-colors duration-300 ${
                    activeLink === link.href
                      ? "text-[#FFB600] bg-gray-100"
                      : "text-gray-900 hover:text-[#FFB600] hover:bg-gray-100"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
