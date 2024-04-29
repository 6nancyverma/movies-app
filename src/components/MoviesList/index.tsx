import React, { useState } from "react";

const MovieList = ({ movies }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 12; // Number of movies per page

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  ">
        {currentMovies.map((movie: any) => (
          <div
            key={movie.imdbmovieid}
            className="bg-[#9CA3AF]  dark:bg-[#1E1E32]  bg-opacity-50 p-4 overflow-hidden shadow-md rounded-lg"
          >
            {movie.moviemainphotos.length > 0 ? (
              <img
                src={movie.moviemainphotos[0]}
                alt={movie.movietitle}
                className="w-full"
              />
            ) : (
              <div className="w-full h-[23.5rem] bg-[#717883] p-2 flex items-center justify-center ">
                <span className="text-[#9CA3AF] ">No Image Available</span>
              </div>
            )}
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 text-[#1E1E32] dark:text-white">
                {movie.movietitle}
              </h3>
              {movie.movielanguages && movie.movielanguages.length > 0 && (
                <p className="text-blue-900 dark:text-[#9CA3AF] mb-2">
                  <strong>Languages: </strong> {movie.movielanguages.join(", ")}
                </p>
              )}
              {movie.moviecountries && movie.moviecountries.length > 0 && (
                <p className="text-blue-900 dark:text-[#9CA3AF] mb-2">
                  <strong>Countries: </strong> {movie.moviecountries.join(", ")}
                </p>
              )}
              {movie.moviegenres && movie.moviegenres.length > 0 && (
                <p className="text-blue-900 dark:text-[#9CA3AF] mb-2">
                  <strong>Genres: </strong> {movie.moviegenres.join(", ")}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <ul className="flex justify-center">
          {Array.from(
            { length: Math.ceil(movies.length / moviesPerPage) },
            (_, i) => (
              <li key={i}>
                <button
                  onClick={() => paginate(i + 1)}
                  className={`px-3 py-1 mx-1 rounded-md ${
                    currentPage === i + 1
                      ? "bg-[#1E1E32] text-[#9CA3AF]"
                      : "bg-[#9CA3AF] text-[#1E1E32]"
                  }`}
                >
                  {i + 1}
                </button>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default MovieList;
