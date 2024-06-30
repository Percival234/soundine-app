import { setupListeners } from '@reduxjs/toolkit/query';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { api } from '@/redux/API/API';

import userReducer from '@/redux/slices/userSlice';
import playerReducer from '@/redux/slices/playerSlice';

export const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  user: userReducer,
  player: playerReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
