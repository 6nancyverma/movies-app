import React, { useState, useEffect } from "react";
import FilterOptions from "../FilterOptions/index.tsx";
import MovieList from "../MoviesList/index.tsx";
import movieData from "../../data/movies.json";

interface Movie {
  movielanguages: string[];
  moviecountries: string[];
  moviegenres: string[];
}
const Main: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
  const [filters, setFilters] = useState({
    language: [],
    country: "",
    genre: "",
  });
  useEffect(() => {
    // Fetch movie data from JSON file
    setMovies(movieData);
  }, []);

  // Extract all unique languages from the movies data
  const allLanguages = [
    ...new Set(movieData.flatMap((movie) => movie.movielanguages)),
  ];

  const handleFilterChange = (filterType: string, value: string | string[]) => {
    setFilters({ ...filters, [filterType]: value });
  };

  useEffect(() => {
    let filtered = movies.filter((movie) => {
      return (
        (filters.language.length === 0 ||
          filters.language.some((lang) =>
            movie.movielanguages.includes(lang)
          )) &&
        (filters.country === "" ||
          movie.moviecountries.includes(filters.country)) &&
        (filters.genre === "" || movie.moviegenres.includes(filters.genre))
      );
    });
    setFilteredMovies(filtered);
  }, [movies, filters]);

  const noMoviesMessage = filteredMovies.length === 0 ? "No movies found." : "";

  return (
    <div className="container mx-auto   text-[#3E362E] dark:text-white  dark:bg-[#0A0A12] px-4 py-8">
      <div className="flex justify-center items-center w-full">
        <FilterOptions
          filters={filters}
          onFilterChange={handleFilterChange}
          allLanguages={allLanguages}
        />
      </div>

      <h2
        className="text-2xl font-semibold my-8 sm:my-10 md:my-16 text-center "
        id="movies"
      >
        Filtered Movies
      </h2>
      {noMoviesMessage ? (
        <p className="text-gray-500">{noMoviesMessage}</p>
      ) : (
        <MovieList movies={filteredMovies} />
      )}
    </div>
  );
};

export default Main;
