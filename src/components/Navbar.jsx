import React from "react";
import { Link } from "react-router-dom";
import { User } from "lucide-react";

const navItems = [
  { name: "Panel", path: "/panel", icon: <User className="w-5 h-5" /> },
  { 
    name: "Dashboard", 
    path: "/dashboard", 
    icon: <User className="w-5 h-5" />,
    gradient: true
  },
];

function Navbar() {
  return (
    <nav className="px-6 py-4 flex justify-between items-center bg-transparent">
      {/* Logo */}
      <div className="logo">
        <h2 className="text-5xl font-extrabold bg-gradient-to-r from-[#090621] via-[#240745] via-[#3A0763] to-[#C382CC] bg-clip-text text-transparent">
          AXZone
        </h2>
      </div>

      {/* Nav Items (Desktop + Mobile) */}
      <div className="flex items-center space-x-4 navitems">
        {navItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={`flex items-center justify-center gap-2 rounded-full px-4 py-2 text-white transition
              ${item.gradient 
                ? "bg-gradient-to-r from-[#090621] via-[#240745] to-[#C382CC] border-none" 
                : "bg-gray-900 border border-[#ccc] hover:bg-gray-800"
              }`}
          >
            {item.icon}
            {/* Show text only on md and above */}
            <span className="hidden md:inline">{item.name}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
