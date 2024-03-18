import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { useLocation } from 'react-router-dom';

axios.defaults.baseURL = 'https://readjourney.b.goit.study/api';

// Utility to add JWT
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

/*
 * POST @ /users/signup
 * body: { name, email, password }
 */
export const register = createAsyncThunk(
  '/users/signup',
  async (credentials, thunkAPI) => {
    
    try {
      const res = await axios.post('/users/signup', credentials);      
      // After successful registration, add the token to the HTTP header      
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * POST @ /users/signin
 * body: { email, password }
 */
export const logIn = createAsyncThunk(
  '/users/signin',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/signin', credentials);
      // After successful login, add the token to the HTTP header
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * POST @ /users/signout
 * headers: Authorization: Bearer token
 */
export const logOut = createAsyncThunk('/users/signout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/signout');
    // After a successful logout, remove the token from the HTTP header
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});



/*
 * GET @ /users/current
 * headers: Authorization: Bearer token
 */
// export const refreshUser = createAsyncThunk(
//   '/users/current',
//   async (_, thunkAPI) => {
//     // Reading the token from the state via getState()
//     const state = thunkAPI.getState();
//     const persistedToken = state.auth.token;
//     if (persistedToken === null) {
//       // If there is no token, exit without performing any request
//       return thunkAPI.rejectWithValue('Unable to fetch user');
//     }

//     try {
//       // If there is a token, add it to the HTTP header and perform the request
//       setAuthHeader(persistedToken);
//       const res = await axios.get('/users/current');
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
export const refreshUser = createAsyncThunk(
  '/users/current',
  async (_, thunkAPI) => {
    const location = useLocation();
    if(location.pathname === '/register' || location.pathname === '/login'){
      return;
      }
    // Reading the token from the state via getState()
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    
    // If there is no token, exit without performing any request
    if (!persistedToken) {
      // explicitly return early to avoid making a call
      return thunkAPI.rejectWithValue('No token found, unauthorized to fetch user');
    }
console.log(persistedToken)
    try {
      // If there is a token, add it to the HTTP header and perform the request
      setAuthHeader(persistedToken);
      const response = await axios.get('/users/current');
      return response.data;
    } catch (error) {
      // clear token and user information if request fails
      clearAuthHeader();
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
