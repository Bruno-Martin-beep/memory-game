import { createSlice } from "@reduxjs/toolkit";

// Slice Object
///////////////////////////////////////

export const infoSlice = createSlice({
  name: "info",
  initialState: {
    time: 0,
    errors: 0,
    isPlaying: false,
  },
  reducers: {
    addTime: (state) => void (state.time += 10),
    cleartime: (state) => void (state.time = 0),
    addError: (state) => void (state.errors += 1),
    clearErrors: (state) => void (state.errors = 0),
    togglePlaying: (state, action) => void (state.isPlaying = action.payload),
  },
});

// Selectors
///////////////////////////////////////

export const selectTime = (state) => state.info.time;
export const selectErrors = (state) => state.info.errors;
export const selectIsPlaying = (state) => state.info.isPlaying;

// Exports
///////////////////////////////////////

export const { addTime, cleartime, addError, clearErrors, togglePlaying } = infoSlice.actions;

export default infoSlice.reducer;
