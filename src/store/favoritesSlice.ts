import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FavoritesState, Film } from "@utils/types/types";
import { STORAGE_KEYS } from "@utils/constants/constants";
import { getLocalStorageItem, setLocalStorageItem } from "@utils/storage/localStorage";

const initialState: FavoritesState = {
  favorites: getLocalStorageItem(STORAGE_KEYS.FAVORITES) || [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Film>) => {
      const exists = state.favorites.find((film) => film.id === action.payload.id);
      if (!exists) {
        state.favorites.push(action.payload);
        setLocalStorageItem(STORAGE_KEYS.FAVORITES, state.favorites);
      }
    },
  },
});

export const { addFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;