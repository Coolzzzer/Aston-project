import React from 'react';
import { useDispatch} from 'react-redux';
import './card.css';
import { openModal } from '@store/popupSlice';


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
  const dispatch = useDispatch();

  const handleOpenModal = (imdbID:string) => {
      const movie = currentMovies.find(movie => movie.imdbID === imdbID);
        if(movie) {
          console.log(movie);
          dispatch( openModal(movie));
        }
      }

	return (
    <>
      {currentMovies.map((movie) => (
        <div className="card" key={movie.imdbID}>
          <img className="cardImg" src={movie.Poster} alt={movie.Title} onClick={() => handleOpenModal(movie.imdbID)}/>
          <div className="cardTitle">{movie.Title}</div>
          <div className="yearCreation">{movie.Year}</div>
          <button className="details" onClick={() => handleOpenModal(movie.imdbID)}>Detail</button>
        </div>
      ))}
    </>
  );
};

