import { Card, CardContent, Typography } from "@mui/material";
import { Movie } from "@utils/types/types";
import movieCardStyle from "./movieCard.module.css";

const MovieCard: React.FC<{ movie: Movie }> = ({ movie }) => {
  return (
    <Card className={movieCardStyle.card} variant="outlined">
      <img
        className={movieCardStyle.img}
        src={movie.Poster}
        alt={movie.Title}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {movie.Title}
        </Typography>
        <Typography color="text.secondary">{movie.Year}</Typography>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
