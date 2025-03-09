import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HistoryState, SearchHistoryEntry } from "@utils/types/types";
import { STORAGE_KEYS, TIMEZONE } from "@utils/constants/constants";
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from "@utils/storage/localStorage";
import { v4 as uuidv4 } from "uuid";

const initialState: HistoryState = {
  history: getLocalStorageItem(STORAGE_KEYS.HISTORY) || [],
};

const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    addSearchEntry: (state, action: PayloadAction<string>) => {
      const newEntry: SearchHistoryEntry = {
        id: uuidv4(),
        query: action.payload,
        timestamp: new Date().toLocaleString(TIMEZONE.RU),
      };

      state.history.unshift(newEntry);
      setLocalStorageItem(STORAGE_KEYS.HISTORY, state.history);
    },
  },
});

export const { addSearchEntry } = historySlice.actions;
export default historySlice.reducer;
