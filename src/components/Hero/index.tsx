import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/index.tsx";

function Hero() {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const currentHour = new Date().getHours();
    let greetingText = "";
    if (currentHour < 12) {
      greetingText = "Good Morning";
    } else if (currentHour < 18) {
      greetingText = "Good Afternoon";
    } else {
      greetingText = "Good Evening";
    }
    setGreeting(greetingText);
  }, []);

  return (
    <div className="h-1/2 w-full">
      <Navbar />
      <div className=" mt-28 md:mt-40 space-y-16 text-center">
        <h1 className="text-2xl font-bold text-blue-900 dark:text-white sm:text-3xl md:text-4xl mx-auto max-w-lg">
          {greeting}, what would you like to watch{" "}
          {greeting === "Good Evening" ? "tonight" : "today"}?
        </h1>
      </div>
    </div>
  );
}

export default Hero;
