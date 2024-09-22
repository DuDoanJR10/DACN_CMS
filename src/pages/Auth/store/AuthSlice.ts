import { createSlice } from '@reduxjs/toolkit';
import { AuthState } from 'types/auth';

const initialState = {
  isLogin: false,
  authInfo: {},
} as AuthState;

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsLogin(state, action) {
      state.isLogin = action.payload;
    },
    setAuthInfo(state, action) {
      state.authInfo = action.payload;
    },
  },
});

export const { setIsLogin, setAuthInfo } = authSlice.actions;
