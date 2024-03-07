import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://readjourney.b.goit.study/api';

export const fetchBooks = createAsyncThunk("/books/recommend",
  async ({ page = 1, limit = 10 }, thunkAPI) => {

    try {
      const response = await axios.get(`/books/recommend?page=${page}&limit=${limit}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
});


export const addBookById = createAsyncThunk("/books/add",
  async (id, thunkAPI) => {
    try {
      const response = await axios.post(`/books/add/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
});

export const ownBooks = createAsyncThunk("/books/own",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/books/own`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
});
