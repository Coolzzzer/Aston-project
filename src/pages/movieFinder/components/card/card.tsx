import React from 'react';
import './card.css';

type Movie = {
  imdbID: string;
  Poster: string;
  Title: string;
  Year: string;
}

type CardProps = {
  currentMovies: Movie[];
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

