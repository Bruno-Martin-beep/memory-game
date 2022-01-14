import { configureStore } from "@reduxjs/toolkit";
import cardListSlice from "./features/cardListSlice";
import infoSlice from "./features/timerSlice";

export default configureStore({
  reducer: {
    cardList: cardListSlice,
    info: infoSlice,
  },
});