import { useDispatch, useSelector } from "react-redux";
import { addFavorite } from "@store/favoritesSlice";
import { URLs } from "@utils/constants/constants";
import { useNavigate } from "react-router-dom";
import cardStyles from "./card.module.css";
import { Movie } from "@utils/types/types";
import { selectFavorites } from "@store/favoritesSlice";

type CardProps = {
  currentMovies: Movie[];
};

export const Card: React.FC<CardProps> = ({ currentMovies }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const favorites = useSelector(selectFavorites);

  const handleOpenModal = (imdbID: string) => {
    const movie = currentMovies.find((movie) => movie.imdbID === imdbID);
    if (movie) {
      navigate(`${URLs.HOME_PAGE}${movie.imdbID}`);
    }
  };

  const handleLike = (movie: Movie) => {
    dispatch(addFavorite(movie));
  };

  return (
    <>
      {currentMovies.map((movie) => {
        const isLiked = favorites.some((fav) => fav.imdbID === movie.imdbID);
        return (
          <div className={cardStyles.card} key={movie.imdbID}>
            <img
              className={cardStyles.cardImg}
              src={movie.Poster}
              alt={movie.Title}
              onClick={() => handleOpenModal(movie.imdbID)}
            />
            <div className={cardStyles.cardTitle}>{movie.Title}</div>
            <div className={cardStyles.yearCreation}>{movie.Year}</div>
            <button
              className={cardStyles.details}
              onClick={() => handleOpenModal(movie.imdbID)}
            >
              Подробнее
            </button>
            <button
              className={`${cardStyles.likeButton} ${isLiked ? cardStyles.pressed : ""}`}
              title="like"
              onClick={() => handleLike(movie)}
            ></button>
          </div>
        );
      })}
    </>
  );
};
