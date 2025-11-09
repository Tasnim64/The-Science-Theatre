"use client";
import React from "react";

const Navbar = () => {
  const menuItems = [
    { name: "Home", href: "#banner" },
    { name: "About", href: "#about" },
    { name: "Journey", href: "#journey" },
    { name: "Register", href: "#register" },
    { name: "Q&A", href: "#questions" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="navbar sticky top-0 z-50 px-4 bg-black/30 backdrop-blur-md border-b border-[#a200ff33] shadow-neon">
      {/* Left: Logo */}
      <div className="flex-1">
      <a href="/" className="btn btn-ghost p-0">
        <img
          src="/STLOGO3.png"
          alt="Theatre Logo"
          className="h-10 w-auto hover:scale-105 transition-transform duration-300"
        />
      </a>
      </div>

      {/* Right: Menu */}
      <div className="flex-none">
        {/* Mobile Dropdown */}
        <div className="dropdown dropdown-end lg:hidden">
          <label tabIndex={0} className="btn btn-ghost text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black/80 backdrop-blur-md rounded-box w-52 text-[#c0b3ff]"
          >
            {menuItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-[#a200ff] transition">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Menu */}
        <ul className="menu menu-horizontal hidden lg:flex gap-6 text-[#c0b3ff]">
          {menuItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="hover:text-[#a200ff] transition-all font-medium"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
