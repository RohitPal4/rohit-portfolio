"use client";
import Link from "next/link";

const NavLink = ({ href, title, active, onClick }) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={`block py-2 px-4 sm:text-xl rounded-md transition-colors ${
        active ? "text-green-400" : "text-[#ADB7BE] hover:text-white"
      }`}
    >
      {title}
    </Link>
  );
};

export default NavLink;
