import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {},
  isAuthenticated: false,
  accessToken: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.isAuthenticated = true;
      state.accessToken = action.payload.accessToken;
    },
   
    clearUser: (state) => {
      state.user = {};
      state.isAuthenticated = false;
      state.accessToken = null;

    },
   
  },
});

export const { setUser, clearUser   } = userSlice.actions;

export const selectUser = (state) => state.user.user;
export const selectIsAuthenticated = (state) => state.user.isAuthenticated;
export const selectAccessToken = (state) => state.user.accessToken;


export default userSlice.reducer;