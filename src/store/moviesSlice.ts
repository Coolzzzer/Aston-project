import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MoviesState, Movie } from "@utils/types/types";
import { RootState } from "@store/store";

const initialState: MoviesState = {
  movies: [],
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    saveMovies: (state, action: PayloadAction<Movie[]>) => {
      state.movies = action.payload;
    },
    clearMovies: (state) => {
      state.movies = [];
    },
  },
});

export const { saveMovies, clearMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
export const selectMovies = (state: RootState): Movie[] => state.movies.movies;
