import React from 'react';
import './resultField.css';

interface ResultFieldProps {
  movies: any[];
}

const ResultField: React.FC<ResultFieldProps> = ({ movies }) => {
  return (
    <div className="resultField">
      {movies.map((movie) => (
        <div className="card" key={movie.imdbID}>
          <img className="cardImg" src={movie.Poster} alt={movie.Title} />
          <div className="cardTitle">{movie.Title}</div>
          <div className="yearCreation">{movie.Year}</div>
          <button className="details">Detail</button>
        </div>
      ))}
    </div>
  );
}

export default ResultField;


