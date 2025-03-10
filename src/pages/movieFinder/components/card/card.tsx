import React from 'react';
import './card.css';
import { URLs } from '@utils/constants/constants';
import { useNavigate } from 'react-router-dom';


type Movie = {
  imdbID: string;
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
}

type CardProps = {
  currentMovies: Movie[];
}

export const Card: React.FC<CardProps> = ({ currentMovies }) => {
  const navigate = useNavigate();

  const handleOpenModal = (imdbID:string) => {
      const movie = currentMovies.find(movie => movie.imdbID === imdbID);
        if(movie) {
          navigate(`${URLs.HOME_PAGE}${movie.imdbID}`);
        }
      }

	return (
    <>
      {currentMovies.map((movie) => (
        <div className="card" key={movie.imdbID}>
          <img className="cardImg" src={movie.Poster} alt={movie.Title} onClick={() => handleOpenModal(movie.imdbID)}/>
          <div className="cardTitle">{movie.Title}</div>
          <div className="yearCreation">{movie.Year}</div>
          <button className="details" onClick={() => handleOpenModal(movie.imdbID)}>Подробнее</button>
        </div>
      ))}
    </>
  );
};

