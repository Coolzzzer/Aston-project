import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MoviesState, Movie } from "@utils/types/types";

const initialState: MoviesState = {
  movies: [],
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    saveMovies: (state: MoviesState, action: PayloadAction<Movie[]>) => {
      state.movies = action.payload;
    },
    clearMovies: (state: MoviesState) => {
        state.movies = [];
    },  
  }
  },);

export const { saveMovies, clearMovies } = moviesSlice.actions;
export default moviesSlice.reducer;