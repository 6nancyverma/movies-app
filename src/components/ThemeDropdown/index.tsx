import React from "react";
import {
  useGlobalContext,
  useGlobalContextUpdate,
} from "../../context/globalContext";
import { moon, sun } from "../../utils/icons.tsx";

function ThemeDropdown() {
  const { setTheme } = useGlobalContextUpdate();
  const { theme } = useGlobalContext();

  const themeToggler = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  const buttonBorderStyle =
    theme === "light" ? "border-[#1E1E32]" : "border-[#9CA3AF]";
  return (
    <div className="dropdown">
      <div className="dropdown-content">
        <button
          onClick={themeToggler}
          className={`border px-4 py-[0.75rem] rounded-md shadow-md hover:shadow-lgtransition duration-300 ease-in-out ${buttonBorderStyle}`}
        >
          {theme === "light" ? moon : sun}
        </button>
      </div>
    </div>
  );
}

export default ThemeDropdown;
