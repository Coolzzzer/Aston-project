import React from 'react';
import './card.css';

type CardProps = {
  currentMovies: any[];
}

export const Card: React.FC<CardProps> = ({ currentMovies }) => {
  return (
    <>
      {currentMovies.map((movie) => (
        <div className="card" key={movie.imdbID}>
          <img className="cardImg" src={movie.Poster} alt={movie.Title} />
          <div className="cardTitle">{movie.Title}</div>
          <div className="yearCreation">{movie.Year}</div>
          <button className="details">Detail</button>
        </div>
      ))}
    </>
  );
};

