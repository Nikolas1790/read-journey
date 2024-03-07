import { createSlice } from "@reduxjs/toolkit";
import { addBookById, fetchBooks, ownBooks } from "./operations";


const bookSlice = createSlice({
  name: "book",
  initialState: {
    data: [],
    favorite: [], 
    ownBooks: [],
    loading: false,
    error: null,
    totalPages: 1, // Добавлено поле общего количества страниц
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.results;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(addBookById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addBookById.fulfilled, (state, action) => {
        state.loading = false;
        state.favorite = action.payload;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(addBookById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(ownBooks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(ownBooks.fulfilled, (state, action) => {
        state.loading = false;
        // console.log(action.payload)
        state.ownBooks = action.payload;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(ownBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

  },
});
export default bookSlice.reducer;
