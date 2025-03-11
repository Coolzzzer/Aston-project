import {Card}from '@components/card/card';
import {usePagination} from '@utils/hooks/usePagination';
import resultFieldStyles from "./resultField.module.css";

type ResultFieldProps = {
  movies: object[];
}

export const ResultField: React.FC<ResultFieldProps> = ({ movies }) => {
  const { currentMovies, currentPage, nextPage, prevPage } = usePagination(movies);
  return (
    <div className={resultFieldStyles.resultContainer}>
      <div className={resultFieldStyles.resultField}>
        <Card currentMovies={currentMovies} />
      </div>
      {movies.length > 6 && (
        <div className={resultFieldStyles.pagination}>
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