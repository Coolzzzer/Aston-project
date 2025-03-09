import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid2,
  Container,
  Stack,
} from "@mui/material";
import { collection } from "../../mock/collectionMovies";
import MovieCard from "@components/movieCard/movieCard";
import favoritesStyle from "@pages/favorites/favorites.module.css";

const MovieList: React.FC = () => {
  return (
    <Stack className={favoritesStyle.favoritesStack}>
      <Typography variant="h2" component="div">
        Избранное
      </Typography>
      <Container className={favoritesStyle.favoritesContainer} maxWidth="xl">
        <Card
          style={{
            maxHeight: "80vh",
            overflow: "auto",
            borderRadius: "20px",
            backgroundColor: "var(--header-footer-bg-color)", // здесь не получается пока вынести стиль в favorites.module.css, так как он кроме параметра max-height не отображает остальные, ищу как это исправить
          }}
        >
          <CardContent>
            <Grid2 className={favoritesStyle.grid2} container spacing={2}>
              {collection.map((movie, index) => (
                <Grid2 key={index}>
                  <MovieCard movie={movie} />
                </Grid2>
              ))}
            </Grid2>
          </CardContent>
        </Card>
      </Container>
    </Stack>
  );
};

export {MovieList};
