import { configureStore } from "@reduxjs/toolkit";
import featured from "./slices/home/featured";
import auth from './slices/auth'
const store = configureStore({
  reducer: {
    featured: featured

  },
});

export default store;