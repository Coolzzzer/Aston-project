import {Card}from '../card/card';
import usePagination from '../../hooks/usePagination';
import './resultField.css';

type ResultFieldProps = {
  movies: object[];
}

export const ResultField: React.FC<ResultFieldProps> = ({ movies }) => {
  const { currentMovies, currentPage, nextPage, prevPage } = usePagination(movies);
  return (
    <div className="resultContainer">
      <div className="resultField">
        <Card currentMovies={currentMovies} />
      </div>
      {movies.length > 6 && (
        <div className="pagination">
          <button onClick={prevPage} disabled={currentPage === 1}>
            &#60;
          </button>
          <button
            onClick={nextPage}
            disabled={currentPage === Math.ceil(movies.length / 6)}
          >
            &#62;
          </button>
        </div>
      )}
    </div>
  );
};