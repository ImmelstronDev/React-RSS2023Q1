import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface SearchSlice {
  value: string;
}

const initialState: SearchSlice = {
  value: '',
};

export const searchSlice = createSlice({
  name: 'value',
  initialState,
  reducers: {
    writeSearch(state, action: PayloadAction<string>) {
      const currentState = state;
      currentState.value = action.payload;
    },
  },
});

export default searchSlice.reducer;
