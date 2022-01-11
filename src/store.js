import { configureStore } from "@reduxjs/toolkit";
import infoSlice from "./features/timerSlice";

export default configureStore({
  reducer: {
    info: infoSlice,
  },
});