import { createSlice } from "@reduxjs/toolkit";

export interface IBooks {
  books: [];
  total: number;
}
const initialState: IBooks = {
  books: [],
  total: 0,
};

const books = createSlice({
  name: "books",
  initialState,
  reducers: {},
});
export default books.reducer;
