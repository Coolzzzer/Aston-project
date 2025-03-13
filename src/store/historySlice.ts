import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HistoryState, SearchHistoryEntry } from "@utils/types/types";
import { STORAGE_KEYS, TIMEZONE } from "@utils/constants/constants";
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from "@utils/storage/localStorage";
import { v4 as uuidv4 } from "uuid";
import { RootState } from "@store/store";


const initialState: HistoryState = {
  history: getLocalStorageItem(STORAGE_KEYS.HISTORY) || [],
};

const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    addSearchEntry: (state, action: PayloadAction<string>) => {
      const lastEntry = state.history[0];
      if (lastEntry?.query === action.payload) return;

      const newEntry: SearchHistoryEntry = {
        id: uuidv4(),
        query: action.payload,
        timestamp: new Date().toLocaleString(TIMEZONE.RU),
      };

      state.history.unshift(newEntry);
      setLocalStorageItem(STORAGE_KEYS.HISTORY, state.history);
    },
    clearHistory: (state) => {
      state.history = [];
      setLocalStorageItem(STORAGE_KEYS.HISTORY, []);
    },
  },
});

export const { addSearchEntry, clearHistory } = historySlice.actions;
export default historySlice.reducer;
export const selectHistory = (state: RootState) => state.history.history;

