import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FavoritesState, Movie } from "@utils/types/types";
import { STORAGE_KEYS } from "@utils/constants/constants";
import { getLocalStorageItem, setLocalStorageItem } from "@utils/storage/localStorage";

const initialState: FavoritesState = {
  favorites: getLocalStorageItem(STORAGE_KEYS.FAVORITES) || [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Movie>) => {
      const exists = state.favorites.some((film) => film.imdbID === action.payload.imdbID);
      if (!exists) {
        state.favorites.push(action.payload);
      } else {
        state.favorites = state.favorites.filter((film) => film.imdbID !== action.payload.imdbID);
      }
      setLocalStorageItem(STORAGE_KEYS.FAVORITES, state.favorites);
    },
  },
});

export const { addFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
