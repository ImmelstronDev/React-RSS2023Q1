import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CardData } from 'modules/components/card/card';

interface FormSlice {
  formData: CardData[];
}

const initialState: FormSlice = {
  formData: [],
};

export const formSlice = createSlice({
  name: 'formData',
  initialState,
  reducers: {
    writeFormData(state, action: PayloadAction<CardData>) {
      const currentState = state;
      currentState.formData = [...currentState.formData, action.payload];
    },
  },
});

export default formSlice.reducer;
