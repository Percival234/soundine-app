import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { UserType } from '@/types/user';

import { userApi } from '@/redux/endpoints/userEndpoints';

type initialStateType = {
  user: null | UserType;
  isAuth: boolean;
};

const initialState: initialStateType = {
  user: null,
  isAuth: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logOut: (state) => {
      state.user = null;
      state.isAuth = false;
      localStorage.removeItem('token');
      document.title = 'Soundine';
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        userApi.endpoints.getCurrentUser.matchFulfilled,
        (state, action: PayloadAction<{ user: UserType }>) => {
          const user = action.payload.user;
          if (user) {
            state.user = action.payload.user;
            state.isAuth = true;
          }
        }
      )
      .addMatcher(
        userApi.endpoints.signIn.matchFulfilled,
        (state, action: PayloadAction<{ token: string }>) => {
          const token = action.payload.token;
          if (token) {
            state.isAuth = true;
            localStorage.setItem('token', token);
          }
        }
      )
      .addMatcher(
        userApi.endpoints.signUp.matchFulfilled,
        (state, action: PayloadAction<{ token: string }>) => {
          const token = action.payload.token;
          if (token) {
            state.isAuth = true;
            localStorage.setItem('token', token);
          }
        }
      );
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
