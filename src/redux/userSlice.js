import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    login: '',
    password: '',
    isLoggedIn: false,
  },
  reducers: {
    logIn(state, action) {
      state.login = action.payload;
      // state.isLoggedIn = true;
      if (action.payload.toLowerCase() !== 'julie') {
        state.isLoggedIn = false;
      } else {
        state.isLoggedIn = true;
      }
    },
    logPassword(state, action) {
      state.password = action.payload;
      if (action.payload !== '12345') {
        state.isLoggedIn = false;
      } else {
        state.isLoggedIn = true;
      }
    },
    logOut(state) {
      state.login = '';
      state.password = '';
      state.isLoggedIn = false;
    },
  },
});

export const { logIn, logOut, logPassword } = userSlice.actions;
