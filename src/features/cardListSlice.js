import { createSlice } from "@reduxjs/toolkit";

// Slice Object
///////////////////////////////////////

export const cardListSlice = createSlice({
  name: "cardList",
  initialState: {
    allCards: [],
    observer1: null,
    observer2: null,
    isFinished: false,
  },
  reducers: {
    setAllcards: (state, action) => {state.allCards = action.payload},
    toggleActive: (state, action) => {
      const { id, active } = action.payload;
      state.allCards = [
        ...state.allCards.slice(0, id), 
        { ...state.allCards[id], active: active }, 
        ...state.allCards.slice(id + 1)
      ]
    },
    setObserver1: (state, action) => {state.observer1 = action.payload},
    setObserver2: (state, action) => {state.observer2 = action.payload},
    setIsFinished: (state, action) => {state.isFinished = action.payload}
  },
});

// Selectors
///////////////////////////////////////

export const selectAllCards = (state) => state.cardList.allCards;
export const selectObserver1 = (state) => state.cardList.observer1;
export const selectObserver2 = (state) => state.cardList.observer2;
export const selectIsFinished = (state) => state.cardList.isFinished;


// Exports
///////////////////////////////////////

export const { setAllcards, toggleActive, setObserver1, setObserver2, setIsFinished } = cardListSlice.actions;

export default cardListSlice.reducer;