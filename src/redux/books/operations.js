import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://readjourney.b.goit.study/api';

export const fetchBooks = createAsyncThunk("/books/recommend",
   async (_, thunkAPI) => {

      try {
        const response = await axios.get("/books/recommend");
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
});


