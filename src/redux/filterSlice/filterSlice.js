import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

const filterSlice = createSlice({

  name: 'filter',
  initialState,
  reducers: {
    filteredValue(state, action) {
      state.filter = action.payload;
    },
  },
});


export const { filteredValue } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;