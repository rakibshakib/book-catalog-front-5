import { configureStore } from "@reduxjs/toolkit";
import BooksReducer from "./features/books/bookSlice";
import AuthReducer from "./features/auth/authSlice";

const store = configureStore({
  reducer: {
    books: BooksReducer,
    auth: AuthReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
