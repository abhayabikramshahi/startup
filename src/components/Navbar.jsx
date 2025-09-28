import React from "react";
import { Link } from "react-router-dom";
import { User, ArrowUpFromLine   } from "lucide-react";

const navItems = [
  { name: "Profile", path: "/profile", icon: <User className="w-5 h-5 text-white" /> },
  { name: "Upload", path: "/upload", icon: <ArrowUpFromLine className="w-5 h-5 text-white" /> },
];

function Navbar() {
  return (
    <nav className="px-6 py-4 flex justify-between items-center bg-black shadow-md">
      {/* Logo */}
      <div className="logo">
        <Link
         to={'/'}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
          AZONE
        </h2>
        </Link>
      </div>

      {/* Nav Items */}
      <div className="flex items-center space-x-3 md:space-x-4 navitems">
        {navItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={`flex items-center justify-center gap-2 rounded-full px-4 py-2 text-white font-semibold transition
              ${item.gradient 
                ? "bg-gradient-to-r from-[#090621] via-[#240745] to-[#C382CC] hover:opacity-90" 
                : "bg-gray-800 border border-gray-700 hover:bg-gray-700"
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
