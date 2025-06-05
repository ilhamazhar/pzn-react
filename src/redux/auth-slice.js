import { createSlice } from '@reduxjs/toolkit';
import { jwtDecode } from 'jwt-decode';

const validateToken = (token) => {
  if (!token) return false;

  try {
    const decoded = jwtDecode(token);

    if (!decoded?.user?.validateToken) {
      return false;
    }

    if (decoded.exp && decoded.exp * 1000 < Date.now()) {
      return false;
    }

    return true;
  } catch {
    return false;
  }
};
const initialState = {
  token: null,
  isAuthenticated: false,
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      const token = action.payload;

      if (validateToken(token)) {
        state.token = token;
        state.isAuthenticated = true;
        state.user = jwtDecode(token).user;
      } else {
        state.token = null;
        state.isAuthenticated = false;
        state.user = null;
      }
    },
    clearAuth: (state) => {
      state.token = null;
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { setToken, clearAuth } = authSlice.actions;
export default authSlice.reducer;
