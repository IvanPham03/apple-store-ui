import { configureStore } from "@reduxjs/toolkit";
import featured from "./slices/home/featured";

const store = configureStore({
  reducer: {
    featured: featured

  },
});

export default store;