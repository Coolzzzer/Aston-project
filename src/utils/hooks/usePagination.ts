import { useState } from 'react';

export const usePagination = (movies: any[], moviesPerPage: number = 6) => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  const nextPage = () => {
    if (currentPage < Math.ceil(movies.length / moviesPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return { currentMovies, currentPage, nextPage, prevPage };
};




