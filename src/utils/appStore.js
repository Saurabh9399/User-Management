import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "./adminSlice";

const appStore = configureStore({
  reducer: { adminReducer },
});

export default appStore;
