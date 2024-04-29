import React from "react";
import { Link } from "react-router-dom";
import ThemeDropdown from "../ThemeDropdown/index.tsx";
import { github, popcorn } from "../../utils/icons.tsx";

function Navbar() {
  return (
    <div className="py-4 flex items-center justify-between px-4">
      <button className="flex items-center rounded-lg text-start text-[#9CA3AF] bg-[#1E1E32] px-4 py-3 text-search-text placeholder-search-placeholder focus:outline-none flex-shrink-0">
        <span className="mr-2">{popcorn}</span> Movies Hub
      </button>
      <div className="py-4 flex items-center justify-between gap-2 px-4">
        <ThemeDropdown />
        <Link
          to="https://github.com/6nancyverma"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="flex items-center border border-[#1E1E32] rounded-lg gap-2 text-start text-[#9CA3AF] bg-[#1E1E32] px-4 py-[0.75rem]  text-search-text placeholder-search-placeholder focus:outline-none">
            <span>{github}</span>
            <span className="hidden md:inline-block"> Source code</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
