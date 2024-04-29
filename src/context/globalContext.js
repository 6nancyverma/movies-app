import React, { useContext, createContext, useState, useEffect } from "react";
import movieData from "../data/movies.json";

const GlobalContext = createContext();
const GlobalContextUpdate = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const [movies, setMovies] = useState([]);
  const [languageFilter, setLanguageFilter] = useState("All");

  useEffect(() => {
    setMovies(movieData);
    console.log("movies n context", movies);
  }, [movies]);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme, languageFilter]);

  return (
    <GlobalContext.Provider
      value={{
        theme,
        movies,
        languageFilter,
      }}
    >
      <GlobalContextUpdate.Provider
        value={{
          setTheme,
          setLanguageFilter,
        }}
      >
        {children}
      </GlobalContextUpdate.Provider>
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
export const useGlobalContextUpdate = () => useContext(GlobalContextUpdate);
