import React, { ChangeEvent, useState, useEffect, useRef } from "react";
import { chevronDown } from "../../utils/icons.tsx";

interface FilterOptionsProps {
  filters: {
    language: string[];
    country: string;
    genre: string;
  };
  onFilterChange: (filterType: string, value: string | string[]) => void;
  allLanguages: string[];
}

const FilterOptions: React.FC<FilterOptionsProps> = ({
  filters,
  onFilterChange,
  allLanguages,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const handleFilterChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, options } = e.target;
    const selectedValues = Array.from(options)
      .filter((option) => option.selected)
      .map((option) => option.value);
    onFilterChange(name, selectedValues);
    setIsOpen(false);
    scrollToMoviesSection(); // Scroll to movies section
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const scrollToMoviesSection = () => {
    const moviesSection = document.getElementById("movies");
    if (moviesSection) {
      moviesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className=" w-[80%] md:w-1/2  flex flex-col gap-4">
      <button
        onClick={toggleDropdown}
        className="w-full rounded-lg flex items-center justify-between text-start text-[#9CA3AF] bg-[#1E1E32] px-4 py-4 text-search-text placeholder-search-placeholder focus:outline-none"
      >
        <span>Select a Language</span>
        <span>{chevronDown}</span>
      </button>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
          <div
            ref={dropdownRef}
            className="w-full max-w-lg rounded-lg bg-[#1E1E32] p-4"
          >
            <select
              name="language"
              value={filters.language}
              onChange={handleFilterChange}
              multiple
              className="w-full p-2 text-[0.875rem] text-[#9CA3AF] bg-[#1E1E32]"
            >
              {allLanguages.map((language) => (
                <option
                  key={language}
                  value={language}
                  className="hover:bg-[#353553] p-2 focus:bg-[#353553] active:bg-[#353553]"
                >
                  {language}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterOptions;
