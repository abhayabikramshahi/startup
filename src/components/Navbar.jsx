import React from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Product", path: "/products" },
  { name: "Developer", path: "/developer" },
];

function Navbar() {
  const location = useLocation();

  return (
    <nav className="px-8 py-4 flex justify-between items-center bg-white shadow-sm sticky top-0 z-50">
      {/* Logo */}
      <div className="logo">
        <Link to={"/"}>
          <h1 className="font-bold text-xl text-gray-900 tracking-wide hover:text-gray-700 transition">
            A Zone
          </h1>
        </Link>
      </div>

      {/* Nav Links */}
      <div className="flex items-center space-x-8 navitems">
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
              {/* Active underline */}
              {isActive && (
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-600 rounded"></span>
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default Navbar;
