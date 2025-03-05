import { Middleware } from '@reduxjs/toolkit';
import { logout } from '../slices/authSlice';
import { AnyAction } from 'redux';

const resetMiddleware: Middleware = (store) => (next) => (action: any) => {
  if (action.type === logout.fulfilled.type) {
    store.dispatch({ type: 'user/reset' });
    store.dispatch({ type: 'products/reset' });
  }
  return next(action);
};

export default resetMiddleware;
