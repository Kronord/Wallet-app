import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://miniature-space-chainsaw-5jp7v7gw6jf7667-3020.app.github.dev/api/auth';

const jwtToken = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/registration', credentials);
    console.log(data);
    const { user, token } = data.ResponseBody;
    jwtToken.set(token);
    return { user, token };
  } catch (error) {
    return (error);
  }
});

const login = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/login', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    return (error);
  }
});

const logOut = createAsyncThunk('auth/logout', async id => {
  try {
    await axios.post('/logout', id);
    token.unset();
  } catch (error) {
    return (error)
  }
});

const getCurrentUser = createAsyncThunk('auth/refresh', async (_, thunkApi) => {
  const state = thunkApi.getState();
  const persistedToken = state.auth.token;

  if (persistedToken === null) {
    return thunkApi.rejectWithValue();
  }

  jwtToken.set(persistedToken);
  try {
    const { data } = await axios.get('/auth/users/current');
    console.log(data);

    return data;
  } catch (error) {
    return (error);
  }
});

export { register, login, logOut, getCurrentUser };