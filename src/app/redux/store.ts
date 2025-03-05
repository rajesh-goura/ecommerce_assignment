import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import userReducer from './slices/usersSlice';
import productReducer from './slices/productSlice';
const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    products:productReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;