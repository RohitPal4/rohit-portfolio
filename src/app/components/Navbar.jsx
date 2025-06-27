"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  { title: "Home", href: "#hero" },
  { title: "About", href: "#about" },
  { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("hero");

  // Close mobile menu on link click
  const handleLinkClick = () => {
    setNavbarOpen(false);
  };

  // ScrollSpy Effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      for (const link of navLinks) {
        const section = document.querySelector(link.href);
        if (section) {
          const offset = section.offsetTop - 100;
          const height = section.offsetHeight;
          if (scrollY >= offset && scrollY < offset + height) {
            setActiveLink(link.href);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#121212]/95 shadow-lg backdrop-blur-md">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-3">
        <Link
          href="#hero"
          className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent"
        >
          Rohit
        </Link>

        {/* Mobile Toggle */}
        <div className="block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          )}
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:block">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <NavLink
                  href={link.href}
                  title={link.title}
                  active={activeLink === link.href}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Overlay Menu */}
      {navbarOpen && (
        <MenuOverlay
          links={navLinks}
          active={activeLink}
          onLinkClick={handleLinkClick}
        />
      )}
    </nav>
  );
};

export default Navbar;
