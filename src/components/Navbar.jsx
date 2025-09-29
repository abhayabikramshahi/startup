import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Product", path: "/products" },
  { name: "Developer", path: "/developer" },
];

function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="px-6 py-4 flex justify-between items-center bg-white shadow-sm sticky top-0 z-50">
      {/* Logo */}
      <div className="logo">
        <Link to={"/"}>
          <h1 className="font-bold text-xl text-gray-900 tracking-wide hover:text-gray-700 transition">
            A Zone
          </h1>
        </Link>
      </div>

      {/* Desktop Nav Links */}
      <div className="hidden md:flex items-center space-x-8">
        {navItems.map((item, index) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={index}
              to={item.path}
              className={`relative text-base font-medium transition-colors duration-300 ${
                isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
              }`}
            >
              {item.name}
              {isActive && (
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-600 rounded"></span>
              )}
            </Link>
          );
        })}
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-gray-700 hover:text-blue-600 transition"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden flex flex-col items-center py-4 space-y-4">
          {navItems.map((item, index) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={index}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={`text-lg font-medium transition-colors duration-300 ${
                  isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
