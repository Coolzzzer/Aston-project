import { Card, CardContent, Typography } from "@mui/material";
import { Movie } from "src/mock/collectionMovies";
import movieCardStyle from "./movieCard.module.css";

const MovieCard: React.FC<{ movie: Movie }> = ({ movie }) => {
  return (
    <Card className={movieCardStyle.card}>
      <img
        className={movieCardStyle.img}
        src={movie.Poster}
        alt={movie.Title}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {movie.Title}
        </Typography>
        <Typography color="text.secondary">
          {movie.Year} - {movie.Rated}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {movie.Plot}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
