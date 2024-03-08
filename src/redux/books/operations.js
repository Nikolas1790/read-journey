import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// axios.defaults.baseURL = 'https://readjourney.b.goit.study/api';

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

export const deleteBook = createAsyncThunk("/books/remove",
  async (id, thunkAPI) => {
    try {      
      const response = await axios.delete(`/books/remove/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const readingStart = createAsyncThunk("/books/reading/start",
  async (data, thunkAPI) => {
    try {
      console.log(data)
      const response = await axios.post(`/books/reading/start`, data);
      return response.data;
    } catch (e) {
      console.error(e.response.data);
      return thunkAPI.rejectWithValue(e.message);
    }
});

export const readingStop = createAsyncThunk("/books/reading/finish",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post(`/books/reading/finish`, { page: data.page });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
});