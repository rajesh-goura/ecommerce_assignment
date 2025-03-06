// import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import authReducer from './slices/authSlice';
// import userReducer from './slices/usersSlice';
// import productReducer from './slices/productSlice';
// import resetMiddleware from './slices/resetMiddleware';

// const combinedReducer = combineReducers({
//   auth: authReducer,
//   user: userReducer,
//   products: productReducer,
// });


// const rootReducer = (state: any, action: any) => {
//   if (action.type === 'user/reset' || action.type === 'products/reset') {
//     return {
//       ...state,
//       user: undefined,
//       products: undefined,
//     };
//   }
//   return combinedReducer(state, action);
// };

// const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(resetMiddleware),
// });

// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;

// export default store;


import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import AsyncStorage from "@react-native-async-storage/async-storage"
import authReducer from './slices/authSlice';
import userReducer from './slices/usersSlice';
import productReducer from './slices/productSlice';
import resetMiddleware from './slices/resetMiddleware';

const authPersistConfig = {
  key: 'auth',
  storage:AsyncStorage,
  whitelist: ['token'] 
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  user: userReducer,
  products: productReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(resetMiddleware),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;