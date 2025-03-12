import { useState } from 'react';
import { useSelector } from 'react-redux';

export const usePagination = (moviesPerPage: number = 6) => {
  const movies = useSelector(state => state.movies.movies);
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




