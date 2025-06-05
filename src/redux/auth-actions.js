import axios from 'axios';
import api from '../utils/axios';
import { clearAuth, setToken } from './auth-slice';
import { clearUser } from './user-slice';
import { VITE_BASE_URL } from '../constant';

export const logout = () => async (dispatch) => {
  try {
    await api.delete('/api/public/logout', {}, { withCredentials: true });
    dispatch(clearAuth());
    dispatch(clearUser());
  } catch (error) {
    console.error('Logout failed:', error);
    dispatch(clearAuth());
    dispatch(clearUser());
  }
};

export const refreshToken = async (dispatch) => {
  const response = await axios.post(
    `${VITE_BASE_URL}/api/public/refresh-token`,
    {},
    { withCredentials: true },
  );
  const newToken = response.data.accessToken;
  dispatch(setToken(newToken));
  return newToken;
};
