import { configureStore } from "@reduxjs/toolkit";
import hobbySlice from "components/Home/HobbyList/hobbySlice";

const store = configureStore({
  reducer: {
    hobby: hobbySlice,
  },
});

export default store;
