import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./components/Reducer/UserReducer";

const store = configureStore({
  reducer: {
    user: UserReducer,
  },
});

export default store;
