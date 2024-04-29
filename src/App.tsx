import React from "react";
import Hero from "./components/Hero/index.tsx";
import Main from "./components/Main/index.tsx";
import { Link } from "react-router-dom";
import { phone } from "./utils/icons.tsx";

const App: React.FC = () => {
  return (
    <div className="w-full  dark:text-white  dark:bg-[#0A0A12]">
      <div className="container mx-auto    text-[#3E362E] dark:text-white  dark:bg-[#0A0A12] px-4 py-4">
        <Hero />
        <Main />
        <footer className="py-4 flex justify-center items-center flex-col gap-2 pb-8">
          <p className="footer-text text-sm flex items-center gap-1">
            Made by
            <Link
              to="https://nancyverma-reactportfolio1.netlify.app"
              target="_blank"
              className=" text-green-300 font-bold"
            >
              Nancy verma
            </Link>
          </p>
          <p className="flex items-center gap-1">
            {phone}
            <span>7985192890</span>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default App;
