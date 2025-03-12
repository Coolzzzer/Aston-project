import { Card, CardContent, Typography } from "@mui/material";
import { Movie } from "@utils/types/types";
import { useDispatch } from "react-redux";
import { removeFavorite } from "@store/favoritesSlice";
import { useNavigate} from "react-router-dom";
import { URLs } from "@utils/constants/constants";
import movieCardStyle from "./movieCard.module.css";

export const MovieCard: React.FC<{ movie: Movie }> = ({ movie }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = () => {
    dispatch(removeFavorite(movie.imdbID));
  };

  const handleOpenModal = () => {
    navigate(`${URLs.FAVORITES}/${movie.imdbID}`);
  };

  return (
    <Card
      className={movieCardStyle.card}
      variant="outlined"
      sx={{ backgroundColor: "rgba(173, 255, 47, 1)", borderRadius: "95px" }}
    >
      <button
        className={movieCardStyle.deleteButton}
        onClick={handleDelete}
        title="Удалить из Избранного"
      >
        ✖
      </button>
      <img
        className={movieCardStyle.img}
        src={movie.Poster}
        alt={movie.Title}
        onClick={handleOpenModal}
      />
      <CardContent className={movieCardStyle.content}>
        <Typography variant="h5" component="div">{movie.Title}</Typography>
        <Typography color="text.secondary">{movie.Year}</Typography>
      </CardContent>
    </Card>
  );
};
