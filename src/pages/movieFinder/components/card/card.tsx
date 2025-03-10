import React from 'react';
import { URLs } from '@utils/constants/constants';
import { useNavigate } from 'react-router-dom';
import cardStyles from "./card.module.css"


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
        <div className={cardStyles.card} key={movie.imdbID}>
          <img className={cardStyles.cardImg} src={movie.Poster} alt={movie.Title} onClick={() => handleOpenModal(movie.imdbID)}/>
          <div className={cardStyles.cardTitle}>{movie.Title}</div>
          <div className={cardStyles.yearCreation}>{movie.Year}</div>
          <button className={cardStyles.details} onClick={() => handleOpenModal(movie.imdbID)}>Подробнее</button>
          <button className={cardStyles.likeButton} title='like'></button>
        </div>
      ))}
    </>
  );
};

