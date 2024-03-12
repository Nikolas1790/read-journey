import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// axios.defaults.baseURL = 'https://readjourney.b.goit.study/api';

export const fetchBooks = createAsyncThunk("/books/recommend",
  async ({ page = 1, limit = 10, title ="", autor ="" }, thunkAPI) => {
    try {
      const response = await axios.get(`/books/recommend?page=${page}&limit=${limit}&title=${title}&author=${autor}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
});

export const addNewBook = createAsyncThunk("/books/addNew",
  async (data, thunkAPI) => {
    try {
      // console.log(data)
      const response = await axios.post(`/books/add`, data);
      return response.data;
    } catch (e) {
      // console.log(e)
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
export const ownBooks = createAsyncThunk("/books/own",
  async (status="", thunkAPI) => {
    try {
      const url = status ? `/books/own?status=${status}` : "/books/own";
      const response = await axios.get(url);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
});

export const readingStart = createAsyncThunk("/books/reading/start",
  async (data, thunkAPI) => {
    try {
      // console.log(data)
      const response = await axios.post(`/books/reading/start`, data);
      return response.data;
    } catch (e) {
      // console.error(e.response.data);
      return thunkAPI.rejectWithValue(e.message);
    }
});

export const readingStop = createAsyncThunk("/books/reading/finish",
  async (data, thunkAPI) => {
    try {
      // console.log(data)
      const response = await axios.post(`/books/reading/finish`, data );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
});

export const readingDell = createAsyncThunk("/books/reading",
  async (data, thunkAPI) => {
    try {
      // console.log(data)
      const response = await axios.delete(`/books/reading?bookId=${data.bookId}&readingId=${data.readingId}` );
      return response.data;
    } catch (e) {
      // console.log(e)
      return thunkAPI.rejectWithValue(e.message);
    }
});


export const bookReadingInf = createAsyncThunk("/books/id",
  async (id, thunkAPI) => {
    try {
      // console.log(id)
      const response = await axios.get(`/books/${id}` );
      return response.data;
    } catch (e) {
      
      return thunkAPI.rejectWithValue(e.message);
    }
});