import { createSlice } from '@reduxjs/toolkit';
const defaultState = {
  value: '',
};
export const counterSlice = createSlice({
  name: 'introduction',
  defaultState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
