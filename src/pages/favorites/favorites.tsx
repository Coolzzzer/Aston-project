import { useSelector } from "react-redux";
import {
  Card,
  CardContent,
  Typography,
  Grid2,
  Container,
  Stack,
} from "@mui/material";
import { MovieCard } from "@components/movieCard/movieCard";
import favoritesStyle from "@pages/favorites/favorites.module.css";
import { selectFavorites } from "@store/favoritesSlice";

export function Favorites() {
  const favorites = useSelector(selectFavorites);

  return (
    <Stack className={favoritesStyle.favoritesStack}>
      <Typography variant="h2" component="div" color="white">
        Избранное
      </Typography>
      <Container className={favoritesStyle.favoritesContainer} maxWidth="xl">
        <Card
          style={{
            maxHeight: "60vh",
            overflow: "auto",
            borderRadius: "60px",
            backgroundColor: "var(--header-footer-bg-color)",
          }}
        >
          <CardContent>
            <Grid2 className={favoritesStyle.grid2} container spacing={2}>
              {favorites.length > 0 ? (
                favorites.map((movie) => (
                  <Grid2 key={movie.imdbID}>
                    <MovieCard movie={movie} />
                  </Grid2>
                ))
              ) : (
                <Typography variant="h6" component="div">
                  У вас нет избранных фильмов.
                </Typography>
              )}
            </Grid2>
          </CardContent>
        </Card>
      </Container>
    </Stack>
  );
};

