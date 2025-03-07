import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CardData, PopuplState } from '@utils/types/types';

const initialState: PopuplState = {
  isOpen: false,
  cardData: null,
};

const popuplSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal(state, action: PayloadAction<CardData>) {
      state.isOpen = true;
      state.cardData = action.payload;
    },
    closeModal(state) {
      state.isOpen = false;
      state.cardData = null;
    },
  },
});

export const { openModal, closeModal } = popuplSlice.actions;
export type RootState = ReturnType<typeof popuplSlice.getInitialState>;
export default popuplSlice.reducer;