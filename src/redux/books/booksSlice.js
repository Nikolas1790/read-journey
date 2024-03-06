import { createSlice } from "@reduxjs/toolkit";
import { fetchBooks } from "./operations";


const bookSlice = createSlice({
  name: "book",
  initialState: {
    data: [],
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

  },
});
export default bookSlice.reducer;
