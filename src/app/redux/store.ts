import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import userReducer from './slices/usersSlice';
import productReducer from './slices/productSlice';
import resetMiddleware from './slices/resetMiddleware';

const combinedReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  products: productReducer,
});


const rootReducer = (state: any, action: any) => {
  if (action.type === 'user/reset' || action.type === 'products/reset') {
    return {
      ...state,
      user: undefined,
      products: undefined,
    };
  }
  return combinedReducer(state, action);
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(resetMiddleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
