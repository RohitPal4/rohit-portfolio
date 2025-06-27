"use client";
import NavLink from "./NavLink";

const MenuOverlay = ({ links, active, onLinkClick }) => {
  return (
    <ul className="flex flex-col py-4 items-center space-y-3 bg-[#121212] md:hidden">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink
            href={link.href}
            title={link.title}
            active={active === link.href}
            onClick={onLinkClick}
          />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
