import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CardData } from 'modules/components/card/card';

interface DataSlice {
  cardData: CardData[];
}

const initialState: DataSlice = {
  cardData: [],
};

export const dataSlice = createSlice({
  name: 'cardData',
  initialState,
  reducers: {
    writeDataCard(state, action: PayloadAction<CardData[]>) {
      const currentState = state;
      currentState.cardData = [...action.payload];
    },
  },
});

export default dataSlice.reducer;
