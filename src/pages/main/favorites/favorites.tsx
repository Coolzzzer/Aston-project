import React from 'react';
import { Card, CardContent, Typography, Grid2 } from '@mui/material';
import { collection, Movie } from './collectionMovies';


const MovieCard: React.FC<{ movie: Movie }> = ({ movie }) => {
  return (
    <Card  style={{ maxWidth: 345, margin: '16px', height: '100%' }}>
      <img src={movie.Poster} alt={movie.Title} style={{ width: '100%', objectFit: 'cover' , height: '520px'}} />
      <CardContent>
        <Typography variant="h5" component="div">
          {movie.Title}
        </Typography>
        <Typography color="text.secondary">
          {movie.Year} - {movie.Rated}
        </Typography>
        <Typography  variant="body2" color="text.secondary">
          {movie.Plot}
        </Typography>
      </CardContent>
    </Card>
  );
};

const MovieList: React.FC = () => {
  return (
    <Grid2 container spacing={2} justifyContent="center">
      {collection.map((movie, index) => (
        <Grid2 key={index} >
          <MovieCard movie={movie} />
        </Grid2>
      ))}
    </Grid2>
  );
};

export default MovieList;